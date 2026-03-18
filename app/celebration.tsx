import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useUserStore } from '@/src/store/useUserStore';
import { Canvas, Circle, Group, Paint } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Hand } from 'lucide-react-native';
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

export default function CelebrationScreen() {
  const router = useRouter();
  const { childName, addStars } = useUserStore();
  const { width, height } = useWindowDimensions();

  // Star particles state
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Hand pulsing animation
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Start hand pulsing animation
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1.0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  // Initialize star explosion on mount
  useEffect(() => {
    const centerX = width / 2;
    const centerY = height / 2;
    const newParticles: StarParticle[] = [];

    // Create 60 golden stars for a bigger explosion
    const starCount = 60;
    for (let i = 0; i < starCount; i++) {
      // Random angle and speed for explosion
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 5; // pixels per ms
      newParticles.push({
        id: i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 6, // 2-8 pixels
        opacity: 0.8 + Math.random() * 0.2, // 0.8-1.0
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
            const newVx = p.vx * 0.98;
            const newVy = p.vy * 0.98;

            // Decrease life
            const newLife = p.life - 0.0008 * delta;

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
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    } catch {
      // Haptics not available, ignore
    }

    // 3. Navigate back to Hub
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Full-screen Skia Canvas for star explosion */}
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
          <ThemedText type="title" style={styles.celebrationText}>
            You did it, {childName || 'Explorer'}! ✨
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtext}>
            A star explosion celebrates your achievement!
          </ThemedText>
        </View>

        {/* Pulsing Hand Icon */}
        <Animated.View style={[styles.handContainer, { transform: [{ scale: pulseAnim }] }]}>
          <Hand size={80} color="#4CAF50" />
        </Animated.View>

        {/* High-Five Button */}
        <TouchableOpacity
          style={styles.highFiveButton}
          activeOpacity={0.8}
          onPress={handleHighFive}
        >
          <View style={styles.buttonContent}>
            <Hand size={32} color="#FFFFFF" />
            <ThemedText type="title" style={styles.buttonText}>
              HIGH‑FIVE FOR A STAR
            </ThemedText>
          </View>
        </TouchableOpacity>
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
  celebrationText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 16,
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtext: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 24,
  },
  handContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#4CAF50',
  },
  highFiveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 32,
    width: '100%',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    flexShrink: 1,
  },
});