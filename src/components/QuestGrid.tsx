import { ThemedText } from '@/components/themed-text';
import { useUserStore } from '@/src/store/useUserStore';
import { useRouter } from 'expo-router';
import { ChevronRight, Target, Trash2 } from 'lucide-react-native';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface QuestGridProps {
  /** Whether to show debug tools */
  showDebug?: boolean;
}

/**
 * QuestGrid - Contains the main quest button, quick actions grid,
 * and optional debug tools.
 */
export default function QuestGrid({ showDebug = true }: QuestGridProps) {
  const router = useRouter();
  const { activeHabit, stars } = useUserStore();

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
            // Try to reload the app
            try {
              // Fallback: reset navigation
              router.replace('/');
            } catch {
              // If navigation fails, try to reload the app state
              router.replace('/');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
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

      {/* Debug Section (optional) */}
      {showDebug && (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
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
  debugSection: {
    backgroundColor: 'rgba(255, 59, 48, 0.05)',
    borderRadius: 16,
    padding: 16,
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