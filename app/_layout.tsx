import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, useColorScheme } from 'react-native';
import 'react-native-reanimated';

// 📍 DIRECT PATHS
import { OnboardingFlow } from '../src/components/OnboardingFlow';
import { useUserStore } from '../src/store/useUserStore';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // 🧠 Check the Store
  const childName = useUserStore((state) => state.childName);
  const hasHydrated = useUserStore((state) => state._hasHydrated);
  const hydrationError = useUserStore((state) => state._hydrationError);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (hasHydrated || hydrationError) {
      // Small delay to avoid flicker
      const timer = setTimeout(() => setShowLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [hasHydrated, hydrationError]);

  // 🛡️ Loading screen while hydrating
  if (showLoading) {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={{ marginTop: 12, fontSize: 16, color: '#666' }}>
            Loading your stickers...
          </Text>
        </View>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

  // 🛡️ Hydration error screen
  if (hydrationError) {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF3B30', marginBottom: 12 }}>
            Storage Error
          </Text>
          <Text style={{ fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 24 }}>
            {hydrationError}
          </Text>
          <Text style={{ fontSize: 12, color: '#999', textAlign: 'center' }}>
            Try restarting the app. If the problem persists, use the "Clear Storage" button in the Hub.
          </Text>
        </View>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

  // 🛡️ THE MAGIC GATE
  if (childName === '') {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <OnboardingFlow onComplete={() => {}} />
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}