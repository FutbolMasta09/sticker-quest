import loreMessages from '@/src/assets/k_lore_messages.json';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useMasteryStore } from '@/src/store/useMasteryStore';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LOCK_MESSAGES = loreMessages.messages.daily_limit_reached;

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SessionLockScreen() {
  const { getTotalStars } = useMasteryStore();
  const insets = useSafeAreaInsets();
  const { scale, moderateScale } = useResponsiveScale();

  // Pick once on mount — no flickering if the parent re-renders
  const [message] = useState(() => pickRandom(LOCK_MESSAGES));

  const totalStars = getTotalStars();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + scale(32), paddingBottom: insets.bottom + scale(32) },
      ]}
    >
      <Text style={[styles.unicorn, { fontSize: scale(80) }]}>🦄</Text>

      <Text style={[styles.message, { fontSize: moderateScale(22), lineHeight: moderateScale(34) }]}>
        {message}
      </Text>

      <View style={styles.starRow}>
        <Text style={[styles.starEmoji, { fontSize: scale(28) }]}>⭐</Text>
        <Text style={[styles.starCount, { fontSize: moderateScale(18) }]}>
          {totalStars === 1
            ? '1 star earned so far!'
            : `${totalStars} stars earned so far!`}
        </Text>
      </View>

      <Text style={[styles.seeYou, { fontSize: moderateScale(16) }]}>
        Come back tomorrow — the meadow will be waiting!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0a2e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 28,
  },
  unicorn: {
    textAlign: 'center',
  },
  message: {
    color: '#f0e6ff',
    textAlign: 'center',
    fontWeight: '600',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 215, 0, 0.12)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  starEmoji: {
    textAlign: 'center',
  },
  starCount: {
    color: '#FFD700',
    fontWeight: '700',
  },
  seeYou: {
    color: 'rgba(240, 230, 255, 0.6)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
