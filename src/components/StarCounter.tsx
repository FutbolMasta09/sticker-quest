import { ThemedText } from '@/components/themed-text';
import { Star } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

interface StarCounterProps {
  /** Number of stars to display */
  count: number;
  /** Size of the star icon (default 24) */
  starSize?: number;
  /** Whether to show a label (default false) */
  showLabel?: boolean;
}

/**
 * StarCounter - A pill‑shaped badge showing the current star count.
 */
export default function StarCounter({ 
  count, 
  starSize = 24,
  showLabel = false 
}: StarCounterProps) {
  return (
    <View style={styles.starBadge}>
      <Star size={starSize} color="#FFD700" fill="#FFD700" />
      <ThemedText style={styles.starCount}>{count}</ThemedText>
      {showLabel && (
        <ThemedText style={styles.label}>stars</ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  starBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  starCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  label: {
    fontSize: 12,
    color: '#FFD700',
    opacity: 0.8,
  },
});