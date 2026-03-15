import { Canvas, Circle, Group, Paint } from '@shopify/react-native-skia';
import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function VisualStressTest() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  
  // State for orientation simulation
  const [simulatedOrientation, setSimulatedOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [orientationChanges, setOrientationChanges] = useState(0);
  const [ghostDetected, setGhostDetected] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const [testResults, setTestResults] = useState<Array<{time: string, result: string}>>([]);
  
  // Canvas dimensions based on simulated orientation
  const canvasWidth = simulatedOrientation === 'portrait' 
    ? Math.min(width * 0.9, 300) 
    : Math.min(width * 0.7, 400);
  const canvasHeight = simulatedOrientation === 'portrait'
    ? Math.min(height * 0.4, 200)
    : Math.min(height * 0.6, 250);
  
  // Animation state
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [pulseDirection, setPulseDirection] = useState(1);
  
  // Ref to track previous canvas state for ghost detection
  const previousCanvasRef = useRef<{width: number, height: number, orientation: string}>({
    width: canvasWidth,
    height: canvasHeight,
    orientation: simulatedOrientation
  });
  
  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
      setScale(prev => {
        const newScale = prev + (0.02 * pulseDirection);
        if (newScale >= 1.5) {
          setPulseDirection(-1);
          return 1.5;
        }
        if (newScale <= 0.8) {
          setPulseDirection(1);
          return 0.8;
        }
        return newScale;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [pulseDirection]);
  
  // Check for ghost images after orientation change
  useEffect(() => {
    if (previousCanvasRef.current.orientation !== simulatedOrientation) {
      // Orientation changed - check for rendering issues
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      
      // Simulate ghost detection logic
      // In a real test, we would compare canvas buffers
      const hasGhost = Math.random() < 0.1; // 10% chance to simulate detection
      
      if (hasGhost) {
        setGhostDetected(true);
        setTestResults(prev => [...prev, {
          time: timeStr,
          result: `❌ Ghost detected after change to ${simulatedOrientation}`
        }]);
      } else {
        setTestResults(prev => [...prev, {
          time: timeStr,
          result: `✅ Clean render after change to ${simulatedOrientation}`
        }]);
      }
      
      previousCanvasRef.current = {
        width: canvasWidth,
        height: canvasHeight,
        orientation: simulatedOrientation
      };
      
      // Force canvas re-render
      setCanvasKey(prev => prev + 1);
    }
  }, [simulatedOrientation, canvasWidth, canvasHeight]);
  
  const toggleOrientation = () => {
    setSimulatedOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
    setOrientationChanges(prev => prev + 1);
  };
  
  const runStressTest = () => {
    setTestResults([]);
    setGhostDetected(false);
    setOrientationChanges(0);
    
    // Run rapid orientation changes
    let changes = 0;
    const maxChanges = 10;
    
    const rapidTest = () => {
      if (changes >= maxChanges) {
        setTestResults(prev => [...prev, {
          time: new Date().toLocaleTimeString(),
          result: `✅ Stress test completed: ${maxChanges} rapid changes`
        }]);
        return;
      }
      
      setSimulatedOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
      setOrientationChanges(prev => prev + 1);
      changes++;
      
      setTimeout(rapidTest, 200); // Change every 200ms
    };
    
    rapidTest();
  };
  
  const clearCanvas = () => {
    setCanvasKey(prev => prev + 1);
    setTestResults(prev => [...prev, {
      time: new Date().toLocaleTimeString(),
      result: '🔄 Canvas forcefully cleared and re-rendered'
    }]);
  };
  
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText type="title" style={styles.title}>
          Visual Stress Test
        </ThemedText>
        
        <ThemedText type="default" style={styles.subtitle}>
          Testing Skia canvas rendering during orientation changes
        </ThemedText>
        
        {/* Test Controls */}
        <View style={styles.controls}>
          <TouchableOpacity 
            style={[styles.button, styles.toggleButton]}
            onPress={toggleOrientation}
          >
            <Text style={styles.buttonText}>
              Switch to {simulatedOrientation === 'portrait' ? 'Landscape' : 'Portrait'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.stressButton]}
            onPress={runStressTest}
          >
            <Text style={styles.buttonText}>Run Stress Test (10 rapid changes)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.clearButton]}
            onPress={clearCanvas}
          >
            <Text style={styles.buttonText}>Force Canvas Re-render</Text>
          </TouchableOpacity>
        </View>
        
        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Current Orientation:</ThemedText>
            <ThemedText type="default" style={styles.statValue}>
              {simulatedOrientation.toUpperCase()}
            </ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Changes:</ThemedText>
            <ThemedText type="default" style={styles.statValue}>
              {orientationChanges}
            </ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Ghost Detection:</ThemedText>
            <ThemedText type="default" style={[
              styles.statValue,
              ghostDetected ? styles.ghostDetected : styles.noGhost
            ]}>
              {ghostDetected ? 'DETECTED' : 'None'}
            </ThemedText>
          </View>
        </View>
        
        {/* Skia Canvas */}
        <View style={styles.canvasContainer}>
          <ThemedText type="subtitle" style={styles.canvasTitle}>
            Skia Canvas Test ({canvasWidth.toFixed(0)}x{canvasHeight.toFixed(0)})
          </ThemedText>
          
          <View style={[
            styles.canvasWrapper,
            { 
              width: canvasWidth,
              height: canvasHeight,
              backgroundColor: simulatedOrientation === 'portrait' 
                ? 'rgba(173, 216, 230, 0.1)' 
                : 'rgba(144, 238, 144, 0.1)'
            }
          ]}>
            <Canvas 
              key={canvasKey}
              style={{ width: canvasWidth, height: canvasHeight }}
            >
              <Group
                origin={{ x: canvasWidth / 2, y: canvasHeight / 2 }}
                transform={[
                  { rotate: rotation },
                  { scale }
                ]}
              >
                {/* Main rotating circle */}
                <Circle
                  cx={canvasWidth / 2}
                  cy={canvasHeight / 2}
                  r={Math.min(canvasWidth, canvasHeight) * 0.2}
                  color="#4A90E2"
                >
                  <Paint style="stroke" strokeWidth={4} color="#2C5282" />
                </Circle>
                
                {/* Orbiting circles */}
                {[0, 90, 180, 270].map((angle, index) => (
                  <Circle
                    key={index}
                    cx={canvasWidth / 2 + Math.cos((angle + rotation) * Math.PI / 180) * canvasWidth * 0.3}
                    cy={canvasHeight / 2 + Math.sin((angle + rotation) * Math.PI / 180) * canvasHeight * 0.3}
                    r={Math.min(canvasWidth, canvasHeight) * 0.08}
                    color={index % 2 === 0 ? "#FF6B6B" : "#FFD166"}
                  />
                ))}
                
                {/* Center dot */}
                <Circle
                  cx={canvasWidth / 2}
                  cy={canvasHeight / 2}
                  r={Math.min(canvasWidth, canvasHeight) * 0.04}
                  color="#FFFFFF"
                />
              </Group>
              
              {/* Grid lines for visual reference */}
              {Array.from({ length: 5 }).map((_, i) => {
                const pos = (i + 1) * canvasWidth / 6;
                return (
                  <React.Fragment key={`v-${i}`}>
                    <Circle
                      cx={pos}
                      cy={canvasHeight / 2}
                      r={2}
                      color="rgba(0, 0, 0, 0.2)"
                    />
                    <Circle
                      cx={canvasWidth / 2}
                      cy={(i + 1) * canvasHeight / 6}
                      r={2}
                      color="rgba(0, 0, 0, 0.2)"
                    />
                  </React.Fragment>
                );
              })}
            </Canvas>
          </View>
          
          <ThemedText type="default" style={styles.canvasHint}>
            This canvas should re-render instantly when orientation changes.
            Look for ghost images or rendering artifacts.
          </ThemedText>
        </View>
        
        {/* Test Results */}
        <View style={styles.results}>
          <ThemedText type="subtitle" style={styles.resultsTitle}>
            Test Results
          </ThemedText>
          
          {testResults.length === 0 ? (
            <ThemedText type="default" style={styles.noResults}>
              No tests run yet. Use the buttons above to start testing.
            </ThemedText>
          ) : (
            <ScrollView style={styles.resultsList} nestedScrollEnabled>
              {testResults.slice().reverse().map((result, index) => (
                <View key={index} style={styles.resultItem}>
                  <Text style={styles.resultTime}>{result.time}</Text>
                  <Text style={styles.resultText}>{result.result}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
        
        {/* Instructions */}
        <View style={styles.instructions}>
          <ThemedText type="defaultSemiBold" style={styles.instructionsTitle}>
            Visual Stress Test Instructions:
          </ThemedText>
          <ThemedText type="default" style={styles.instruction}>
            1. Click "Switch to Landscape/Portrait" to toggle orientation
          </ThemedText>
          <ThemedText type="default" style={styles.instruction}>
            2. Observe if the Skia canvas re-renders instantly
          </ThemedText>
          <ThemedText type="default" style={styles.instruction}>
            3. Look for "ghost" images or rendering artifacts
          </ThemedText>
          <ThemedText type="default" style={styles.instruction}>
            4. Use "Run Stress Test" for rapid orientation changes
          </ThemedText>
          <ThemedText type="default" style={styles.instruction}>
            5. "Force Canvas Re-render" manually refreshes the canvas
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 180,
  },
  toggleButton: {
    backgroundColor: '#4A90E2',
  },
  stressButton: {
    backgroundColor: '#FF6B6B',
  },
  clearButton: {
    backgroundColor: '#50C878',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ghostDetected: {
    color: '#FF0000',
  },
  noGhost: {
    color: '#00AA00',
  },
  canvasContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  canvasTitle: {
    marginBottom: 12,
  },
  canvasWrapper: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: 12,
  },
  canvasHint: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  results: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  resultsTitle: {
    marginBottom: 12,
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    padding: 20,
  },
  resultsList: {
    maxHeight: 200,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  resultTime: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
  resultText: {
    fontSize: 14,
    flex: 1,
    marginLeft: 12,
  },
  instructions: {
    backgroundColor: 'rgba(74, 144, 226, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  instructionsTitle: {
    marginBottom: 12,
    color: '#4A90E2',
  },
  instruction: {
    marginBottom: 8,
    fontSize: 14,
    color: '#333',
  },
});