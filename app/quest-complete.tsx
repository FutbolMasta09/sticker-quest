import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useUserStore } from '@/src/store/useUserStore';
import { Canvas, Circle, Group, Paint } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Star } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  life: number; // 0 to 1, decreasing over time
}

export default function QuestCompleteScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const habit = (params.habit as string) || 'Quest';
  const { childName, addStars } = useUserStore();
  const { width, height } = useWindowDimensions();

  // Star particles state
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Button pulsing animation
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Start button pulsing animation
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1.0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  // Initialize particles on mount
  useEffect(() => {
    const centerX = width / 2;
    const centerY = height / 2;
    const newParticles: StarParticle[] = [];

    // Create 45 golden stars (40-50 range)
    const starCount = 45;
    for (let i = 0; i < starCount; i++) {
      // Random angle and speed for explosion
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4; // pixels per ms
      newParticles.push({
        id: i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 3 + Math.random() * 5, // 3-8 pixels
        opacity: 0.9 + Math.random() * 0.1, // 0.9-1.0
        life: 1.0,
      });
    }

    setParticles(newParticles);

    // Start animation
    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      setParticles((prev) =>
        prev
          .map((p) => {
            // Update position
            let newX = p.x + p.vx * delta * 0.1;
            let newY = p.y + p.vy * delta * 0.1;

            // Apply gravity/drag (slow down)
            const newVx = p.vx * 0.99;
            const newVy = p.vy * 0.99;

            // Decrease life
            const newLife = p.life - 0.001 * delta;

            // If life <= 0, particle dies
            if (newLife <= 0) {
              return null;
            }

            // Decrease opacity with life
            const newOpacity = p.opacity * newLife;

            return {
              ...p,
              x: newX,
              y: newY,
              vx: newVx,
              vy: newVy,
              life: newLife,
              opacity: newOpacity,
            };
          })
          .filter(Boolean) as StarParticle[]
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // RAM Guard: Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  const handleHighFive = async () => {
    // 1. Add star
    addStars(1);

    // 2. Haptic feedback
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {
      // Haptics not available, ignore
    }

    // 3. Navigate home
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Full-screen Skia Canvas */}
      <Canvas style={StyleSheet.absoluteFill}>
        <Group>
          {particles.map((p) => (
            <Circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.radius}
              color={`rgba(255, 215, 0, ${p.opacity})`}
            >
              <Paint style="stroke" strokeWidth={1} color="rgba(255, 165, 0, 0.8)" />
            </Circle>
          ))}
        </Group>
      </Canvas>

      {/* UI Overlay */}
      <View style={styles.overlay}>
        {/* Celebration Text */}
        <View style={styles.textContainer}>
          <ThemedText type="title" style={styles.magicalText}>
            MA‑GI‑CAL JOB, {childName.toUpperCase()}!
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtext}>
            You finished {habit}! Starlight is so happy!
          </ThemedText>
        </View>

        {/* Giant Pulsing Button */}
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <TouchableOpacity
            style={styles.highFiveButton}
            activeOpacity={0.8}
            onPress={handleHighFive}
          >
            <View style={styles.buttonContent}>
              <Star size={40} color="#FFFFFF" fill="#FFFFFF" />
              <ThemedText type="title" style={styles.buttonText}>
                HIGH‑FIVE STARLIGHT
              </ThemedText>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A2A', // Deep space blue
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  magicalText: {
    fontSize: 36,
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 16,
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtext: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 28,
  },
  highFiveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 32,
    width: '100%',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
    // Pulsing animation (would be better with Animated, but keeping simple)
    transform: [{ scale: 1 }],
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    flexShrink: 1,
  },
});