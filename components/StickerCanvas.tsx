import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface StickerCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

export default function StickerCanvas({
  canvasWidth = SCREEN_WIDTH,
  canvasHeight = SCREEN_HEIGHT * 0.6,
}: StickerCanvasProps) {
  // Position as percentages (0-1)
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  
  // Animated values for smooth dragging
  const translateX = useSharedValue(canvasWidth * 0.5);
  const translateY = useSharedValue(canvasHeight * 0.5);
  
  // Track the canvas dimensions for percentage calculation
  const canvasRef = useRef<View>(null);
  
  // Track offset for proper dragging
  const offsetX = useSharedValue(canvasWidth * 0.5);
  const offsetY = useSharedValue(canvasHeight * 0.5);
  
  const panGesture = Gesture.Pan()
    .onStart(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    })
    .onUpdate((event) => {
      // Calculate new position in pixels
      const newX = Math.max(25, Math.min(canvasWidth - 25, offsetX.value + event.translationX));
      const newY = Math.max(25, Math.min(canvasHeight - 25, offsetY.value + event.translationY));
      
      translateX.value = newX;
      translateY.value = newY;
      
      // Convert to percentages (0-1)
      const percentX = newX / canvasWidth;
      const percentY = newY / canvasHeight;
      
      setPosition({ x: percentX, y: percentY });
    })
    .onEnd(() => {
      // Spring back to bounds if needed (optional)
      translateX.value = withSpring(translateX.value);
      translateY.value = withSpring(translateY.value);
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value - 25 }, // Center the circle (radius 25)
      { translateY: translateY.value - 25 },
    ],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        ref={canvasRef}
        style={[styles.canvas, { width: canvasWidth, height: canvasHeight }]}
      >
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.draggableCircle, animatedStyle]} />
        </GestureDetector>
        
        {/* Position display */}
        <View style={styles.positionDisplay}>
          <View style={styles.positionTextContainer}>
            <View style={styles.positionRow}>
              <View style={[styles.colorBox, { backgroundColor: 'cyan' }]} />
              <Text style={styles.positionText}>
                X: {(position.x * 100).toFixed(1)}%, Y: {(position.y * 100).toFixed(1)}%
              </Text>
            </View>
            <Text style={styles.coordinateText}>
              Pixel: {Math.round(translateX.value)}, {Math.round(translateY.value)}
            </Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  canvas: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  draggableCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'cyan',
    position: 'absolute',
    top: 0,
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  positionDisplay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  positionTextContainer: {
    flexDirection: 'column',
  },
  positionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  colorBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#999',
  },
  positionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  coordinateText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
});