import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useUserStore } from '@/src/store/useUserStore';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface CardLayout {
  pageX: number;
  pageY: number;
  width: number;
  height: number;
}

interface Props {
  cardLayout?: CardLayout;
}

// Three bold chevron colors — fun and vivid for a 5-year-old
const CHEVRON_COLORS = ['#FFD700', '#FF8C00', '#FF4500'];

export default function TutorialOverlay({ cardLayout }: Props) {
  const tutorialStep = useUserStore((s) => s.tutorialStep);
  const advanceTutorial = useUserStore((s) => s.advanceTutorial);
  const skipTutorial = useUserStore((s) => s.skipTutorial);
  const { scale, moderateScale } = useResponsiveScale();

  const pulseAnim  = useRef(new Animated.Value(1)).current;
  const chevron1   = useRef(new Animated.Value(0)).current;
  const chevron2   = useRef(new Animated.Value(0)).current;
  const chevron3   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (tutorialStep !== 0) return;

    // Glow ring pulse
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.12, duration: 700, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1.0,  duration: 700, useNativeDriver: true }),
      ])
    );

    // Staggered waterfall bounce — each chevron offset by 220ms
    const BOUNCE_DIST = 14;
    const BOUNCE_DUR  = 380;

    const loop1 = Animated.loop(
      Animated.sequence([
        Animated.timing(chevron1, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
        Animated.timing(chevron1, { toValue: 0, duration: BOUNCE_DUR, useNativeDriver: true }),
      ])
    );
    const loop2 = Animated.sequence([
      Animated.delay(220),
      Animated.loop(
        Animated.sequence([
          Animated.timing(chevron2, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
          Animated.timing(chevron2, { toValue: 0, duration: BOUNCE_DUR, useNativeDriver: true }),
        ])
      ),
    ]);
    const loop3 = Animated.sequence([
      Animated.delay(440),
      Animated.loop(
        Animated.sequence([
          Animated.timing(chevron3, { toValue: BOUNCE_DIST, duration: BOUNCE_DUR, useNativeDriver: true }),
          Animated.timing(chevron3, { toValue: 0, duration: BOUNCE_DUR, useNativeDriver: true }),
        ])
      ),
    ]);

    pulse.start();
    loop1.start();
    loop2.start();
    loop3.start();

    return () => {
      pulse.stop();
      loop1.stop();
      loop2.stop();
      loop3.stop();
      pulseAnim.setValue(1);
      chevron1.setValue(0);
      chevron2.setValue(0);
      chevron3.setValue(0);
    };
  }, [tutorialStep, pulseAnim, chevron1, chevron2, chevron3]);

  const handleCardTap = () => {
    advanceTutorial();
    router.push('/quest/s_snake');
  };

  const hasLayout = cardLayout != null;

  // Center the arrow stack over the card
  const arrowCenterX  = hasLayout ? cardLayout.pageX + cardLayout.width / 2 : 0;
  // Each chevron: 28px tall + 8px gap = 36px per row; 3 rows = 108px total
  const arrowStackTop = hasLayout ? cardLayout.pageY - 120 : 0;

  const chevronAnims = [chevron1, chevron2, chevron3];

  return (
    <Modal
      transparent
      animationType="fade"
      statusBarTranslucent
      visible={tutorialStep === 0}
    >
      <View style={styles.backdrop}>

        {/* Pulsing gold glow ring over Sally Snake card */}
        {hasLayout && (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.glowRing,
              {
                left: cardLayout.pageX - 6,
                top: cardLayout.pageY - 6,
                width: cardLayout.width + 12,
                height: cardLayout.height + 12,
                borderRadius: scale(18),
                transform: [{ scale: pulseAnim }],
              },
            ]}
          />
        )}

        {/* Transparent tap zone exactly over the card */}
        {hasLayout && (
          <TouchableOpacity
            style={[
              styles.cardTapZone,
              {
                left: cardLayout.pageX,
                top: cardLayout.pageY,
                width: cardLayout.width,
                height: cardLayout.height,
              },
            ]}
            onPress={handleCardTap}
            activeOpacity={0.6}
          />
        )}

        {/* Skip button — top right */}
        <TouchableOpacity style={styles.skipBtn} onPress={skipTutorial} activeOpacity={0.8}>
          <Text style={[styles.skipText, { fontSize: moderateScale(13) }]}>✕  Skip</Text>
        </TouchableOpacity>

        {/* TOP tooltip */}
        <View style={styles.tooltipWrapper}>
          <View style={[styles.tooltip, { borderRadius: scale(16), padding: scale(20), gap: scale(10) }]}>
            <Text style={[styles.tooltipEmoji, { fontSize: scale(40) }]}>🐍</Text>

            <Text style={[styles.tooltipTitle, { fontSize: moderateScale(20) }]}>
              Tap Sally Snake!
            </Text>

            <Text style={[styles.tooltipBody, { fontSize: moderateScale(14) }]}>
              Starlight has your first quest ready! Tap the glowing card below to begin your adventure!
            </Text>

            {/* Fallback button if card layout hasn't been measured */}
            {!hasLayout && (
              <TouchableOpacity
                style={[styles.goBtn, { borderRadius: scale(12) }]}
                onPress={handleCardTap}
                activeOpacity={0.85}
              >
                <Text style={[styles.goBtnText, { fontSize: moderateScale(15) }]}>
                  Let&apos;s Go! 🌟
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Animated waterfall arrows pointing down to the Sally Snake card */}
        {hasLayout && (
          <View
            pointerEvents="none"
            style={[styles.arrowStack, { left: arrowCenterX - 30, top: arrowStackTop }]}
          >
            {chevronAnims.map((anim, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.chevronWrapper,
                  { transform: [{ translateY: anim }] },
                  i > 0 && { marginTop: -10 },
                ]}
              >
                {/* Outer glow layer (slightly larger, lighter color) */}
                <View
                  style={[
                    styles.chevron,
                    {
                      borderLeftWidth: 34,
                      borderRightWidth: 34,
                      borderTopWidth: 26,
                      borderTopColor: '#FFFFFF44',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                    },
                  ]}
                />
                {/* Main colored chevron */}
                <View
                  style={[
                    styles.chevron,
                    {
                      borderLeftWidth: 30,
                      borderRightWidth: 30,
                      borderTopWidth: 24,
                      borderTopColor: CHEVRON_COLORS[i],
                    },
                  ]}
                />
              </Animated.View>
            ))}
          </View>
        )}

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(10, 3, 30, 0.62)',
  },
  glowRing: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 20,
  },
  cardTapZone: {
    position: 'absolute',
  },
  skipBtn: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tooltipWrapper: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  tooltip: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 12,
  },
  tooltipEmoji: {
    textAlign: 'center',
  },
  tooltipTitle: {
    fontWeight: '800',
    color: '#2D1660',
    textAlign: 'center',
  },
  tooltipBody: {
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
  goBtn: {
    backgroundColor: '#7B3FF2',
    paddingVertical: 12,
    paddingHorizontal: 28,
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  goBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  arrowStack: {
    position: 'absolute',
    alignItems: 'center',
  },
  chevronWrapper: {
    alignItems: 'center',
    // extra space for the glow layer overflow
    width: 72,
    height: 30,
    justifyContent: 'center',
  },
  chevron: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
