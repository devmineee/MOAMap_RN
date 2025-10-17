import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { CpButton } from '@/components';

type Props = NativeStackScreenProps<RootStackParamList, 'Test'>;

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 테스트용 네비게이션 화면
 * - 모든 화면으로 빠르게 이동할 수 있는 테스트 화면
 * - 개발 단계에서 화면 간 이동을 쉽게 테스트하기 위한 용도
 */
export const ScrTest: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>화면 네비게이션 테스트</Text>
        <Text style={styles.subtitle}>테스트할 화면을 선택하세요</Text>

        <View style={styles.buttonContainer}>
          <CpButton
            title="홈 (Home)"
            onPress={() => navigation.navigate('Home')}
          />

          <CpButton
            title="로그인 (Login)"
            onPress={() => navigation.navigate('Login')}
          />

          <CpButton
            title="회원가입 (SignUp)"
            onPress={() => navigation.navigate('SignUp')}
          />

          <CpButton
            title="비밀번호 찾기 (FindPassword)"
            onPress={() => navigation.navigate('FindPassword')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 15,
  },
});
