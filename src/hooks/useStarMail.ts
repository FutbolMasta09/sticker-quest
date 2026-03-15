import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { supabase } from '../lib/supabase';

// Syncing ToneType with the updated Supabase ENUM labels
export type ToneType = 'Supportive/Mom' | 'Warm/Fatherly' | 'Supportive/Magical';

export interface StarMailMessage {
  id: string;
  sender_name: string;
  message_content: string;
  tone_type: ToneType;
  is_read: boolean;
  created_at: string;
}

export const useStarMail = (isStarlightBusy: boolean) => {
  const [messages, setMessages] = useState<StarMailMessage[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [canShowEnvelope, setCanShowEnvelope] = useState(false);
  const hasPendingEnvelope = useRef(false);

  // Core fetch logic: Keeps the cloud data in sync with Libby's tablet
  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('star_mail')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        setMessages(data);
        const unread = data.filter(m => !m.is_read);
        setUnreadCount(unread.length);
        
        // If there is unread mail, we "queue" the envelope animation
        if (unread.length > 0) {
          hasPendingEnvelope.current = true;
        }
      }
    } catch (err) {
      console.error('Star-Mail Fetch Error:', err);
    }
  };

  // Pull-on-Open: Save battery/RAM by only fetching when Libby enters the app
  useEffect(() => {
    fetchMessages();
    
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        fetchMessages();
      }
    });

    return () => subscription.remove();
  }, []);

  // Hardware Guard: Only trigger the envelope fly-in when Starlight is idle
  // This prevents the Fire HD 10 from stuttering during heavy animations
  useEffect(() => {
    if (hasPendingEnvelope.current && !isStarlightBusy) {
      setCanShowEnvelope(true);
      hasPendingEnvelope.current = false; 
    }
  }, [isStarlightBusy, messages]);

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from('star_mail')
      .update({ is_read: true })
      .eq('id', id);

    if (!error) {
      fetchMessages();
    }
  };

  return { 
    messages, 
    unreadCount, 
    canShowEnvelope, 
    markAsRead, 
    setCanShowEnvelope,
    refreshMail: fetchMessages 
  };
};