import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types';
import { CpButton, CpHeader, CpInputField, CpIconButton } from '@/components';
import Images from '@/assets/images';

export const ScrFindPassword: React.FC<ScreenProps> = ({ navigation }) => {

  const [tab, setTab] = useState(0);

  const handleClose = () => {
    navigation.goBack();
  };


  const findPassword = () => {

    return (
      <View style={styles.content}>
        <CpInputField
          label="이메일"
          placeholder='example@modoomap.com'
          variant="email"
        />

        <CpButton
          title="비밀번호 재설정"
          onPress={() => setTab(1)}
          disabled={false}
        />
      </View>
    )
  }

  const completeFindPassword = () => {
    return (
      <View style={styles.content}>
        <Image source={Images.icons.check_circle} style={styles.icon} />
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>비밀번호 재설정 메일 발송 완료</Text>
        <Text style={{ textAlign: 'center' }}>메일을 확인해주세요</Text>
        {/* <CpButton
          title="비밀번호 재설정 화면으로 가기"
          onPress={() => setTab(0)}
          disabled={false}
        /> */}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <CpHeader
        showLogo={false}
        title='비밀번호 찾기'
        rightElement={<CpIconButton icon={Images.icons.close} onPress={handleClose} />}
      />
      {tab === 0 ? findPassword() : completeFindPassword()}
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
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    gap: 10,
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: 20,
    alignSelf: 'center',
  },
});