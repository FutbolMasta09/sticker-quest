-- =====================================================
-- STAR-MAIL TABLE MIGRATION
-- Phase 4: Backend Infrastructure for Sticker Quest
-- =====================================================

-- Create the star_mail table
CREATE TABLE IF NOT EXISTS public.star_mail (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  message_body TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for performance optimization
CREATE INDEX idx_star_mail_recipient ON public.star_mail(recipient_id);
CREATE INDEX idx_star_mail_created_at ON public.star_mail(created_at DESC);
CREATE INDEX idx_star_mail_is_read ON public.star_mail(is_read);
CREATE INDEX idx_star_mail_sender_name ON public.star_mail(sender_name);

-- Enable Row Level Security (RLS)
ALTER TABLE public.star_mail ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow authenticated users to read messages where they are the recipient
CREATE POLICY "Users can read their own messages"
  ON public.star_mail
  FOR SELECT
  USING (auth.uid()::text = recipient_id);

-- RLS Policy: Allow authenticated users to insert messages (for parent app integration)
CREATE POLICY "Authenticated users can send messages"
  ON public.star_mail
  FOR INSERT
  WITH CHECK (auth.uid()::text = sender_id);

-- RLS Policy: Allow users to update their own messages (mark as read)
CREATE POLICY "Users can update their own messages"
  ON public.star_mail
  FOR UPDATE
  USING (auth.uid()::text = recipient_id);

-- Comment on table and columns for documentation
COMMENT ON TABLE public.star_mail IS 'Star-Mail messages for Sticker Quest app - messages from parents (Amber/Brandon) to children';
COMMENT ON COLUMN public.star_mail.sender_id IS 'User ID of the message sender (parent)';
COMMENT ON COLUMN public.star_mail.sender_name IS 'Display name of sender (e.g., "Amber" or "Brandon") - used for tone filtering';
COMMENT ON COLUMN public.star_mail.recipient_id IS 'User ID of the message recipient (child)';
COMMENT ON COLUMN public.star_mail.message_body IS 'The actual message content';
COMMENT ON COLUMN public.star_mail.is_read IS 'Whether the message has been read by the recipient';
COMMENT ON COLUMN public.star_mail.created_at IS 'Timestamp when the message was created';
