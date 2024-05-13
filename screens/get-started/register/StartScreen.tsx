import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';

export default function StartScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RegisterStackScreenProps<'Start'>) {
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
              activate
              onPress={() => {}}
              text="시작하기"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
