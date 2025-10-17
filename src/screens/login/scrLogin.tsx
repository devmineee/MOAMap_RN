import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { CpHeader, CpButton, CpInputField, CpSocialButton, CpIconButton } from '@/components';
import { Images } from '@/assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

/**
 * @author 김성민
 * @date 2025-10-16
 * @update 2025-10-17 | 김영준 | React Navigation 연동
 * @description 로그인 화면
 * - 이메일/비밀번호 로그인
 * - 소셜 로그인 (네이버, 카카오, 구글, 페이스북)
 * - 회원가입 및 비밀번호 찾기 화면으로 이동
 */
export const ScrLogin: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    // 




  }

  const handleClose = () => {
    navigation.goBack();
  };

  const Divider = ({ inset = 0 }) => (
    <View style={[styles.line, inset ? { marginLeft: inset } : null]} />
  );


  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <CpHeader
        showLogo={false}
        title='로그인'
        rightElement={<CpIconButton icon={Images.icons.close} onPress={handleClose} />}
      />
      {/* <View style={styles.content}>
        <Image source={Images.logos.appLogo} style={styles.logo} resizeMode="contain" />;
      </View> */}
      <View style={styles.content}>
        <CpInputField
          variant="email"
          value={email}
          onChangeText={setEmail}
        />
        <CpInputField
          variant="password"
          value={password}
          onChangeText={setPassword}
        />
        <CpButton
          title="로그인"
          onPress={handleLogin}
        />
      </View>
      <Divider inset={10} />
      <View style={styles.content}>
        <CpSocialButton
          type="naver"
          onPress={() => console.log('Naver login')}
        />
        <CpSocialButton
          type="kakao"
          onPress={() => console.log('Kakao login')}
        />
        <CpSocialButton
          type="google"
          onPress={() => console.log('Google login')}
        />
        <CpSocialButton
          type="facebook"
          onPress={() => console.log('Facebook login')}
        />
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.linkText}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <Text style={styles.dividerText}>|</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.linkText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
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
    height: 2,
    backgroundColor: '#e5e5e5',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#0088FE',
    fontWeight: '500',
  },
  dividerText: {
    fontSize: 14,
    color: '#ccc',
  },
});