import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
import { CpButton } from '@/components';

export const ScrHome: React.FC<ScreenProps> = ({ navigation }) => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // 여기에 버튼 클릭 로직 추가
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MOAMap React Native</Text>
        <Text style={styles.subtitle}>Expo + TypeScript 환경</Text>

        <View style={styles.buttonContainer}>
          <CpButton
            title="Primary Button"
            onPress={handleButtonPress}
            variant="primary"
          />
          <CpButton
            title="Secondary Button"
            onPress={handleButtonPress}
            variant="secondary"
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