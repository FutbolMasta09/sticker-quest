import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useUserStore } from '../store/useUserStore';

export const OnboardingFlow = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const { setProfile, updateHabit } = useUserStore();

  const [cName, setCName] = useState('');
  const [pName, setPName] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [grade, setGrade] = useState<'K' | 'G1' | 'G2' | 'G3'>('K');
  const [habit, setLocalHabit] = useState('Tidying Up');

  const handleFinish = () => {
    // Final check: if they left phonetic empty, use the name
    const finalPhonetic = phonetic || cName;
    setProfile(cName, pName, finalPhonetic, grade);
    updateHabit(habit);
    onComplete();
  };

  const renderStep = () => {
    switch (step) {
      case 0: // THE WELCOME
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.emoji}>✨</Text>
            <Text style={styles.title}>Welcome to the Garden!</Text>
            <View style={styles.noteBox}>
              <Text style={styles.body}>
                "Hi! I'm Ryan. I'm a 'Dev-Uncle' and I built this for my niece, Libby. 
                I wanted an app that gets kids moving and learning—without the 'screen-suck.' 
                Ready to meet your new friends?"
              </Text>
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={() => setStep(1)}>
              <Text style={styles.mainButtonText}>Start the Magic! 🚀</Text>
            </TouchableOpacity>
          </View>
        );

      case 1: // CHARACTER SELECTION
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Pick a Star-Friend 🌟</Text>
            <Text style={styles.subTitle}>Who is joining Libby today?</Text>
            <View style={styles.grid}>
              {[
                { id: 'K', name: 'Starlight', sub: 'Unicorn (K)', icon: '🦄', color: '#F0E6FF' },
                { id: 'G1', name: 'Barnaby', sub: 'Bear (G1)', icon: '🐻', color: '#E6F4EA' }
              ].map((g) => (
                <TouchableOpacity 
                  key={g.id} 
                  style={[
                    styles.gradeCard, 
                    { backgroundColor: g.color },
                    grade === g.id && styles.selectedCard
                  ]}
                  onPress={() => setGrade(g.id as any)}
                >
                  <Text style={styles.cardIcon}>{g.icon}</Text>
                  <Text style={styles.gradeText}>{g.name}</Text>
                  <Text style={styles.gradeSub}>{g.sub}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={() => setStep(2)}>
              <Text style={styles.mainButtonText}>Next ➡️</Text>
            </TouchableOpacity>
          </View>
        );

      case 2: // THE DETAILS
        return (
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{ flex: 1 }}
          >
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
              <Text style={styles.title}>Magic Details 📝</Text>
              
              <Text style={styles.label}>Child's Name</Text>
              <TextInput 
                style={styles.input} 
                placeholder="e.g. Libby" 
                onChangeText={(t) => {
                  setCName(t);
                  if(t.toLowerCase() === 'libby') setPhonetic('Lib-ee');
                }} 
              />

              <Text style={styles.label}>How should Starlight say it?</Text>
              <View style={styles.sugRow}>
                {['Lib-ee', 'Lih-bee', 'Lee-bee'].map((s) => (
                  <TouchableOpacity key={s} style={styles.sugChip} onPress={() => setPhonetic(s)}>
                    <Text style={styles.sugText}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TextInput 
                style={styles.input} 
                value={phonetic} 
                placeholder="Phonetic spelling" 
                onChangeText={setPhonetic} 
              />

              <Text style={styles.label}>Your Name (The Helper)</Text>
              <TextInput style={styles.input} placeholder="e.g. Uncle Ryan" onChangeText={setPName} />

              <Text style={styles.label}>Focus Habit for Today:</Text>
              {['🪥 Brushing Teeth', '🧸 Tidying Up', '🍽️ Helping Hands'].map((h) => (
                <TouchableOpacity 
                  key={h} 
                  style={[styles.habitOption, habit === h && styles.habitSelected]}
                  onPress={() => setLocalHabit(h)}
                >
                  <Text style={styles.habitText}>{h}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity style={styles.mainButton} onPress={handleFinish}>
                <Text style={styles.mainButtonText}>Enter the Garden! ✨</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      default: return null;
    }
  };

  return <View style={styles.container}>{renderStep()}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  stepContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  scrollContainer: { alignItems: 'center', padding: 30, paddingBottom: 100 },
  emoji: { fontSize: 60, marginBottom: 10 },
  title: { fontSize: 30, fontWeight: '900', color: '#4A00E0', textAlign: 'center', marginBottom: 10 },
  subTitle: { fontSize: 16, color: '#666', marginBottom: 30 },
  noteBox: { backgroundColor: '#F8F9FA', padding: 20, borderRadius: 20, borderLeftWidth: 5, borderLeftColor: '#FFD700', marginBottom: 40 },
  body: { fontSize: 18, color: '#444', lineHeight: 28, fontStyle: 'italic' },
  grid: { flexDirection: 'row', gap: 15, marginBottom: 20 },
  gradeCard: { width: '45%', padding: 20, borderRadius: 25, alignItems: 'center', borderWidth: 2, borderColor: 'transparent' },
  selectedCard: { borderColor: '#4A00E0', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  cardIcon: { fontSize: 40, marginBottom: 10 },
  gradeText: { fontWeight: 'bold', fontSize: 18, color: '#333' },
  gradeSub: { fontSize: 12, color: '#777' },
  label: { alignSelf: 'flex-start', fontWeight: '700', color: '#555', marginBottom: 8, marginTop: 10 },
  input: { width: '100%', height: 60, backgroundColor: '#F0F0F0', borderRadius: 15, paddingHorizontal: 20, fontSize: 18, marginBottom: 15 },
  sugRow: { flexDirection: 'row', gap: 8, marginBottom: 10, alignSelf: 'flex-start' },
  sugChip: { backgroundColor: '#E0CCFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  sugText: { color: '#4A00E0', fontWeight: 'bold', fontSize: 12 },
  habitOption: { width: '100%', padding: 18, backgroundColor: '#FFF', borderRadius: 15, borderWidth: 1, borderColor: '#EEE', marginBottom: 10 },
  habitSelected: { backgroundColor: '#F0E6FF', borderColor: '#4A00E0' },
  habitText: { fontSize: 16, fontWeight: '600', color: '#333' },
  mainButton: { backgroundColor: '#4A00E0', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 35, marginTop: 20, width: '100%', alignItems: 'center' },
  mainButtonText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});