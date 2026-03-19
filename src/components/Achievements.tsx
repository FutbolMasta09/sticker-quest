import { ThemedText } from '@/components/themed-text';
import { Star } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

interface AchievementsProps {
  /** List of achievement titles */
  achievements?: string[];
}

/**
 * Achievements - Displays a list of recent achievement badges.
 */
export default function Achievements({ 
  achievements = ['Reading Star', 'Math Wizard', 'Helper Hero'] 
}: AchievementsProps) {
  return (
    <View style={styles.achievements}>
      <ThemedText type="defaultSemiBold" style={styles.heading}>Recent Achievements</ThemedText>
      <View style={styles.achievementList}>
        {achievements.map((achievement, idx) => (
          <View key={idx} style={styles.achievementBadge}>
            <Star size={16} color="#FFB300" fill="#FFB300" />
            <ThemedText style={styles.achievementText}>{achievement}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  achievements: {
    backgroundColor: '#FFF6C9',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#FFD54F',
    padding: 16,
  },
  heading: {
    color: '#6B2FD9',
    fontWeight: '800',
  },
  achievementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE082',
    borderWidth: 1,
    borderColor: '#FFCA28',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    gap: 6,
  },
  achievementText: {
    fontSize: 12,
    color: '#6B3F00',
    fontWeight: '700',
  },
});