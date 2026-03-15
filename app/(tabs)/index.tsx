import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useUserStore } from '@/src/store/useUserStore';
import { Canvas, Circle, Paint } from '@shopify/react-native-skia';
import { useRouter } from 'expo-router';
import { Bell, ChevronRight, Mail, Star, Target, Trash2 } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const { childName, activeHabit, stars } = useUserStore();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  
  // PixelPusher scaling: Use percentages for layout
  const containerPadding = Math.min(width * 0.05, 24);
  const columnGap = Math.min(width * 0.04, 16);
  const leftColumnWidth = isLandscape ? width * 0.4 : width * 0.95;
  const rightColumnWidth = isLandscape ? width * 0.6 : width * 0.95;
  const canvasSize = Math.min(width * 0.25, 140);
  
  // Starlight Spirit pulse animation state
  const [pulseScale, setPulseScale] = useState(1);
  const [glowOpacity, setGlowOpacity] = useState(0.7);

  // RAM Guard: Cleanup animation on unmount
  useEffect(() => {
    let animationFrame: number;
    let lastTime = 0;
    const pulseSpeed = 0.002; // radians per ms
    const glowSpeed = 0.003;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      // Pulse scale: 0.9 to 1.1 with sine wave
      const scale = 1 + 0.1 * Math.sin(time * pulseSpeed);
      setPulseScale(scale);

      // Glow opacity: 0.5 to 0.9 with cosine wave
      const opacity = 0.7 + 0.2 * Math.cos(time * glowSpeed);
      setGlowOpacity(opacity);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  // Mock messages for Star-Mail
  const messages = [
    { id: 1, from: 'Mom', text: 'Great job on your reading today!', time: '2h ago', unread: true },
    { id: 2, from: 'Dad', text: 'Remember to brush your teeth after dinner', time: '1d ago', unread: false },
    { id: 3, from: 'Teacher', text: 'Star sticker earned for math worksheet!', time: '3d ago', unread: true },
  ];

  // Debug: Clear storage button handler
  const handleClearStorage = async () => {
    Alert.alert(
      'Clear Storage',
      'This will wipe all saved data. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            await useUserStore.persist.clearStorage();
            Alert.alert('Storage Cleared', 'App will reload...');
            // Try to reload via expo-updates if available
            try {
              const Updates = await import('expo-updates');
              await Updates.reloadAsync();
            } catch {
              // Fallback: reset navigation
              router.replace('/');
            }
          }
        }
      ]
    );
  };

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
            <View style={styles.starCanvasContainer}>
              <Canvas style={{ width: canvasSize, height: canvasSize }}>
                {/* Glow effect (outer circle with opacity) */}
                <Circle
                  cx={canvasSize / 2}
                  cy={canvasSize / 2}
                  r={canvasSize * 0.4 * pulseScale}
                  color={`rgba(255, 215, 0, ${glowOpacity * 0.4})`}
                />
                {/* Main glowing circle */}
                <Circle
                  cx={canvasSize / 2}
                  cy={canvasSize / 2}
                  r={canvasSize * 0.3 * pulseScale}
                  color="#FFD700"
                >
                  <Paint style="stroke" strokeWidth={3} color="#FFA500" />
                </Circle>
                {/* Inner highlight */}
                <Circle
                  cx={canvasSize / 2 - canvasSize * 0.1}
                  cy={canvasSize / 2 - canvasSize * 0.1}
                  r={canvasSize * 0.1}
                  color="#FFFFFF"
                  opacity={0.8}
                />
              </Canvas>
              
              <View style={styles.starStats}>
                <ThemedText style={styles.statText}>Today's Stars: 3</ThemedText>
                <ThemedText style={styles.statText}>Weekly Goal: 15/20</ThemedText>
                <ThemedText style={styles.statText}>Total Collection: {stars}</ThemedText>
              </View>
            </View>
            
            {/* Recent Achievements */}
            <View style={styles.achievements}>
              <ThemedText type="defaultSemiBold">Recent Achievements</ThemedText>
              <View style={styles.achievementList}>
                {['Reading Star', 'Math Wizard', 'Helper Hero'].map((achievement, idx) => (
                  <View key={idx} style={styles.achievementBadge}>
                    <Star size={16} color="#FFD700" />
                    <ThemedText style={styles.achievementText}>{achievement}</ThemedText>
                  </View>
                ))}
              </View>
            </View>
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
              <View style={styles.starBadge}>
                <Star size={24} color="#FFD700" fill="#FFD700" />
                <ThemedText style={styles.starCount}>{stars}</ThemedText>
              </View>
            </View>
            
            <View style={styles.sectionHeader}>
              <Target size={20} color="#4CAF50" />
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Quest Controls
              </ThemedText>
            </View>
            
            {/* Main Quest Button */}
            <TouchableOpacity
              style={styles.questButton}
              activeOpacity={0.7}
              onPress={() => router.push({ pathname: '/quest-complete', params: { habit: activeHabit } })}
            >
              <View style={styles.questButtonContent}>
                <Target size={32} color="#FFFFFF" />
                <View style={styles.questButtonText}>
                  <ThemedText type="title" style={styles.questButtonTitle}>
                    {activeHabit || 'Start Your Quest'}
                  </ThemedText>
                  <ThemedText style={styles.questButtonSubtitle}>
                    Tap to complete today's challenge
                  </ThemedText>
                </View>
                <ChevronRight size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
            
            {/* Quick Actions */}
            <View style={styles.quickActions}>
              <ThemedText type="defaultSemiBold" style={styles.quickActionsTitle}>
                Quick Actions
              </ThemedText>
              <View style={styles.actionGrid}>
                {[
                  { icon: '📚', label: 'Read', color: '#2196F3', habit: 'Reading' },
                  { icon: '🧹', label: 'Clean', color: '#FF9800', habit: 'Cleaning' },
                  { icon: '🦷', label: 'Brush', color: '#9C27B0', habit: 'Brushing Teeth' },
                  { icon: '🥦', label: 'Eat Veggies', color: '#4CAF50', habit: 'Eating Veggies' },
                ].map((action, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.actionButton}
                    onPress={() => {
                      if (action.habit === 'Brushing Teeth') {
                        router.push('/celebration');
                      } else {
                        router.push({ pathname: '/quest-complete', params: { habit: action.habit } });
                      }
                    }}
                  >
                    <Text style={[styles.actionIcon, { backgroundColor: action.color }]}>
                      {action.icon}
                    </Text>
                    <ThemedText style={styles.actionLabel}>{action.label}</ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            
            {/* Debug: Clear Storage Button */}
            <View style={styles.debugSection}>
              <View style={styles.sectionHeader}>
                <Trash2 size={20} color="#FF3B30" />
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Debug Tools
                </ThemedText>
              </View>
              <TouchableOpacity
                style={styles.debugButton}
                onPress={handleClearStorage}
              >
                <Trash2 size={18} color="#FFFFFF" />
                <ThemedText style={styles.debugButtonText}>CLEAR STORAGE</ThemedText>
              </TouchableOpacity>
              <ThemedText style={styles.debugHint}>
                Use this to wipe persisted data and reset the app.
              </ThemedText>
            </View>

            {/* Star-Mail Notifications */}
            <View style={styles.starMail}>
              <View style={styles.starMailHeader}>
                <Mail size={20} color="#FF5722" />
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Star-Mail
                </ThemedText>
                <View style={styles.notificationBadge}>
                  <Bell size={14} color="#FFFFFF" />
                  <ThemedText style={styles.notificationCount}>2</ThemedText>
                </View>
              </View>
              
              <ScrollView 
                style={styles.messagesContainer}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((msg) => (
                  <TouchableOpacity 
                    key={msg.id} 
                    style={[
                      styles.messageItem,
                      msg.unread && styles.unreadMessage
                    ]}
                  >
                    <View style={styles.messageHeader}>
                      <ThemedText type="defaultSemiBold" style={styles.messageFrom}>
                        {msg.from}
                      </ThemedText>
                      <ThemedText style={styles.messageTime}>{msg.time}</ThemedText>
                    </View>
                    <ThemedText style={styles.messageText} numberOfLines={2}>
                      {msg.text}
                    </ThemedText>
                    {msg.unread && <View style={styles.unreadDot} />}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
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
  starBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  starCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
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
  starCanvasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  starStats: {
    flex: 1,
    gap: 8,
  },
  statText: {
    fontSize: 14,
    marginBottom: 4,
  },
  achievements: {
    backgroundColor: 'rgba(255, 215, 0, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  achievementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  achievementText: {
    fontSize: 12,
    color: '#FFD700',
  },
  questButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  questButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questButtonText: {
    flex: 1,
    marginHorizontal: 16,
  },
  questButtonTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    marginBottom: 4,
  },
  questButtonSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  quickActions: {
    backgroundColor: 'rgba(76, 175, 80, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  quickActionsTitle: {
    marginBottom: 12,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    alignItems: 'center',
    width: '23%',
  },
  actionIcon: {
    fontSize: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    textAlign: 'center',
    lineHeight: 48,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  actionLabel: {
    fontSize: 11,
    textAlign: 'center',
  },
  starMail: {
    backgroundColor: 'rgba(255, 87, 34, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  starMailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  notificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
    marginLeft: 'auto',
  },
  notificationCount: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messagesContainer: {
    maxHeight: 200,
  },
  messageItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  unreadMessage: {
    backgroundColor: 'rgba(255, 87, 34, 0.05)',
    borderColor: 'rgba(255, 87, 34, 0.2)',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageFrom: {
    fontSize: 14,
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5722',
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
  debugSection: {
    backgroundColor: 'rgba(255, 59, 48, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  debugButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 8,
  },
  debugButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  debugHint: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
