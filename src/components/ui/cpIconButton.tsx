import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, Image, ImageSourcePropType } from 'react-native';

export interface CpIconButtonProps {
  /** 아이콘 이미지 소스 (Images.icons.xxx 형태로 전달) */
  icon: ImageSourcePropType;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 간단한 아이콘 버튼 컴포넌트
 * - 헤더나 다른 UI 요소에서 사용
 * - 이미지 리소스를 아이콘으로 사용
 *
 * @example
 * import { Images } from '@/assets/images';
 * <CpIconButton icon={Images.icons.notification} onPress={handleNotification} />
 * <CpIconButton icon={Images.icons.search} onPress={handleSearch} />
 */
export const CpIconButton: React.FC<CpIconButtonProps> = ({
  icon,
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.6}
    >
      <Image
        source={icon}
        style={[styles.iconImage, disabled && styles.iconDisabled]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  iconDisabled: {
    opacity: 0.3,
  },
});
