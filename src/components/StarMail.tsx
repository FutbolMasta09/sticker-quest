import { ThemedText } from '@/components/themed-text';
import { Bell, Mail } from 'lucide-react-native';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Message {
  id: number;
  from: string;
  text: string;
  time: string;
  unread: boolean;
}

interface StarMailProps {
  /** Array of messages to display */
  messages?: Message[];
}

/**
 * StarMail - Notification inbox for star‑related messages.
 */
export default function StarMail({ 
  messages = [
    { id: 1, from: 'Mom', text: 'Great job on your reading today!', time: '2h ago', unread: true },
    { id: 2, from: 'Dad', text: 'Remember to brush your teeth after dinner', time: '1d ago', unread: false },
    { id: 3, from: 'Teacher', text: 'Star sticker earned for math worksheet!', time: '3d ago', unread: true },
  ]
}: StarMailProps) {
  const unreadCount = messages.filter(m => m.unread).length;

  return (
    <View style={styles.starMail}>
      <View style={styles.starMailHeader}>
        <Mail size={20} color="#FF5722" />
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Star-Mail
        </ThemedText>
        <View style={styles.notificationBadge}>
          <Bell size={14} color="#FFFFFF" />
          <ThemedText style={styles.notificationCount}>{unreadCount}</ThemedText>
        </View>
      </View>
      
      <ScrollView 
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <TouchableOpacity 
            key={msg.id} 
            style={[
              styles.messageItem,
              msg.unread && styles.unreadMessage
            ]}
          >
            <View style={styles.messageHeader}>
              <ThemedText type="defaultSemiBold" style={styles.messageFrom}>
                {msg.from}
              </ThemedText>
              <ThemedText style={styles.messageTime}>{msg.time}</ThemedText>
            </View>
            <ThemedText style={styles.messageText} numberOfLines={2}>
              {msg.text}
            </ThemedText>
            {msg.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  starMail: {
    backgroundColor: 'rgba(255, 87, 34, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  starMailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
  },
  notificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
    marginLeft: 'auto',
  },
  notificationCount: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messagesContainer: {
    maxHeight: 200,
  },
  messageItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  unreadMessage: {
    backgroundColor: 'rgba(255, 87, 34, 0.05)',
    borderColor: 'rgba(255, 87, 34, 0.2)',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageFrom: {
    fontSize: 14,
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5722',
  },
});