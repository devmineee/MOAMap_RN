import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { Images } from '@/assets/images';
import {
  CpHeader,
  CpMainContent,
  CpNavigationBar,
  CpRollingBanner,
  CpProBanner,
  CpIconButton
} from '@/components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17 | React Navigation 연동, 로그인 화면 네비게이션 추가
 * @description 앱의 메인 홈 스크린 컴포넌트
 * - SafeAreaView로 노치 영역 대응
 * - 세로 스크롤 지원
 */
export const ScrHome: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');

  // 251016 | 김영준 | 롤링 배너 목록 (샘플 데이터)
  const rollingTitles = [
    '전국 여름 페스티벌 지도',
    '서울 핫플레이스 맛집 지도',
    '부산 카페 투어 지도',
    '제주도 숨은 명소 지도',
    '전국 드라이브 코스 지도'
  ];

  // 251017 | 김영준 | 로그인 화면 네비게이션 헬퍼
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  // 251017 | 김영준 | 하단 탭 네비게이션 핸들러
  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    console.log('Tab pressed:', tabId);

    // 251017 | 김영준 | 즐겨찾기 또는 마이페이지 탭 클릭 시 로그인 화면으로 이동
    // TODO: 로그인 완료 상태일 때 조건 분기 처리 필요
    if (tabId === 'bookmarks' || tabId === 'profile') {
      navigateToLogin();
    }
  };

  // 251016 | 김영준 | 롤링 배너 터치 핸들러
  const handleRollingBannerPress = (title: string, index: number) => {
    console.log('Rolling banner pressed:', title, index);
  };

  // 251017 | 김영준 | PRO 배너 터치 핸들러 - 로그인 화면으로 이동
  // TODO: 로그인 완료 상태일 때 조건 분기 처리 필요
  const handleProBannerPress = () => {
    console.log('Pro banner pressed - navigating to login');
    navigateToLogin();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <CpHeader
        showLogo={true}
        leftElement={<CpIconButton icon={Images.icons.notification} />}
      />

      {/* 메인 콘텐츠 - 스크롤 가능한 컨테이너 */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          {/* 롤링 배너 */}
          <CpRollingBanner
            titles={rollingTitles}
            intervalMs={3000}
            onPress={handleRollingBannerPress}
          />

          {/* PRO 배너 */}
          <CpProBanner onPress={handleProBannerPress} />

          {/* 메인 콘텐츠 */}
          <CpMainContent onJoinMapPress={navigateToLogin} />
        </View>
      </ScrollView>

      {/* 하단 네비게이션 */}
      <CpNavigationBar
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
  },
  contentWrapper: {
    marginVertical: 20,
    gap: 15,
    paddingBottom: 20,
  },
});