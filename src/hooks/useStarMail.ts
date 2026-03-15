/**
 * useStarMail — Phase 4: Star-Mail logic hook
 *
 * Design decisions for Fire HD 10 (3 GB RAM):
 *
 * 1. PULL-ON-OPEN / APP-RESUME STRATEGY
 *    No persistent Supabase Realtime WebSocket subscription.
 *    Messages are fetched once on mount (tab open) and again
 *    whenever AppState transitions background → active.
 *    This keeps the JS heap free and avoids the socket keepalive
 *    overhead that drains Libby's battery on a constrained device.
 *
 * 2. SEQUENTIAL ANIMATION GUARD (isStarlightBusy)
 *    The envelope fly-in animation MUST NOT fire while Starlight
 *    is mid-pulse.  The parent screen owns the `isStarlightBusy`
 *    flag (e.g. set true during Starlight's entrance, cleared when
 *    the idle loop begins).  This hook exposes `canShowEnvelope`
 *    which gates the animation: new mail is held in a pending ref
 *    until Starlight signals idle.
 *
 * 3. PARENT TONE RESOLUTION
 *    Tone is derived client-side from `sender_name` so it works
 *    even if a row was inserted without a `tone_type` value.
 *    DB-stored tone_type acts as an audit trail / server hint.
 */

import { StarMailMessage, ToneType, supabase } from '@/src/lib/supabase';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

// ── Tone resolution ───────────────────────────────────────────────────────────

/**
 * Maps a sender name to the correct voice/tone preset.
 * Case-insensitive; trims whitespace.
 *
 * Amber  (Sister / Mom role) → 'Supportive Auntie'
 * Brandon (Dad role)         → 'Warm/Fatherly'
 * Any other sender           → 'Supportive/Magical' (default)
 */
function resolveTone(senderName: string): ToneType {
  switch (senderName.trim().toLowerCase()) {
    case 'amber':
      return 'Supportive Auntie';
    case 'brandon':
      return 'Warm/Fatherly';
    default:
      return 'Supportive/Magical';
  }
}

/**
 * Merge the DB-stored tone_type with the client-derived one.
 * Client derivation wins for known parents; DB value is kept for
 * unknown senders so custom tones set server-side are respected.
 */
function enrichMessage(raw: StarMailMessage): StarMailMessage {
  const derivedTone = resolveTone(raw.sender_name);
  return {
    ...raw,
    // Only override if we have a specific mapping; fall back to DB value
    tone_type:
      derivedTone !== 'Supportive/Magical'
        ? derivedTone
        : raw.tone_type ?? 'Supportive/Magical',
  };
}

// ── Hook interface ────────────────────────────────────────────────────────────

export interface UseStarMailOptions {
  /**
   * Hardware guard: set to `true` while Starlight the Unicorn is
   * animating (entrance / busy state).  The hook will hold the
   * envelope-ready signal until this becomes `false`.
   */
  isStarlightBusy: boolean;
}

export interface UseStarMailReturn {
  /** All messages fetched from Supabase, enriched with derived tone. */
  messages: StarMailMessage[];
  /** Number of unread messages (drives the badge on the StarMail tab). */
  unreadCount: number;
  /** True while a network fetch is in-flight. */
  isLoading: boolean;
  /** Non-null when the last fetch failed. */
  error: string | null;
  /**
   * Fire this when the user opens the inbox manually (e.g. tab press).
   * Also called automatically on mount and on App Resume.
   */
  fetchMessages: () => Promise<void>;
  /** Mark a single message as read in Supabase and local state. */
  markAsRead: (id: string) => Promise<void>;
  /** Mark all unread messages as read in a single Supabase call. */
  markAllAsRead: () => Promise<void>;
  /**
   * Sequential animation gate.
   * TRUE  → new mail arrived AND Starlight is idle → trigger envelope fly-in.
   * FALSE → still waiting for Starlight to finish its animation.
   *
   * The parent screen should reset this by calling `fetchMessages()` or
   * by keeping `isStarlightBusy` accurate.
   */
  canShowEnvelope: boolean;
}

// ── Implementation ────────────────────────────────────────────────────────────

export function useStarMail({
  isStarlightBusy,
}: UseStarMailOptions): UseStarMailReturn {
  const [messages, setMessages] = useState<StarMailMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Tracks whether new mail arrived while Starlight was still busy.
  // Cleared once canShowEnvelope fires (i.e., Starlight goes idle).
  const hasPendingEnvelope = useRef(false);

  // Used by the AppState listener to avoid re-fetching on the initial mount.
  const appState = useRef<AppStateStatus>(AppState.currentState);

  // ── Core fetch ─────────────────────────────────────────────────────────────

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('star_mail')
        .select('id, sender_name, message_content, tone_type, is_read, created_at')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      const enriched: StarMailMessage[] = (data ?? []).map(enrichMessage);
      setMessages(enriched);

      // Signal that an envelope animation is ready; the guard below
      // will only allow it through once Starlight finishes.
      if (enriched.some((m) => !m.is_read)) {
        hasPendingEnvelope.current = true;
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Star-Mail fetch failed.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ── Pull-on-Open / App Resume ──────────────────────────────────────────────
  // No Realtime WebSocket — fetch only on mount and foreground resume.
  // This protects Libby's battery and keeps the Fire HD 10 heap free.

  useEffect(() => {
    // Fetch once when the screen/tab opens.
    fetchMessages();

    const subscription = AppState.addEventListener(
      'change',
      (nextState: AppStateStatus) => {
        const wasInBackground = appState.current.match(/inactive|background/);
        const isNowActive = nextState === 'active';

        if (wasInBackground && isNowActive) {
          // App resumed from background — pull latest messages.
          fetchMessages();
        }

        appState.current = nextState;
      }
    );

    return () => {
      subscription.remove();
    };
  }, [fetchMessages]);

  // ── Hardware Guard: Sequential Animation Gate ──────────────────────────────
  // The envelope flies in ONLY after Starlight transitions to idle.
  // While isStarlightBusy is true the flag is held in hasPendingEnvelope.
  // Once Starlight is idle the flag is consumed and canShowEnvelope fires.
  const canShowEnvelope = hasPendingEnvelope.current && !isStarlightBusy;

  // Consume the flag once the gate opens so the animation fires exactly once.
  if (canShowEnvelope) {
    hasPendingEnvelope.current = false;
  }

  // ── Mark as read ───────────────────────────────────────────────────────────

  const markAsRead = useCallback(async (id: string) => {
    const { error: updateError } = await supabase
      .from('star_mail')
      .update({ is_read: true })
      .eq('id', id);

    if (!updateError) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, is_read: true } : msg))
      );
    }
  }, []);

  const markAllAsRead = useCallback(async () => {
    const unreadIds = messages
      .filter((m) => !m.is_read)
      .map((m) => m.id);

    if (unreadIds.length === 0) return;

    const { error: updateError } = await supabase
      .from('star_mail')
      .update({ is_read: true })
      .in('id', unreadIds);

    if (!updateError) {
      setMessages((prev) => prev.map((msg) => ({ ...msg, is_read: true })));
    }
  }, [messages]);

  // ── Derived state ──────────────────────────────────────────────────────────

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return {
    messages,
    unreadCount,
    isLoading,
    error,
    fetchMessages,
    markAsRead,
    markAllAsRead,
    canShowEnvelope,
  };
}
