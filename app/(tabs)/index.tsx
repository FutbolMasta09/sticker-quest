import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Achievements from '@/src/components/Achievements';
import QuestGrid from '@/src/components/QuestGrid';
import SessionLockScreen from '@/src/components/SessionLockScreen';
import StarCounter from '@/src/components/StarCounter';
import StarMail from '@/src/components/StarMail';
import StarlightSpirit from '@/src/components/StarlightSpirit';
import TutorialOverlay, { type CardLayout } from '@/src/components/TutorialOverlay';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useMasteryStore } from '@/src/store/useMasteryStore';
import { useUserStore } from '@/src/store/useUserStore';
import { useFocusEffect } from 'expo-router';
import { Star } from 'lucide-react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { childName } = useUserStore();
  const tutorialStep = useUserStore((s) => s.tutorialStep);
  const { startSession, isSessionLocked } = useMasteryStore();

  // Explicit selector — Zustand tracks this precisely and re-renders when progress changes
  const stars = useMasteryStore(
    (state) => Object.values(state.progress).reduce((sum, p) => sum + p.stars, 0)
  );

  const [firstCardLayout, setFirstCardLayout] = useState<CardLayout | undefined>(undefined);
  const scrollViewRef = useRef<ScrollView>(null);

  // Force a re-render when this screen comes back into focus after returning from a quest
  const [, forceRefresh] = useState(0);
  useFocusEffect(
    useCallback(() => {
      forceRefresh((n) => n + 1);
    }, [])
  );
  // Scroll to top whenever the tutorial is active so Sally Snake card is visible
  useEffect(() => {
    if (tutorialStep === 0) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      }, 150);
    }
  }, [tutorialStep]);

  const { scale, screenWidth, screenHeight, isTablet } = useResponsiveScale();
  const insets = useSafeAreaInsets();

  // Poll every minute so the lock screen appears automatically if 3 hours pass
  const [locked, setLocked] = useState(() => isSessionLocked());

  const isLandscape = screenWidth > screenHeight;
  const containerPadding = scale(16);
  const columnGap = scale(12);
  const leftColumnWidth = isLandscape ? screenWidth * 0.38 : screenWidth * 0.95;
  const rightColumnWidth = isLandscape ? screenWidth * 0.58 : screenWidth * 0.95;
  const canvasSize = isTablet ? scale(160) : scale(120);

  useEffect(() => {
    startSession();
    setLocked(isSessionLocked());

    const interval = setInterval(() => {
      setLocked(isSessionLocked());
    }, 60_000);

    return () => clearInterval(interval);
  }, [isSessionLocked, startSession]);

  const handleDevReset = () => {
    Alert.alert(
      'Reset Tutorial',
      'Wipes all star progress and restarts the tutorial from step 1.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            useMasteryStore.getState().resetAll();
            useUserStore.setState({ tutorialStep: 0, stars: 0 });
          },
        },
      ]
    );
  };

  if (locked) {
    return (
      <ThemedView style={styles.container}>
        <SessionLockScreen />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.scrollContent,
          { padding: containerPadding, paddingTop: insets.top + containerPadding }
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content - 2 columns for landscape, stacked for portrait */}
        <View style={[
          styles.mainContent,
          {
            flexDirection: isLandscape ? 'row' : 'column',
            gap: columnGap
          }
        ]}>
          {/* LEFT COLUMN: Starlight Section */}
          <View style={[
            styles.column,
            { width: isLandscape ? leftColumnWidth : '100%' }
          ]}>
            <View style={styles.sectionHeader}>
              <Star size={20} color="#FFD700" />
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Starlight Progress
              </ThemedText>
            </View>
            
            {/* Starlight Spirit Canvas */}
            <StarlightSpirit canvasSize={canvasSize} totalStars={stars} />
            
            {/* Recent Achievements */}
            <Achievements />
          </View>
          
          {/* RIGHT COLUMN: Quest Controls */}
          <View style={[
            styles.column,
            { width: isLandscape ? rightColumnWidth : '100%' }
          ]}>
            {/* Greeting Header */}
            <View style={styles.header}>
              <ThemedText type="title" style={styles.greeting}>
                Hi, {childName || 'Explorer'}! ✨
              </ThemedText>
              <StarCounter count={stars} />
            </View>
            
            <View style={styles.sectionHeader}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Quest Controls
              </ThemedText>
            </View>
            
            <QuestGrid onFirstCardMeasured={setFirstCardLayout} />

            {/* Star-Mail Notifications */}
            <StarMail />
          </View>
        </View>
        
        {/* Footer Note */}
        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Keep going! Every small step earns you stars. 🌟
          </ThemedText>
          {__DEV__ && (
            <TouchableOpacity style={styles.devResetBtn} onPress={handleDevReset}>
              <Text style={styles.devResetText}>DEV: Reset Tutorial</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* First-run tutorial — Modal stacks above all content automatically */}
      <TutorialOverlay cardLayout={firstCardLayout} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1FF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 38,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  column: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    backgroundColor: '#EFE3FF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#5A2AA8',
    fontWeight: '800',
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(107, 47, 217, 0.2)',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B5A80',
    textAlign: 'center',
    fontWeight: '600',
  },
  devResetBtn: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
  },
  devResetText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
