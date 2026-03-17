import { ThemedText } from '@/components/themed-text';
import contentData from '@/src/assets/k_grade_content.json';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useMasteryStore } from '@/src/store/useMasteryStore';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Star } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MotorTask {
  type: string;
  description: string;
  instruction_audio: string;
}

interface StickerDetail {
  id: string;
  sticker_name: string;
  target_cvc: string;
  phoneme: string;
  motor_tasks: { gross: MotorTask; fine: MotorTask };
  hints: string[];
}

const stickers: StickerDetail[] = (contentData as any).stickers;

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
          size={20}
          color={n <= count ? '#FFD700' : '#D0D0D0'}
          fill={n <= count ? '#FFD700' : 'transparent'}
        />
      ))}
    </View>
  );
}

export default function QuestDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getProgress, recordAttempt } = useMasteryStore();
  const insets = useSafeAreaInsets();
  const { scale, moderateScale } = useResponsiveScale();

  const sticker = stickers.find((s) => s.id === id);

  if (!sticker) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Quest not found.</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backFallback}>
          <Text style={styles.backFallbackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const progress = getProgress(sticker.id);
  const emoji = ANIMAL_EMOJI[sticker.id] ?? '⭐';

  const handleDidIt = () => {
    recordAttempt(sticker.id, 1);
    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={[styles.container, { paddingTop: insets.top }]}>

        {/* Custom header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton} hitSlop={12}>
            <ArrowLeft size={scale(24)} color="#4A3080" />
          </TouchableOpacity>
          <ThemedText style={[styles.headerTitle, { fontSize: moderateScale(18) }]} numberOfLines={1}>
            {sticker.sticker_name}
          </ThemedText>
          <View style={{ width: scale(40) }} />
        </View>

        <ScrollView
          contentContainerStyle={[styles.scroll, { padding: scale(20) }]}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View style={styles.hero}>
            <Text style={[styles.heroEmoji, { fontSize: scale(80) }]}>{emoji}</Text>
            <ThemedText style={[styles.stickerName, { fontSize: moderateScale(26) }]}>
              {sticker.sticker_name}
            </ThemedText>
            <View style={styles.badges}>
              <View style={styles.phonemeBadge}>
                <Text style={[styles.phonemeText, { fontSize: moderateScale(16) }]}>
                  {sticker.phoneme}
                </Text>
              </View>
              <View style={styles.cvcBadge}>
                <Text style={[styles.cvcText, { fontSize: moderateScale(14) }]}>
                  {sticker.target_cvc}
                </Text>
              </View>
            </View>
            <StarRow count={progress.stars} />
          </View>

          {/* Motor tasks */}
          <View style={[styles.section, { gap: scale(10) }]}>
            <ThemedText style={[styles.sectionTitle, { fontSize: moderateScale(15) }]}>
              Your Quest
            </ThemedText>
            <View style={styles.taskCard}>
              <Text style={[styles.taskIcon, { fontSize: scale(24) }]}>🏃</Text>
              <Text style={[styles.taskText, { fontSize: moderateScale(14) }]}>
                {sticker.motor_tasks.gross.description}
              </Text>
            </View>
            <View style={styles.taskCard}>
              <Text style={[styles.taskIcon, { fontSize: scale(24) }]}>✋</Text>
              <Text style={[styles.taskText, { fontSize: moderateScale(14) }]}>
                {sticker.motor_tasks.fine.description}
              </Text>
            </View>
          </View>

          {/* Hints */}
          <View style={[styles.section, { gap: scale(8) }]}>
            <ThemedText style={[styles.sectionTitle, { fontSize: moderateScale(15) }]}>
              Hints
            </ThemedText>
            {sticker.hints.map((hint, i) => (
              <View key={i} style={styles.hintCard}>
                <Text style={[styles.hintIcon, { fontSize: scale(18) }]}>💡</Text>
                <Text style={[styles.hintText, { fontSize: moderateScale(13) }]}>{hint}</Text>
              </View>
            ))}
          </View>

          {/* Spacer so content clears the sticky button */}
          <View style={{ height: scale(100) }} />
        </ScrollView>

        {/* Sticky "I Did It!" button */}
        <View style={[styles.footer, { paddingBottom: insets.bottom + scale(16) }]}>
          <TouchableOpacity
            style={[styles.didItButton, { borderRadius: scale(18) }]}
            onPress={handleDidIt}
            activeOpacity={0.8}
          >
            <Text style={[styles.didItText, { fontSize: moderateScale(18) }]}>
              ⭐  I Did It!
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFAFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE8FF',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    color: '#2A1A5E',
  },
  scroll: {
    gap: 24,
  },
  hero: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  heroEmoji: {
    textAlign: 'center',
  },
  stickerName: {
    fontWeight: '700',
    color: '#2A1A5E',
    textAlign: 'center',
  },
  badges: {
    flexDirection: 'row',
    gap: 10,
  },
  phonemeBadge: {
    backgroundColor: '#EDE0FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  phonemeText: {
    color: '#5B2D9E',
    fontWeight: '700',
  },
  cvcBadge: {
    backgroundColor: '#FFF4CC',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  cvcText: {
    color: '#8B6200',
    fontWeight: '700',
    letterSpacing: 2,
  },
  starRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#2A1A5E',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F4EEFF',
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  taskIcon: {
    textAlign: 'center',
    lineHeight: 28,
  },
  taskText: {
    flex: 1,
    color: '#333',
    lineHeight: 20,
  },
  hintCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFBEC',
    borderRadius: 12,
    padding: 12,
    gap: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#FFD700',
  },
  hintIcon: {
    lineHeight: 22,
  },
  hintText: {
    flex: 1,
    color: '#555',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: '#FDFAFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE8FF',
  },
  didItButton: {
    backgroundColor: '#5B2D9E',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  didItText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  notFoundText: {
    fontSize: 18,
    color: '#666',
  },
  backFallback: {
    backgroundColor: '#5B2D9E',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backFallbackText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
