import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Supabase client for Star-Mail backend
 * Uses AsyncStorage for session persistence across app restarts
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

/**
 * Tone types matching the `tone_type` enum in Supabase.
 * Amber (Sister/Mom) → 'Supportive Auntie'
 * Brandon (Dad)      → 'Warm/Fatherly'
 * All others         → 'Supportive/Magical'
 */
export type ToneType =
  | 'Supportive Auntie'
  | 'Warm/Fatherly'
  | 'Supportive/Magical';

/**
 * Star-Mail row as stored in Supabase.
 * Columns: id, sender_name, message_content, tone_type, is_read, created_at
 */
export interface StarMailMessage {
  id: string;
  sender_name: string;
  message_content: string;
  tone_type: ToneType;
  is_read: boolean;
  created_at: string;
}
