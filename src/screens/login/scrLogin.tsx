import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
import { CpButton, CpInputField, CpSocialButton } from '@/components';
// import { CpSignInForm } from '@/components/ui/cpSignInForm';
import { Images } from '@/assets/images';

export const ScrLogin: React.FC<ScreenProps> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // 




  }


  const Divider = ({ inset = 0 }) => (
    <View style={[styles.line, inset ? { marginLeft: inset } : null]} />
  );


  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.content}>
        <Image source={Images.logos.appLogo} style={styles.logo} resizeMode="contain" />;
      </View> */}
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
      <Divider inset={10} />
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
      <View style={styles.content}>
        <Text>비밀번호 찾기</Text>
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
  line: {
    height: 2,        // 플랫폼 최소 두께
    backgroundColor: '#e5e5e5',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});