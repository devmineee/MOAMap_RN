import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Images } from '@/assets/images';

interface SocialButtonConfig {
  icon: ImageSourcePropType;
  text: string;
}

interface CpSocialButtonProps {
  onPress: () => void;
  type: 'naver' | 'kakao' | 'google' | 'facebook';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const socialConfigs: Record<string, SocialButtonConfig> = {
  kakao: {
    icon: Images.icons.kakao,
    text: '카카오톡으로 계속하기',
  },
  naver: {
    icon: Images.icons.naver,
    text: '네이버로 계속하기',
  },
  google: {
    icon: Images.icons.google,
    text: '구글으로 계속하기',
  },
  facebook: {
    icon: Images.icons.facebook,
    text: '페이스북으로 계속하기',
  },
};

/**
 * @author 김성민
 * @date 2025-10-17
 * @update 2025-10-17
 * @description 재사용 가능한 소셜 버튼
 * - primary/secondary 스타일 변형 지원
 * - 비활성화 상태 지원
 * - 터치 피드백 제공
 * - 중앙화된 이미지 관리 사용
 */
export const CpSocialButton: React.FC<CpSocialButtonProps> = ({
  onPress,
  type,
  disabled = false
}) => {
  const config = socialConfigs[type];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[type],
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        source={config.icon}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text>{config.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  icon: { width: 18, height: 18, resizeMode: 'contain' }, // 크기 꼭 지정!
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#0088FE',
  },
  kakao: {
    backgroundColor: '#FEE500',
  },
  naver: {
    backgroundColor: '#03C75A',
  },
  google: { backgroundColor: '#FFFFFF' },
  facebook: {
    backgroundColor: '#1877F2',
  },
});