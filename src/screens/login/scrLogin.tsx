import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
import { CpButton, CpInputField, CpSocialButton, CpHeader, CpIconButton } from '@/components';
import { Images } from '@/assets/images';
// import { CpSignInForm } from '@/components/ui/cpSignInForm';

export const ScrLogin: React.FC<ScreenProps> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <CpHeader
        showLogo={false}
        title='로그인'
        rightElement={<CpIconButton icon={Images.icons.close} onPress={handleClose} />}
      />
      <Image source={Images.logos.appLogo} style={styles.logo} resizeMode="contain" />
      <View style={styles.content}>
        <CpInputField
          variant="email"

        />
        <CpInputField
          variant="password"
        />
        <CpButton
          title="로그인"
          onPress={() => { }}
        />
      </View>
      <View style={[styles.line]} />
      <View style={styles.content}>
        <CpSocialButton
          type="naver"
          onPress={() => { }}
        />
        <CpSocialButton
          type="kakao"
          onPress={() => { }}
        />
        <CpSocialButton
          type="google"
          onPress={() => { }}
        />
        <CpSocialButton
          type="facebook"
          onPress={() => { }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text>비밀번호 찾기</Text>
        <Text style={{ marginHorizontal: 10 }}>|</Text>
        <Text>회원가입</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#f8f9fa',
    gap: 20,
  },
  content: {
    justifyContent: 'center',
    marginHorizontal: 40,
    gap: 10
  },
  line: {
    height: 2,        // 플랫폼 최소 두께
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logo: {
    width: '40%',
    height: 100,
    alignSelf: 'center',
  }
});