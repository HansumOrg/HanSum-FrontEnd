import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen flex items-center justify-center bg-white">
        <Pressable className="flex w-full h-full" onPress={() => navigation.navigate('EditProfileNavigator')}>
          <View className="flex w-full h-1/5 items-center bg-slate-500 justify-center">
            <Text>EditPage</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
