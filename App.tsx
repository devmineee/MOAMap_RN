import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ScrFindPassword, ScrHome, ScrLogin } from '@/screens';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrHome navigation={null} route={null} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
