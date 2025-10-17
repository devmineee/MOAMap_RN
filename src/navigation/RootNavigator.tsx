

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { ScrTest, ScrHome, ScrLogin, ScrFindPassword, ScrSignUp } from '@/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 앱의 루트 네비게이션 컨테이너
 * - React Navigation Stack Navigator 사용
 * - TODO: 로그인 여부에 따른 화면 분기
 * - 현재는 모든 화면을 Stack으로 관리
 * - 향후 인증 상태에 따라 스크린 조건부 렌더링 추가 예정
 */
export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
        screenOptions={{
          headerShown: false, // 모든 스크린에서 기본 헤더 숨김
          animation: 'fade',
        }}
      >
        {/* 테스트 스크린 - 테스트 페이지 */}
        <Stack.Screen
          name="Test"
          component={ScrTest}
          options={{
            title: '테스트',
          }}
        />

        {/* 홈 스크린 - 랜딩 페이지 */}
        <Stack.Screen
          name="Home"
          component={ScrHome}
          options={{
            title: '홈',
          }}
        />

        {/* 로그인 관련 스크린들 */}
        <Stack.Screen
          name="Login"
          component={ScrLogin}
          options={{
            title: '로그인',
          }}
        />

        {/* 회원가입 관련 스크린들 */}
        <Stack.Screen
          name="SignUp"
          component={ScrSignUp}
          options={{
            title: '회원가입',
          }}
        />

        {/* 비밀번호 찾기 관련 스크린들 */}
        <Stack.Screen
          name="FindPassword"
          component={ScrFindPassword}
          options={{
            title: '비밀번호 찾기',
          }}
        />

        {/* 향후 추가될 로그인 후 스크린들 */}
        {/*
        <Stack.Screen name="PublicMap" component={ScrPublicMap} />
        <Stack.Screen name="CreateMap" component={ScrCreateMap} />
        <Stack.Screen name="Bookmarks" component={ScrBookmarks} />
        <Stack.Screen name="Profile" component={ScrProfile} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
