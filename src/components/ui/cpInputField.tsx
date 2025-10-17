import React, { useMemo, useState, forwardRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';

type Variant = 'default' | 'email' | 'password' | 'search';

interface InputFieldProps extends Omit<TextInputProps, 'secureTextEntry'> {
  label?: string;
  errorText?: string;
  helperText?: string;
  variant?: Variant;
  /** password 전용: 우측에서 보기/숨기기 토글 제공 */
  showPasswordToggle?: boolean;
  /** 좌/우 커스텀 요소 (아이콘 등) */
  renderLeft?: React.ReactNode;
  renderRight?: React.ReactNode;
  /** 컨테이너/입력창 커스텀 스타일 */
  containerStyle?: object;
  inputStyle?: object;
}

/** 용도별 기본 프리셋 */
const PRESETS: Record<Variant, Partial<TextInputProps>> = {
  default: {
    autoCapitalize: 'sentences',
  },
  email: {
    placeholder: '이메일 아이디',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    autoCorrect: false,
    textContentType: 'emailAddress',
    inputMode: 'email',
    returnKeyType: 'next',
  },
  password: {
    placeholder: '비밀번호',
    autoCapitalize: 'none',
    textContentType: 'password',
    returnKeyType: 'done',
  },
  search: {
    placeholder: '검색어를 입력하세요',
    autoCapitalize: 'none',
    autoCorrect: false,
    returnKeyType: 'search',
  },
};

/**
 * @author 김성민
 * @date 2025-10-16
 * @update 
 * @description 인풋 필드 컴포넌트
 */
export const CpInputField = forwardRef<TextInput, InputFieldProps>(function InputField(
  {
    label,
    errorText,
    helperText,
    variant = 'default',
    showPasswordToggle = true,
    renderLeft,
    renderRight,
    containerStyle,
    inputStyle,
    style, // TextInputProps의 style도 받을 수 있으니 병합
    ...rest
  },
  ref
) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // variant에 따른 기본값 + 외부에서 들어온 프롭스 병합
  const mergedProps = useMemo(() => {
    const base = PRESETS[variant] ?? {};
    return { ...base, ...rest } as TextInputProps;
  }, [variant, rest]);

  const isPassword = variant === 'password';

  const rightControl = useMemo(() => {
    // 우측 커스텀 요소가 있으면 우선
    if (renderRight) return renderRight;

    return null;
  }, [isPassword]);

  return (
    <View style={[s.container, containerStyle]}>
      {!!label && <Text style={s.label}>{label}</Text>}

      <View style={[s.inputWrap, errorText ? s.inputWrapError : null]}>
        {!!renderLeft && <View style={s.side}>{renderLeft}</View>}

        <TextInput
          ref={ref}
          style={[s.input, inputStyle, style]}
          placeholderTextColor="#999"
          clearButtonMode={variant === 'search' ? 'while-editing' : 'never'}
          secureTextEntry={isPassword && !passwordVisible}
          {...mergedProps}
        />

        {!!rightControl && <View style={s.side}>{rightControl}</View>}
      </View>

      {!!helperText && !errorText && <Text style={s.helper}>{helperText}</Text>}
      {!!errorText && <Text style={s.error}>{errorText}</Text>}
    </View>
  );
});

const s = StyleSheet.create({
  container: { width: '100%' },
  label: { marginBottom: 6, color: '#333', fontWeight: '600' },
  inputWrap: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapError: { borderColor: '#ff5a5a' },
  input: {
    flex: 1,
    paddingVertical: Platform.select({ ios: 12, android: 8 }),
    fontSize: 16,
    color: '#222',
  },
  helper: { marginTop: 6, fontSize: 12, color: '#666' },
  error: { marginTop: 6, fontSize: 12, color: '#ff4d4f' },
  side: { marginHorizontal: 4, justifyContent: 'center', alignItems: 'center' },
  sideBtn: { paddingVertical: 6, paddingHorizontal: 8, borderRadius: 6, backgroundColor: '#eee' },
  sideBtnText: { fontSize: 12, color: '#333' },
});