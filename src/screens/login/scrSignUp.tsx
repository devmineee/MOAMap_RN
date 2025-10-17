import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
import { CpButton, CpHeader, CpIconButton, CpInputField } from '@/components';
import { Images } from '../../assets/images';

export const ScrSignUp: React.FC<ScreenProps> = ({ navigation }) => {


  const FIELDS = useMemo(
    () => [
      { key: 'email', label: '이메일', placeholder: 'example@modoomap.com', variant: 'email' as const },
      { key: 'password', label: '비밀번호', placeholder: '영·숫자를 포함하여 8자 이상 16자 이하로 입력', variant: 'password' as const },
      { key: 'passwordConfirm', label: '비밀번호 확인', placeholder: '비밀번호를 한 번 더 입력', variant: 'password' as const },
      { key: 'nickname', label: '별명', variant: 'default' as const },
      { key: 'gender', label: '성별', variant: 'default' as const },
      { key: 'birthday', label: '생년월일', placeholder: '20000101', variant: 'default' as const },
    ],
    []
  );

  const [visibleCount, setVisibleCount] = useState(1);

  const allShown = visibleCount >= FIELDS.length;

  const handleNext = () => {
    if (!allShown) {
      setVisibleCount((c) => Math.min(c + 1, FIELDS.length));
      return;
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <CpHeader
        showLogo={false}
        title='회원가입'
        rightElement={<CpIconButton icon={Images.icons.close} onPress={handleClose} />}
      />
      <View style={styles.content}>
        {FIELDS.slice(0, visibleCount).map((f) => (
          <CpInputField
            key={f.key}
            label={f.label}
            placeholder={f.placeholder}
            variant={f.variant}
          />
        ))}
      </View>

      <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, paddingBottom: 20 }}>
        <CpButton
          title={allShown ? '완료' : '다음'}
          onPress={handleNext}
          disabled={false}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { flexDirection: 'column', padding: 20, gap: 10 },
});