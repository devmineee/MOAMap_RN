import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CpSignInFormProps {
  // 추가적인 props가 필요하면 여기에 정의
}

/**
 * @author 김성민
 * @date 2025-10-16
 * @update 
 * @description 
 */
export const CpSignInForm = ({
  //   title,
  //   onPress,
  //   variant = 'primary',
  //   disabled = false
}) => {
  return (
    <TouchableOpacity
    //   style={[
    //     styles.button,
    //     styles[variant],
    //     disabled && styles.disabled
    //   ]}
    //   onPress={onPress}
    //   disabled={disabled}
    >
      {/* <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text> */}
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
  },
  primary: {
    backgroundColor: '#0088FE',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0088FE',
  },
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
});