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
      <ThemedText type="defaultSemiBold">Recent Achievements</ThemedText>
      <View style={styles.achievementList}>
        {achievements.map((achievement, idx) => (
          <View key={idx} style={styles.achievementBadge}>
            <Star size={16} color="#FFD700" />
            <ThemedText style={styles.achievementText}>{achievement}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  achievements: {
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
    borderRadius: 16,
    padding: 16,
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
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  achievementText: {
    fontSize: 12,
    color: '#FFD700',
  },
});