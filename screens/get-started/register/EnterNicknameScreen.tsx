import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import type { RegisterStackScreenProps } from '../../../navigation/types';

export default function EnterNicknameScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RegisterStackScreenProps<'EnterNickname'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-slate-500 flex justify-center items-center">
        <Text className="text-5xl text-white">EnterNicknameScreen</Text>
      </View>
    </SafeAreaView>
  );
}
