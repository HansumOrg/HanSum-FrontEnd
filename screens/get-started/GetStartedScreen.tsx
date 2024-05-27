import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { GetStartedStackScreenProps } from '../../navigation/types';
import RectButton from '../../components/common/RectButton';

export default function GetStartedScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: GetStartedStackScreenProps<'GetStarted'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className=" h-4/5 bg-white items-center justify-center ">
          <View className="h-1/4 bg-gray-2 w-2/4" />
          <View className=" bg-white items-center mt-6">
            <Text>“한 숨”을 통해</Text>
            <Text> 새로운 사람들과 소중한 만남을 시작해보세요!!</Text>
          </View>
        </View>

        <View className="h-1/5  flex">
          <View className="h-2/3 mt-2">
            <RectButton
              className="bg-gray-400"
              isActivate
              onPress={() => navigation.navigate('RegisterNavigator')}
              text="시작하기"
            />
            <View className="h-1/2 flex justify-center items-start  flex-row mt-2">
              <Text className="text-black text-xs">이미 계정이 있나요?</Text>
              <Pressable onPress={() => navigation.navigate('LoginNavigator')}>
                <Text className=" text-gray-2 ml-1">로그인</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
