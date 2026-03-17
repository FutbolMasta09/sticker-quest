import { useMasteryStore } from '@/src/store/useMasteryStore';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { Lock, Star } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import contentData from '@/src/assets/k_grade_content.json';

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

export default function QuestGrid() {
  const { getProgress, getUnlockedCount } = useMasteryStore();
  const { scale, moderateScale, isTablet } = useResponsiveScale();

  const unlockedCount = getUnlockedCount();
  const cardSize = isTablet ? scale(130) : scale(100);
  const columns = isTablet ? 4 : 3;

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { fontSize: moderateScale(15) }]}>
        Your Sticker Quest
      </Text>
      <View style={[styles.grid, { gap: scale(10) }]}>
        {stickers.map((sticker, index) => {
          const isUnlocked = index < unlockedCount;
          const progress = getProgress(sticker.id);

          return (
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
                progress.stars > 0 && styles.cardEarned,
              ]}
              disabled={!isUnlocked}
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
                  <StarRow count={progress.stars} />
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
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  heading: {
    fontWeight: '700',
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#F8F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E0D8F0',
    gap: 2,
  },
  cardEarned: {
    backgroundColor: '#FFF9E6',
    borderColor: '#FFD700',
  },
  emoji: {
    textAlign: 'center',
  },
  name: {
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },
  phoneme: {
    color: '#9B59B6',
    fontWeight: '500',
  },
  starRow: {
    flexDirection: 'row',
    gap: 2,
  },
  locked: {
    color: '#AAAAAA',
    marginTop: 4,
    textAlign: 'center',
  },
});
