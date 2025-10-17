import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '@/assets/images';

export interface CpHeaderProps {
  title?: string;
  showLogo?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  centerElement?: ReactNode;
}

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17
 * @description 앱의 상단 헤더 컴포넌트
 * - left / center / right 영역 커스터마이징 가능
 * - 기본: 중앙 로고 표시
 * - 각 화면에서 필요한 버튼/요소를 주입하여 사용
 *
 * @example
 * // 뒤로가기 + 로고 + 설정 버튼
 * <CpHeader
 *   leftElement={<IconButton icon="back" onPress={handleBack} />}
 *   rightElement={<IconButton icon="settings" onPress={handleSettings} />}
 * />
 */
export const CpHeader: React.FC<CpHeaderProps> = ({
  title = "MOAMap",
  showLogo = true,
  leftElement,
  rightElement,
  centerElement,
}) => {
  // 중앙 영역 렌더링
  const renderCenter = () => {
    if (centerElement) {
      return centerElement;
    }
    if (showLogo) {
      return <Image source={Images.logos.appLogo} style={styles.logo} resizeMode="contain" />;
    }
    if (title) {
      return <Text style={styles.title}>{title}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        {/* 왼쪽 영역 */}
        <View style={styles.sideSection}>
          {leftElement}
        </View>

        {/* 중앙 영역 */}
        <View style={styles.centerSection}>
          {renderCenter()}
        </View>

        {/* 오른쪽 영역 */}
        <View style={styles.sideSection}>
          {rightElement}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 10,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 44,
  },
  sideSection: {
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 87,
    height: 24.25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
