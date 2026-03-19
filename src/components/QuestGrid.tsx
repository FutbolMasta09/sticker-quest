import { useMasteryStore } from '@/src/store/useMasteryStore';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { router } from 'expo-router';
import { Lock, Star } from 'lucide-react-native';
import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import contentData from '@/src/assets/k_grade_content.json';
import type { CardLayout } from '@/src/components/TutorialOverlay';

interface Sticker {
  id: string;
  sticker_name: string;
  phoneme: string;
  target_cvc: string;
}

const stickers: Sticker[] = (contentData as any).stickers;

// Animal emoji fallback map — shown until real .skp art exists in Phase 2
const ANIMAL_EMOJI: Record<string, string> = {
  s_snake: '🐍', b_bear: '🐻', k_cat: '🐱', d_dog: '🐶', f_frog: '🐸',
  g_goat: '🐐', h_horse: '🐴', j_jaguar: '🐆', l_lion: '🦁', m_monkey: '🐵',
  n_newt: '🦎', p_pig: '🐷', r_rabbit: '🐰', t_tiger: '🐯', v_viper: '🐍',
  w_wolf: '🐺', ks_fox: '🦊', y_yak: '🦬', z_zebra: '🦓', ch_cheetah: '🐆',
  sh_shark: '🦈', th_thrush: '🐦', bl_blowfish: '🐡', br_bronco: '🐎',
  tr_trout: '🐟',
};

function StarRow({ count }: { count: 0 | 1 | 2 | 3 }) {
  return (
    <View style={styles.starRow}>
      {[1, 2, 3].map((n) => (
        <Star
          key={n}
          size={12}
          color={n <= count ? '#FFD700' : '#D0D0D0'}
          fill={n <= count ? '#FFD700' : 'transparent'}
        />
      ))}
    </View>
  );
}

interface QuestGridProps {
  onFirstCardMeasured?: (layout: CardLayout) => void;
}

export default function QuestGrid({ onFirstCardMeasured }: QuestGridProps) {
  // Explicit selectors so Zustand re-renders this component whenever progress changes
  const progress = useMasteryStore((state) => state.progress);
  const completedCount = useMasteryStore(
    (state) => Object.values(state.progress).filter((p) => p.stars >= 1).length
  );
  const { scale, moderateScale, isTablet } = useResponsiveScale();
  const firstCardRef = useRef<View>(null);

  const unlockedCount = Math.min(25, 5 + Math.floor(completedCount / 5) * 5);
  const cardSize = isTablet ? scale(130) : scale(100);

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { fontSize: moderateScale(15) }]}>
        Your Sticker Quest
      </Text>
      <View style={[styles.grid, { gap: scale(10) }]}>
        {stickers.map((sticker, index) => {
          const isUnlocked = index < unlockedCount;
          const stickerProgress = progress[sticker.id] ?? { stars: 0 as const };
          const isFirst = index === 0;

          const card = (
            <TouchableOpacity
              key={sticker.id}
              activeOpacity={isUnlocked ? 0.7 : 1}
              style={[
                styles.card,
                {
                  width: cardSize,
                  height: cardSize,
                  opacity: isUnlocked ? 1 : 0.45,
                  borderRadius: scale(14),
                  padding: scale(8),
                },
                stickerProgress.stars > 0 && styles.cardEarned,
              ]}
              disabled={!isUnlocked}
              onPress={() => isUnlocked && router.push(`/quest/${sticker.id}`)}
            >
              {isUnlocked ? (
                <>
                  <Text style={[styles.emoji, { fontSize: scale(32) }]}>
                    {ANIMAL_EMOJI[sticker.id] ?? '⭐'}
                  </Text>
                  <Text
                    style={[styles.name, { fontSize: moderateScale(10) }]}
                    numberOfLines={1}
                  >
                    {sticker.sticker_name}
                  </Text>
                  <Text style={[styles.phoneme, { fontSize: moderateScale(10) }]}>
                    {sticker.phoneme}
                  </Text>
                  <StarRow count={stickerProgress.stars as 0 | 1 | 2 | 3} />
                </>
              ) : (
                <>
                  <Lock size={scale(22)} color="#AAAAAA" />
                  <Text style={[styles.locked, { fontSize: moderateScale(9) }]}>
                    Keep going!
                  </Text>
                </>
              )}
            </TouchableOpacity>
          );

          // Wrap only the first card with a measuring View so the tutorial
          // overlay can position its spotlight ring precisely over it
          if (isFirst && onFirstCardMeasured) {
            return (
              <View
                key={sticker.id}
                ref={firstCardRef}
                onLayout={() => {
                  setTimeout(() => {
                    firstCardRef.current?.measure((x, y, w, h, pageX, pageY) => {
                      if (w > 0) onFirstCardMeasured({ pageX, pageY, width: w, height: h });
                    });
                  }, 0);
                }}
              >
                {card}
              </View>
            );
          }

          return card;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    backgroundColor: '#F4EEFF',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E4D5FF',
  },
  heading: {
    fontWeight: '800',
    color: '#5A2AA8',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#FFF0FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E8C9FF',
    gap: 2,
    shadowColor: '#9A4DFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },
  cardEarned: {
    backgroundColor: '#FFF2B3',
    borderColor: '#FFB300',
  },
  emoji: {
    textAlign: 'center',
  },
  name: {
    fontWeight: '700',
    color: '#5C347A',
    textAlign: 'center',
  },
  phoneme: {
    color: '#7B2FD1',
    fontWeight: '700',
  },
  starRow: {
    flexDirection: 'row',
    gap: 2,
  },
  locked: {
    color: '#8E7A9E',
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '700',
  },
});
