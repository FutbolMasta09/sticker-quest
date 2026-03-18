import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SetupProps {
  stickerName: string;
  taskDescription: string;
  audioPath: string;
  onReady: () => void;
}

export const SetupPhase = ({ stickerName, taskDescription, audioPath, onReady }: SetupProps) => {
  
  // INSTRUCTION: Audio-First Logic
  useEffect(() => {
    console.log(`Triggering Audio: ${audioPath}`);
    // logic to play taskDescription via JSI-Audio for 0-latency
  }, [audioPath]);

  return (
    <View style={styles.fullScreen}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Ready for the {stickerName} Challenge?</Text>
        
        <View style={styles.instructionCard}>
          <Text style={styles.parentRole}>🎬 Parent Note: Hold the tablet and watch Libby shine!</Text>
          <Text style={styles.taskText}>{taskDescription}</Text>
        </View>

        <TouchableOpacity style={styles.readyButton} onPress={onReady}>
          <Text style={styles.readyButtonText}>WE&apos;RE READY!</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>The reward unlocks after the move!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.8)', 
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1000
  },
  overlay: { width: '85%', alignItems: 'center' },
  header: { color: 'white', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  instructionCard: { 
    backgroundColor: 'white', 
    padding: 25, 
    borderRadius: 20, 
    width: '100%',
    marginBottom: 40,
    elevation: 5
  },
  parentRole: { color: '#666', fontSize: 14, fontWeight: '600', marginBottom: 15, textAlign: 'center' },
  taskText: { color: '#333', fontSize: 22, textAlign: 'center', lineHeight: 32 },
  readyButton: { 
    backgroundColor: '#FFD700', // Gold for a "Star" feeling
    paddingVertical: 20, 
    paddingHorizontal: 60, 
    borderRadius: 50 
  },
  readyButtonText: { color: '#333', fontSize: 24, fontWeight: '900' },
  footer: { color: '#aaa', marginTop: 20, fontStyle: 'italic' }
});