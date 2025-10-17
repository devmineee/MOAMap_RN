import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { CpBanner } from '@/components';
import { Images } from '@/assets/images';

interface CpProBannerProps {
  onPress?: () => void;
}

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17
 * @description 모두의지도 PRO 구독을 홍보하는 배너 컴포넌트
 * - CpBanner를 상속받아 구현
 * - 파란색과 자주색이 변화하는 보더 애니메이션 (네이티브 모듈 없이 구현)
 * - 월 구독료와 혜택 정보 표시
 * - 터치 시 PRO 구독 페이지로 이동 가능
 */
export const CpProBanner: React.FC<CpProBannerProps> = ({ onPress }) => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  // 251017 | 김영준 | Border 색상 변화 애니메이션
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnim]);

  const borderColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#0088FE', '#FF0040', '#0088FE'],
  });
  return (
    <View style={styles.wrapper}>
      {/* 251017 | 김영준 | 애니메이션 보더 */}
      <Animated.View
        style={[
          styles.animatedBorder,
          {
            borderColor: borderColor,
          },
        ]}
      >
        <CpBanner containerStyle={styles.container} onPress={onPress}>
          <View style={styles.content}>
            <View style={styles.textSection}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>모두의지도 PRO</Text>
                <Image
                  source={Images.icons.premium}
                  style={styles.titleIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.subtitle}>
                월 20,000원으로 대용량 데이터를 더욱 빠르게!
              </Text>
            </View>
            <Image
              source={Images.icons.simpleLogo}
              style={styles.simpleLogo}
              resizeMode="contain"
            />
          </View>
        </CpBanner>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  },
  animatedBorder: {
    borderRadius: 12,
    borderWidth: 1.5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    margin: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    flex: 1,

  },
  titleSection: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0088FE',
    marginBottom: 5,
  },
  titleIcon: {
    margin: 5,
    width: 13,
    height: 17
  },
  subtitle: {
    fontSize: 12,
    color: '#0088FE',
    lineHeight: 18,
  },
  simpleLogo: {
    marginLeft: 5,
    width: 42,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});