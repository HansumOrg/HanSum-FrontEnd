import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';

export default function EnterPersonalInformationScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: RegisterStackScreenProps<'EnterPersonalInformation'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Text>사용자의 성별을 선택해주세요.</Text>
          </View>
          <View className="flex-row bg-white h-1/3 divide-x-8 divide-white">
            <View className="h-full w-1/2 bg-red-400">
              <Pressable className="flex rounded-xl border-2 border-gray-2 justify-center items-center h-3/5 mt-3 bg-white ">
                <Text>여자</Text>
              </Pressable>
            </View>

            <View className=" h-full w-1/2 bg-blue-400">
              <Pressable className="flex rounded-xl border-2 border-gray-2 justify-center items-center h-3/5 mt-3 bg-white ">
                <Text>남자</Text>
              </Pressable>
            </View>
          </View>
          <View className=" bg-white h-1/3 justify-center">
            <Text>사용자의 생일을 선택해주세요.</Text>
          </View>
          <View className="flex-row bg-red-50 h-2/3 " />
          <View className="bg-white h-1/3 mt-2 ">
            <RectButton
              activate
              onPress={() => {
                navigation.navigate('EnterNickname');
              }}
              text="선택완료"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
