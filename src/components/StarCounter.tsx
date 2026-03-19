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
    backgroundColor: '#FFF2A8',
    borderWidth: 2,
    borderColor: '#FFB300',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 6,
    shadowColor: '#FFB300',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    shadowRadius: 6,
    elevation: 5,
  },
  starCount: {
    fontSize: 18,
    fontWeight: '900',
    color: '#7B3A00',
  },
  label: {
    fontSize: 12,
    color: '#8D4D00',
    fontWeight: '700',
  },
});