import { ThemedText } from '@/components/themed-text';
import { Canvas, Circle, Paint } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface StarlightSpiritProps {
  /** Size of the canvas (width & height) */
  canvasSize: number;
  /** Total stars collected */
  totalStars: number;
  /** Whether to show stats alongside canvas */
  showStats?: boolean;
}

/**
 * Starlight Spirit - Animated Skia unicorn/spirit visualization
 * with pulse animation and memory-safe cleanup.
 */
export default function StarlightSpirit({ 
  canvasSize, 
  totalStars,
  showStats = true 
}: StarlightSpiritProps) {
  // Animation states
  const [pulseScale, setPulseScale] = useState(1);
  const [glowOpacity, setGlowOpacity] = useState(0.7);

  // RAM Guard: Cleanup animation and canvas refs on unmount
  useEffect(() => {
    let animationFrame: number;
    let lastTime = 0;
    const pulseSpeed = 0.002; // radians per ms
    const glowSpeed = 0.003;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      lastTime = time;

      // Pulse scale: 0.9 to 1.1 with sine wave
      const scale = 1 + 0.1 * Math.sin(time * pulseSpeed);
      setPulseScale(scale);

      // Glow opacity: 0.5 to 0.9 with cosine wave
      const opacity = 0.7 + 0.2 * Math.cos(time * glowSpeed);
      setGlowOpacity(opacity);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Cleanup function for Fire HD 10 memory hygiene
    return () => {
      cancelAnimationFrame(animationFrame);
      // Nullify any potential canvas refs or picture caches
      // Skia's Canvas is managed by React Native Skia, but we ensure
      // animation loop is stopped.
    };
  }, []);

  return (
    <View style={styles.starCanvasContainer}>
      <Canvas style={{ width: canvasSize, height: canvasSize }}>
        {/* Glow effect (outer circle with opacity) */}
        <Circle
          cx={canvasSize / 2}
          cy={canvasSize / 2}
          r={canvasSize * 0.4 * pulseScale}
          color={`rgba(255, 215, 0, ${glowOpacity * 0.4})`}
        />
        {/* Main glowing circle */}
        <Circle
          cx={canvasSize / 2}
          cy={canvasSize / 2}
          r={canvasSize * 0.3 * pulseScale}
          color="#FFD700"
        >
          <Paint style="stroke" strokeWidth={3} color="#FFA500" />
        </Circle>
        {/* Inner highlight */}
        <Circle
          cx={canvasSize / 2 - canvasSize * 0.1}
          cy={canvasSize / 2 - canvasSize * 0.1}
          r={canvasSize * 0.1}
          color="#FFFFFF"
          opacity={0.8}
        />
      </Canvas>
      
      {showStats && (
        <View style={styles.starStats}>
          <ThemedText style={styles.statText}>Total Stars: {totalStars}</ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  starCanvasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  starStats: {
    flex: 1,
    gap: 8,
  },
  statText: {
    fontSize: 14,
    marginBottom: 4,
  },
});