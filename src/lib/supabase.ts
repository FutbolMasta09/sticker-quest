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
 * Star-Mail Message Interface
 */
export interface StarMailMessage {
  id: string;
  sender_id: string;
  sender_name: string;
  recipient_id: string;
  message_body: string;
  is_read: boolean;
  created_at: string;
}

/**
 * Tone metadata for Starlight's Voice
 */
export type MessageTone = 'Supportive/Magical' | 'Warm/Fatherly';

/**
 * Enhanced message with tone metadata
 */
export interface EnhancedStarMailMessage extends StarMailMessage {
  tone: MessageTone;
}
