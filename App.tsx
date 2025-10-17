import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { RootNavigator } from '@/navigation';

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17 | React Navigation 네비게이션 적용
 * @description 앱의 루트 컴포넌트
 * - SafeAreaProvider로 노치 영역 대응
 * - RootNavigator로 화면 라우팅 관리
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
