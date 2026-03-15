import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChallengeProps {
  sticker: any;
  isVisible: boolean;
  onVerify: () => void; // Triggered by Parent or Vision API
  onClose: () => void;
  verified: boolean;
}

export const ChallengeOverlay = ({ sticker, isVisible, onVerify, onClose, verified }: ChallengeProps) => {
  const [hintIndex, setHintIndex] = useState(-1);

  const showNextHint = () => {
    if (hintIndex < sticker.hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{sticker.sticker_name} Challenge!</Text>
          
          <View style={styles.taskBox}>
            <Text style={styles.taskText}>{sticker.motor_tasks.gross.description}</Text>
          </View>

          {hintIndex >= 0 && (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>💡 {sticker.hints[hintIndex]}</Text>
            </View>
          )}

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.hintButton} onPress={showNextHint}>
              <Text style={styles.buttonText}>Get a Hint</Text>
            </TouchableOpacity>

            {/* STRICT MASTERY: Collect button is grayed out until verified */}
            <TouchableOpacity 
              style={[styles.collectButton, !verified && styles.disabledButton]} 
              onPress={onClose}
              disabled={!verified}
            >
              <Text style={styles.buttonText}>Collect Sticker</Text>
            </TouchableOpacity>
          </View>

          {!verified && (
            <Text style={styles.footerNote}>Complete the move to unlock!</Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  card: { width: '85%', backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  taskBox: { backgroundColor: '#eef9ff', padding: 15, borderRadius: 10, marginBottom: 20 },
  taskText: { fontSize: 18, textAlign: 'center', lineHeight: 26 },
  hintBox: { backgroundColor: '#fffbe6', padding: 10, borderRadius: 10, marginBottom: 15, borderLeftWidth: 4, borderLeftColor: '#ffe58f' },
  hintText: { fontSize: 16, color: '#856404' },
  buttonRow: { flexDirection: 'row', gap: 10 },
  hintButton: { backgroundColor: '#999', padding: 15, borderRadius: 10, flex: 1 },
  collectButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 10, flex: 1 },
  disabledButton: { backgroundColor: '#ccc' },
  buttonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  footerNote: { marginTop: 15, color: '#666', fontStyle: 'italic' }
});