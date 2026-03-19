import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useUserStore } from '@/src/store/useUserStore';
import { useEffect, useRef } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  stickerId: string;
}

const STEP1_CHEVRONS = ['#FFD700', '#FF8C00', '#FF4500'];
const STEP2_CHEVRONS = ['#FFD700', '#FFEC40', '#FFF176'];

export default function QuestTutorialOverlay({ stickerId }: Props) {
  const tutorialStep    = useUserStore((s) => s.tutorialStep);
  const advanceTutorial = useUserStore((s) => s.advanceTutorial);
  const skipTutorial    = useUserStore((s) => s.skipTutorial);
  const { scale, moderateScale } = useResponsiveScale();
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = useWindowDimensions();

  // Emoji bounce — used in step 1
  const emojiScale = useRef(new Animated.Value(1)).current;
  // Star pulse — used in step 2
  const starPulse  = useRef(new Animated.Value(1)).current;

  // Waterfall chevrons
  const chevron1 = useRef(new Animated.Value(0)).current;
  const chevron2 = useRef(new Animated.Value(0)).current;
  const chevron3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (tutorialStep !== 1 && tutorialStep !== 2) {
      emojiScale.setValue(1);
      starPulse.setValue(1);
      chevron1.setValue(0);
      chevron2.setValue(0);
      chevron3.setValue(0);
      return;
    }

    const BOUNCE_DIST = 14;
    const BOUNCE_DUR  = 380;

    const emojiBounce = Animated.loop(
      Animated.sequence([
        Animated.timing(emojiScale, { toValue: 1.28, duration: 480, useNativeDriver: true }),
        Animated.timing(emojiScale, { toValue: 1.0,  duration: 480, useNativeDriver: true }),
      ])
    );

    const starBounce = Animated.loop(
      Animated.sequence([
        Animated.timing(starPulse, { toValue: 1.35, duration: 520, useNativeDriver: true }),
        Animated.timing(starPulse, { toValue: 1.0,  duration: 520, useNativeDriver: true }),
      ])
    );

    const loop1 = Animated.loop(
      Animated.sequence([
        Animated.timing(chevron1, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
        Animated.timing(chevron1, { toValue: 0,           duration: BOUNCE_DUR, useNativeDriver: true }),
      ])
    );
    const loop2 = Animated.sequence([
      Animated.delay(220),
      Animated.loop(Animated.sequence([
        Animated.timing(chevron2, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
        Animated.timing(chevron2, { toValue: 0,           duration: BOUNCE_DUR, useNativeDriver: true }),
      ])),
    ]);
    const loop3 = Animated.sequence([
      Animated.delay(440),
      Animated.loop(Animated.sequence([
        Animated.timing(chevron3, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
        Animated.timing(chevron3, { toValue: 0,           duration: BOUNCE_DUR, useNativeDriver: true }),
      ])),
    ]);

    if (tutorialStep === 1) emojiBounce.start();
    if (tutorialStep === 2) starBounce.start();
    loop1.start();
    loop2.start();
    loop3.start();

    return () => {
      emojiBounce.stop();
      starBounce.stop();
      loop1.stop();
      loop2.stop();
      loop3.stop();
    };
  }, [tutorialStep, emojiScale, starPulse, chevron1, chevron2, chevron3]);

  if (stickerId !== 's_snake' || (tutorialStep !== 1 && tutorialStep !== 2)) return null;

  const chevronAnims  = [chevron1, chevron2, chevron3];
  const chevronColors = tutorialStep === 1 ? STEP1_CHEVRONS : STEP2_CHEVRONS;

  // Position arrows in the lower third of the screen, safely below the tooltip
  const arrowTop = screenHeight * 0.62;

  // ── Step 1: Motor task introduction ────────────────────────────────────────
  if (tutorialStep === 1) {
    return (
      <Modal transparent animationType="fade" statusBarTranslucent visible>
        <View style={[StyleSheet.absoluteFill, styles.container]} pointerEvents="box-none">
          <View style={[StyleSheet.absoluteFill, styles.dim]} pointerEvents="auto" />

          <TouchableOpacity
            style={[styles.skipBtn, { top: insets.top + scale(14) }]}
            onPress={skipTutorial}
            activeOpacity={0.8}
          >
            <Text style={[styles.skipText, { fontSize: moderateScale(12) }]}>✕  Skip</Text>
          </TouchableOpacity>

          {/* Purple tooltip — plain View so background color is always visible */}
          <View
            style={[
              styles.tooltip,
              styles.tooltipPurple,
              {
                top: insets.top + scale(52),
                left: 16,
                right: 16,
                borderRadius: scale(20),
                padding: scale(20),
                gap: scale(10),
              },
            ]}
          >
            <View style={[styles.accentStripe, { backgroundColor: '#FF4081' }]} />

            <Animated.Text style={[styles.emoji, { fontSize: scale(52), transform: [{ scale: emojiScale }] }]}>
              🏃
            </Animated.Text>

            <Text style={[styles.title, styles.titleLight, { fontSize: moderateScale(21) }]}>
              Time to Move!
            </Text>

            <Text style={[styles.body, styles.bodyLight, { fontSize: moderateScale(13) }]}>
              Scroll down and try the moves with your body! Starlight is cheering for you! 🌟
            </Text>

            <TouchableOpacity
              style={[styles.actionBtn, styles.actionBtnGold, { borderRadius: scale(14) }]}
              onPress={advanceTutorial}
              activeOpacity={0.85}
            >
              <Text style={[styles.actionBtnText, styles.actionBtnTextDark, { fontSize: moderateScale(15) }]}>
                Got it! Let&apos;s Move! 🏃
              </Text>
            </TouchableOpacity>
          </View>

          {/* Waterfall arrows */}
          <View pointerEvents="none" style={[styles.arrowStack, { top: arrowTop }]}>
            {chevronAnims.map((anim, i) => (
              <Animated.View
                key={i}
                style={[styles.chevronWrapper, { transform: [{ translateY: anim }] }, i > 0 && { marginTop: -8 }]}
              >
                <View style={[styles.chevron, { borderTopColor: chevronColors[i] }]} />
              </Animated.View>
            ))}
          </View>
        </View>
      </Modal>
    );
  }

  // ── Step 2: Star selection ──────────────────────────────────────────────────
  return (
    <Modal transparent animationType="fade" statusBarTranslucent visible>
      <View style={[StyleSheet.absoluteFill, styles.container]} pointerEvents="box-none">
        <View style={[StyleSheet.absoluteFill, styles.dimMedium]} pointerEvents="auto" />

        <TouchableOpacity
          style={[styles.skipBtn, { top: insets.top + scale(14) }]}
          onPress={skipTutorial}
          activeOpacity={0.8}
        >
          <Text style={[styles.skipText, { fontSize: moderateScale(12) }]}>✕  Skip</Text>
        </TouchableOpacity>

        {/* Orange tooltip — plain View so background color is always visible */}
        <View
          style={[
            styles.tooltip,
            styles.tooltipOrange,
            {
              top: insets.top + scale(52),
              left: 16,
              right: 16,
              borderRadius: scale(20),
              padding: scale(20),
              gap: scale(10),
            },
          ]}
        >
          <View style={[styles.accentStripe, { backgroundColor: '#BF360C' }]} />

          <Animated.Text style={[styles.emoji, { fontSize: scale(52), transform: [{ scale: starPulse }] }]}>
            ⭐
          </Animated.Text>

          <Text style={[styles.title, styles.titleDark, { fontSize: moderateScale(21) }]}>
            How Did You Do?
          </Text>

          <Text style={[styles.body, styles.bodyDark, { fontSize: moderateScale(13) }]}>
            Tap a star below! One try earns one star. Three tries earns three stars! You did great! 🎉
          </Text>

          <View style={styles.starHintRow}>
            <Text style={{ fontSize: scale(26) }}>⭐</Text>
            <Text style={{ fontSize: scale(26) }}>⭐</Text>
            <Text style={{ fontSize: scale(26) }}>⭐</Text>
          </View>

          <TouchableOpacity
            style={[styles.actionBtn, styles.actionBtnPurple, { borderRadius: scale(14) }]}
            onPress={advanceTutorial}
            activeOpacity={0.85}
          >
            <Text style={[styles.actionBtnText, styles.actionBtnTextLight, { fontSize: moderateScale(15) }]}>
              I&apos;m Ready! Tap a Star! ⭐
            </Text>
          </TouchableOpacity>
        </View>

        {/* Waterfall arrows */}
        <View pointerEvents="none" style={[styles.arrowStack, { top: arrowTop }]}>
          {chevronAnims.map((anim, i) => (
            <Animated.View
              key={i}
              style={[styles.chevronWrapper, { transform: [{ translateY: anim }] }, i > 0 && { marginTop: -8 }]}
            >
              <View style={[styles.chevron, { borderTopColor: chevronColors[i] }]} />
            </Animated.View>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 200,
  },
  dim: {
    backgroundColor: 'rgba(10, 3, 30, 0.70)',
  },
  dimMedium: {
    backgroundColor: 'rgba(10, 3, 30, 0.50)',
  },
  skipBtn: {
    position: 'absolute',
    right: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    zIndex: 10,
  },
  skipText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tooltip: {
    position: 'absolute',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 18,
  },
  tooltipPurple: {
    backgroundColor: '#4A1090',
    shadowColor: '#B44FFF',
  },
  tooltipOrange: {
    backgroundColor: '#E65C00',
    shadowColor: '#FF8C00',
  },
  accentStripe: {
    width: '45%',
    height: 6,
    borderRadius: 4,
    marginBottom: 4,
  },
  emoji: {
    textAlign: 'center',
  },
  title: {
    fontWeight: '800',
    textAlign: 'center',
  },
  titleLight: {
    color: '#FFFFFF',
  },
  titleDark: {
    color: '#1A0800',
  },
  body: {
    textAlign: 'center',
    lineHeight: 20,
  },
  bodyLight: {
    color: 'rgba(255,255,255,0.90)',
  },
  bodyDark: {
    color: '#3E1000',
  },
  starHintRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    paddingVertical: 13,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 8,
  },
  actionBtnGold: {
    backgroundColor: '#FFD700',
    shadowColor: '#FFD700',
  },
  actionBtnPurple: {
    backgroundColor: '#6B2FD9',
    shadowColor: '#B44FFF',
  },
  actionBtnText: {
    fontWeight: '800',
  },
  actionBtnTextDark: {
    color: '#2D1660',
  },
  actionBtnTextLight: {
    color: '#FFFFFF',
  },
  arrowStack: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
  chevronWrapper: {
    alignItems: 'center',
    width: 72,
    height: 30,
    justifyContent: 'center',
  },
  chevron: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 24,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
