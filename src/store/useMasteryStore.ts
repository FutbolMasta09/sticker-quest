import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type StarCount = 0 | 1 | 2 | 3;

export interface StickerProgress {
  id: string;
  stars: StarCount;       // 0 = never attempted, 1-3 = earned
  attempts: number;       // total number of times attempted
  earnedAt: string | null; // ISO timestamp of first star earned
  lastAttemptedAt: string | null; // ISO timestamp of most recent attempt
}

interface MasteryState {
  // Per-sticker progress — keyed by sticker ID
  progress: Record<string, StickerProgress>;

  // Session tracking for the 3-hour daily lock
  sessionDate: string | null;     // 'YYYY-MM-DD' of current session
  sessionStartedAt: string | null; // ISO timestamp when session began today

  // --- Sticker methods ---

  // Record a completed attempt. stars must be 1, 2, or 3.
  // If higher than existing stars, the star count is upgraded.
  recordAttempt: (id: string, stars: 1 | 2 | 3) => void;

  // Get progress for one sticker. Returns a default if never attempted.
  getProgress: (id: string) => StickerProgress;

  // Total stickers with stars >= 1
  getCompletedCount: () => number;

  // Sum of all stars across all stickers
  getTotalStars: () => number;

  // Number of stickers unlocked based on completed count.
  // Starts at 5, unlocks 5 more per chapter (every 5 completions).
  getUnlockedCount: () => number;

  // Current chapter number (1–5)
  getChapterNumber: () => number;

  // --- Session methods ---

  // Call when the app opens or the child starts a quest.
  // Records session start if this is the first action today.
  startSession: () => void;

  // True if more than 3 hours have elapsed since today's session started.
  isSessionLocked: () => boolean;

  // Minutes elapsed in today's session (0 if no session started today).
  getSessionMinutes: () => number;

  // --- Utility ---
  resetAll: () => void;
}

const SESSION_LIMIT_MINUTES = 180; // 3 hours

function todayString(): string {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}

function defaultProgress(id: string): StickerProgress {
  return {
    id,
    stars: 0,
    attempts: 0,
    earnedAt: null,
    lastAttemptedAt: null,
  };
}

export const useMasteryStore = create<MasteryState>()(
  persist(
    (set, get) => ({
      progress: {},
      sessionDate: null,
      sessionStartedAt: null,

      recordAttempt: (id, stars) => {
        set((state) => {
          const existing = state.progress[id] ?? defaultProgress(id);
          const now = new Date().toISOString();
          return {
            progress: {
              ...state.progress,
              [id]: {
                ...existing,
                stars: Math.max(existing.stars, stars) as StarCount,
                attempts: existing.attempts + 1,
                earnedAt: existing.earnedAt ?? now,
                lastAttemptedAt: now,
              },
            },
          };
        });
      },

      getProgress: (id) => {
        return get().progress[id] ?? defaultProgress(id);
      },

      getCompletedCount: () => {
        return Object.values(get().progress).filter((p) => p.stars >= 1).length;
      },

      getTotalStars: () => {
        return Object.values(get().progress).reduce((sum, p) => sum + p.stars, 0);
      },

      getUnlockedCount: () => {
        const completed = get().getCompletedCount();
        // 5 unlocked at start, +5 per chapter (every 5 completions), max 25
        return Math.min(25, 5 + Math.floor(completed / 5) * 5);
      },

      getChapterNumber: () => {
        const completed = get().getCompletedCount();
        // Chapter 1 = 0–4 completed, Chapter 2 = 5–9, ..., Chapter 5 = 20–24
        return Math.min(5, Math.floor(completed / 5) + 1);
      },

      startSession: () => {
        const today = todayString();
        const { sessionDate, sessionStartedAt } = get();

        // Already have an active session today — do nothing
        if (sessionDate === today && sessionStartedAt !== null) return;

        // New day or first session ever — start fresh
        set({
          sessionDate: today,
          sessionStartedAt: new Date().toISOString(),
        });
      },

      isSessionLocked: () => {
        const { sessionDate, sessionStartedAt } = get();
        if (!sessionDate || !sessionStartedAt) return false;
        if (sessionDate !== todayString()) return false;

        const startMs = new Date(sessionStartedAt).getTime();
        const elapsedMinutes = (Date.now() - startMs) / 60_000;
        return elapsedMinutes >= SESSION_LIMIT_MINUTES;
      },

      getSessionMinutes: () => {
        const { sessionDate, sessionStartedAt } = get();
        if (!sessionDate || !sessionStartedAt) return 0;
        if (sessionDate !== todayString()) return 0;

        const startMs = new Date(sessionStartedAt).getTime();
        return Math.floor((Date.now() - startMs) / 60_000);
      },

      resetAll: () => {
        set({
          progress: {},
          sessionDate: null,
          sessionStartedAt: null,
        });
      },
    }),
    {
      name: 'mastery-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
