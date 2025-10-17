import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
// import { CpSignInForm } from '@/components/ui/cpSignInForm';
import { CpButton, CpInputField, CpSocialButton } from '@/components';

export const ScrFindPassword: React.FC<ScreenProps> = ({ navigation }) => {

  const findPassword = () => {
    return (
      <View>
        <CpInputField
          label="이메일"
          placeholder='example@modoomap.com'
          variant="email"
        />

        <CpButton
          title="비밀번호 재설정"
          onPress={() => { }}
          disabled={false}
        />
      </View>
    )
  }

  const completeFindPassword = () => {
    return (
      <View>
        <Text>비밀번호 재설정 메일 발송 완료</Text>
        <Text>메일을 확인해주세요</Text>
      </View>
    )
  }





  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {completeFindPassword()}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 15,
    width: '100%',
    maxWidth: 300,
  },
});