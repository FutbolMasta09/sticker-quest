import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PerformanceProps {
  stickerName: string;
  isAutoMode: boolean;
  onSuccess: () => void;
  onFail: () => void;
}

export const PerformanceView = ({ stickerName, isAutoMode, onSuccess, onFail }: PerformanceProps) => {
  const [isPressing, setIsPressing] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Show us your {stickerName} moves!</Text>

      <View style={styles.messageCard}>
        <Text style={styles.heartIcon}>❤️</Text>
        <Text style={styles.bondingNote}>
          "We love the 'AI Scout,' but nothing beats a high-five from you. 
          The best part of Sticker Quest is the time you spend together. 
          If you're able, stick around to cheer her on!"
        </Text>
      </View>

      {isAutoMode ? (
        <View style={styles.aiBox}>
          <Text style={styles.aiStatus}>🤖 AI Scout is watching for those moves...</Text>
          {/* Vision API Progress Bar would go here */}
        </View>
      ) : (
        <View style={styles.manualBox}>
          <Text style={styles.instruction}>When Libby finishes her move, hold the Star to unlock her reward!</Text>
          
          <TouchableOpacity 
            delayLongPress={3000}
            onLongPress={onSuccess}
            onPressIn={() => setIsPressing(true)}
            onPressOut={() => setIsPressing(false)}
            style={[styles.masteryStar, isPressing && styles.starActive]}
          >
            <Text style={styles.starText}>⭐</Text>
          </TouchableOpacity>
          
          <Text style={styles.subtext}>Hold for 3 seconds to verify mastery</Text>
        </View>
      )}

      <TouchableOpacity style={styles.skipButton} onPress={onFail}>
        <Text style={styles.skipText}>Try a different one</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  messageCard: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: '#ffd7e0', 
    marginBottom: 40,
    alignItems: 'center'
  },
  heartIcon: { fontSize: 24, marginBottom: 10 },
  bondingNote: { fontSize: 16, color: '#555', textAlign: 'center', fontStyle: 'italic', lineHeight: 22 },
  manualBox: { alignItems: 'center', width: '100%' },
  aiBox: { padding: 30, backgroundColor: '#eef', borderRadius: 20 },
  aiStatus: { fontSize: 18, color: '#446', fontWeight: '600' },
  instruction: { fontSize: 18, textAlign: 'center', color: '#333', marginBottom: 30 },
  masteryStar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    backgroundColor: '#FFD700', 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 10
  },
  starActive: { backgroundColor: '#FFA500', transform: [{ scale: 0.95 }] },
  starText: { fontSize: 60 },
  subtext: { marginTop: 15, color: '#888' },
  skipButton: { marginTop: 50 },
  skipText: { color: '#999', textDecorationLine: 'underline' }
});