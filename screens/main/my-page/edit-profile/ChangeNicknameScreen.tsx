import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';

export default function ChangeNicknameScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: EditProfileStackScreenProps<'ChangeNickname'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-slate-500 flex justify-center items-center">
        <Text className="text-5xl text-white">ChangeNicknameScreen</Text>
      </View>
    </SafeAreaView>
  );
}
