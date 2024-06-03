import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import logo from '../../../assets/images/logo.png';

export default function StartScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RegisterStackScreenProps<'Start'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className=" h-4/5 bg-white items-center justify-center ">
          <View className="w-2/4 aspect-square">
            <Image
              className="w-full h-full"
              source={logo as ImageSourcePropType}
            />
          </View>
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
              onPress={() => {}}
              text="시작하기"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
