import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { CpBanner } from './cpBanner';

interface CpRollingBannerProps {
  titles: string[];
  intervalMs?: number;
  onPress?: (title: string, index: number) => void;
}

/**
 * @author 김영준
 * @date 2025-10-16
 * @description 자동으로 순환하는 롤링 배너 컴포넌트
 * - CpBanner를 상속받아 구현
 * - 페이드 + 슬라이드 애니메이션 효과
 * - 인디케이터 점으로 현재 위치 표시
 * - 자동 롤링 및 터치 이벤트 지원
 * - 3초마다 자동 전환 (커스터마이징 가능)
 */
export const CpRollingBanner: React.FC<CpRollingBannerProps> = ({
  titles,
  intervalMs = 3000,
  onPress
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (titles.length <= 1) return;

    // 251016 | 김영준 | 자동 롤링 애니메이션 인터벌 설정
    const interval = setInterval(() => {
      // 페이드 아웃 + 슬라이드 애니메이션
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -15,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // 다음 인덱스로 변경
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);

        // 위치 리셋 후 페이드 인 + 슬라이드 애니메이션
        slideAnim.setValue(15);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [titles.length, intervalMs]);

  // 251016 | 김영준 | 배너 터치 시 현재 표시 중인 제목과 인덱스를 부모 컴포넌트로 전달
  const handlePress = () => {
    if (onPress) {
      onPress(titles[currentIndex], currentIndex);
    }
  };

  if (titles.length === 0) return null;

  return (
    <CpBanner containerStyle={styles.container} onPress={handlePress}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.titleContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>New!!</Text>
          </View>
          <Text style={styles.title} numberOfLines={1}>
            {titles[currentIndex]}
          </Text>
        </Animated.View>
        {/* 251017 | 김영준 | 롤링 배너 인디케이터, 스토리보드에는 없으나 있는 게 좋을 것 같아서 남겨둠 */}
        {/* {titles.length > 1 && (
          <View style={styles.indicatorContainer}>
            {titles.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentIndex && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        )} */}
      </View>
    </CpBanner>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#5e5e5eff',
    borderWidth: 0.5,
  },
  content: {
    alignItems: 'center',
    minHeight: 20,
  },
  badgeContainer: {
    marginRight: 15,
  },
  badge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d21938ff',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#19191aff',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 2,
  },
  activeIndicator: {
    backgroundColor: '#d21938ff',
  },
});