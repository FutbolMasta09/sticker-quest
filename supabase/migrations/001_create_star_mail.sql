-- =====================================================
-- STAR-MAIL TABLE MIGRATION
-- Phase 4: Backend Infrastructure for Sticker Quest
-- Spec: id, sender_name, message_content, tone_type,
--       is_read, created_at
-- =====================================================

-- Tone enum: controlled vocabulary for parent voice modes
CREATE TYPE public.tone_type AS ENUM (
  'Supportive Auntie',
  'Warm/Fatherly',
  'Supportive/Magical'
);

-- Create the star_mail table
CREATE TABLE IF NOT EXISTS public.star_mail (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_name     TEXT NOT NULL,
  message_content TEXT NOT NULL,
  tone_type       public.tone_type NOT NULL DEFAULT 'Supportive/Magical',
  is_read         BOOLEAN NOT NULL DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ── Indexes ──────────────────────────────────────────
-- Pull-on-Open queries are always sorted newest-first,
-- so DESC index on created_at is the critical path.
CREATE INDEX idx_star_mail_created_at  ON public.star_mail (created_at DESC);
CREATE INDEX idx_star_mail_is_read     ON public.star_mail (is_read);
CREATE INDEX idx_star_mail_sender_name ON public.star_mail (sender_name);

-- ── Row Level Security ────────────────────────────────
-- Phase 4 uses a single shared inbox (no per-user auth yet).
-- RLS is ENABLED for defence-in-depth; the anon-key policy
-- below grants read access.  Tighten once child auth lands.
ALTER TABLE public.star_mail ENABLE ROW LEVEL SECURITY;

-- Anon read: child device reads the inbox (no auth required in MVP)
CREATE POLICY "Anon can read star_mail"
  ON public.star_mail
  FOR SELECT
  TO anon
  USING (true);

-- Service-role write: parent companion app inserts via service key
CREATE POLICY "Service role can insert star_mail"
  ON public.star_mail
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Anon update: child device marks messages as read
CREATE POLICY "Anon can mark messages as read"
  ON public.star_mail
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (is_read = true);   -- can only flip to read, never unread

-- ── Column documentation ─────────────────────────────
COMMENT ON TABLE  public.star_mail                  IS 'Star-Mail inbox — messages from parents (Amber/Brandon) to Libby.';
COMMENT ON COLUMN public.star_mail.id               IS 'Stable UUID primary key.';
COMMENT ON COLUMN public.star_mail.sender_name      IS 'Display name of sender ("Amber" or "Brandon"). Used by useStarMail to derive tone.';
COMMENT ON COLUMN public.star_mail.message_content  IS 'The actual message text shown to the child.';
COMMENT ON COLUMN public.star_mail.tone_type        IS 'Voice/tone preset: Supportive Auntie (Amber), Warm/Fatherly (Brandon), Supportive/Magical (default).';
COMMENT ON COLUMN public.star_mail.is_read          IS 'False until the child opens the message.';
COMMENT ON COLUMN public.star_mail.created_at       IS 'UTC timestamp of message creation.';
