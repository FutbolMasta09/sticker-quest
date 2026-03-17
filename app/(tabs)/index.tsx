import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Achievements from '@/src/components/Achievements';
import QuestGrid from '@/src/components/QuestGrid';
import SessionLockScreen from '@/src/components/SessionLockScreen';
import StarCounter from '@/src/components/StarCounter';
import StarMail from '@/src/components/StarMail';
import StarlightSpirit from '@/src/components/StarlightSpirit';
import { useResponsiveScale } from '@/src/hooks/useResponsiveScale';
import { useMasteryStore } from '@/src/store/useMasteryStore';
import { useUserStore } from '@/src/store/useUserStore';
import { Star } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { childName } = useUserStore();
  const { startSession, isSessionLocked, getTotalStars } = useMasteryStore();
  const stars = getTotalStars();
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
  }, []);

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
            
            <QuestGrid />

            {/* Star-Mail Notifications */}
            <StarMail />
          </View>
        </View>
        
        {/* Footer Note */}
        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Keep going! Every small step earns you stars. 🌟
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
  },
  sectionTitle: {
    fontSize: 18,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
