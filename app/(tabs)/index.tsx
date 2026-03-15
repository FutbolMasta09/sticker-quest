import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Achievements from '@/src/components/Achievements';
import QuestGrid from '@/src/components/QuestGrid';
import StarCounter from '@/src/components/StarCounter';
import StarMail from '@/src/components/StarMail';
import StarlightSpirit from '@/src/components/StarlightSpirit';
import { useUserStore } from '@/src/store/useUserStore';
import { Star } from 'lucide-react-native';
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { childName, stars } = useUserStore();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  
  // PixelPusher scaling: Use percentages for layout
  const containerPadding = Math.min(width * 0.05, 24);
  const columnGap = Math.min(width * 0.04, 16);
  const leftColumnWidth = isLandscape ? width * 0.4 : width * 0.95;
  const rightColumnWidth = isLandscape ? width * 0.6 : width * 0.95;
  const canvasSize = Math.min(width * 0.25, 140);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { padding: containerPadding }
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
            
            <QuestGrid showDebug={true} />

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
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,
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
