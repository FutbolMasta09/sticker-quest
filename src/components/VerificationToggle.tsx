import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useMasteryStore } from '../store/useMasteryStore';

export const VerificationToggle = () => {
  const { autoVerify, toggleVerificationMode } = useMasteryStore();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {autoVerify ? "🤖 AI Scout is watching" : "👋 Parent is the Judge"}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#4CAF50" }}
        thumbColor={autoVerify ? "#FFD700" : "#f4f3f4"}
        onValueChange={toggleVerificationMode}
        value={autoVerify}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 2
  },
  label: { fontSize: 16, fontWeight: '600', color: '#333' }
});