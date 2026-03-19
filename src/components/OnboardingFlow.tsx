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
            <Text style={styles.title}>Welcome to Starlight&apos;s Garden!</Text>
            <View style={styles.noteBox}>
              <Text style={styles.body}>
                This takes about one minute.
                {"\n\n"}
                Add your child&apos;s name, pick a grade friend, and choose one daily habit.
                {"\n\n"}
                Then you&apos;re ready to start quests.
              </Text>
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={() => setStep(1)}>
              <Text style={styles.mainButtonText}>Start Setup</Text>
            </TouchableOpacity>
          </View>
        );

      case 1: // CHARACTER SELECTION
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Pick a Grade Friend 🌟</Text>
            <Text style={styles.subTitle}>Choose your child&apos;s starting grade.</Text>
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
              <Text style={styles.mainButtonText}>Continue</Text>
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
              <Text style={styles.title}>Quick Details 📝</Text>
              
              <Text style={styles.label}>Child&apos;s Name</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Type your child&apos;s name" 
                onChangeText={(t) => {
                  setCName(t);
                  if(t.toLowerCase() === 'libby') setPhonetic('Lib-ee');
                }} 
              />

              <Text style={styles.label}>How should Starlight say the name?</Text>
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
                placeholder="Name pronunciation (optional)" 
                onChangeText={setPhonetic} 
              />

              <Text style={styles.label}>Parent or Helper Name</Text>
              <TextInput style={styles.input} placeholder="Type your name" onChangeText={setPName} />

              <Text style={styles.label}>Pick one focus habit for today</Text>
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
                <Text style={styles.mainButtonText}>Finish Setup</Text>
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
  container: { flex: 1, backgroundColor: '#F8F3FF' },
  stepContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  scrollContainer: { alignItems: 'center', padding: 30, paddingBottom: 100 },
  emoji: { fontSize: 60, marginBottom: 10 },
  title: { fontSize: 30, fontWeight: '900', color: '#6B2FD9', textAlign: 'center', marginBottom: 10 },
  subTitle: { fontSize: 16, color: '#6A5A7A', marginBottom: 30, fontWeight: '600' },
  noteBox: { backgroundColor: '#FFF5CC', padding: 20, borderRadius: 20, borderLeftWidth: 5, borderLeftColor: '#FFB300', marginBottom: 40 },
  body: { fontSize: 18, color: '#4D3A5F', lineHeight: 28, fontStyle: 'italic' },
  grid: { flexDirection: 'row', gap: 15, marginBottom: 20 },
  gradeCard: { width: '45%', padding: 20, borderRadius: 25, alignItems: 'center', borderWidth: 2, borderColor: 'transparent', shadowColor: '#9A4DFF', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 8, elevation: 4 },
  selectedCard: { borderColor: '#6B2FD9', shadowColor: '#6B2FD9', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 6 },
  cardIcon: { fontSize: 40, marginBottom: 10 },
  gradeText: { fontWeight: 'bold', fontSize: 18, color: '#4D3A5F' },
  gradeSub: { fontSize: 12, color: '#7D6A92' },
  label: { alignSelf: 'flex-start', fontWeight: '700', color: '#5A2AA8', marginBottom: 8, marginTop: 10 },
  input: { width: '100%', height: 60, backgroundColor: '#FFFFFF', borderRadius: 15, paddingHorizontal: 20, fontSize: 18, marginBottom: 15, borderWidth: 1, borderColor: '#DFC9FF' },
  sugRow: { flexDirection: 'row', gap: 8, marginBottom: 10, alignSelf: 'flex-start' },
  sugChip: { backgroundColor: '#F5E8FF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#D4B2FF' },
  sugText: { color: '#6B2FD9', fontWeight: 'bold', fontSize: 12 },
  habitOption: { width: '100%', padding: 18, backgroundColor: '#FFFFFF', borderRadius: 15, borderWidth: 1, borderColor: '#E8D8FF', marginBottom: 10 },
  habitSelected: { backgroundColor: '#F0E6FF', borderColor: '#6B2FD9' },
  habitText: { fontSize: 16, fontWeight: '700', color: '#4D3A5F' },
  mainButton: { backgroundColor: '#7B3FF2', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 35, marginTop: 20, width: '100%', alignItems: 'center', shadowColor: '#7B3FF2', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.22, shadowRadius: 8, elevation: 6 },
  mainButtonText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});