import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface CpBannerProps {
  containerStyle?: ViewStyle;
  onPress?: () => void;
  children: React.ReactNode;
}

/**
 * @author 김영준
 * @date 2025-10-16
 * @description 모든 배너 컴포넌트의 기본이 되는 베이스 배너 컴포넌트
 * - 터치 이벤트 처리 가능
 * - 자식 컴포넌트를 렌더링하는 컨테이너 역할
 */
export const CpBanner: React.FC<CpBannerProps> = ({
  containerStyle,
  onPress,
  children
}) => {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
  },
});