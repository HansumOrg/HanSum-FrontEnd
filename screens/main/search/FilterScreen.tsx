import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import CheckIcon from '../../../assets/images/icon_checkbox.svg';

export default function FilterScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: SearchStackScreenProps<'Filter'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="w-screen h-screen bg-white flex justify-center items-center">
        <View className="flex w-10/12 h-full bg-blue-200">
          <View className="flex w-full h-1/5  items-center justify-end bg-pink-300">
            <View className="flex flex-col w-full h-2/3 bg-blue-300">
              <View className="flex flex-row w-full h-1/3 bg-green-200 justify-between">
                <Text className="font-inter-sb text-xl text-black">분위기</Text>
              </View>
              <View className="flex flex-row w-full h-1/3 bg-green-300 justify-between">
                <View className="flex flex-row w-1/2 h-full bg-blue-300 items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black px-1">
                    액티비티가 다양한
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
                <View className="flex flex-row w-1/2 h-full bg-blue-300 items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black px-1">
                    힐링하기 좋은
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
              </View>
              <View className="flex flex-row w-full h-1/3 bg-green-400 justify-between">
                <View className="flex flex-row w-1/2 h-full bg-blue-300 items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black px-1">
                    활기 넘치는
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
                <View className="flex flex-row w-1/2 h-full bg-blue-300 items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black px-1">
                    여유로운
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
              </View>
            </View>
          </View>
          <View className="flex w-full h-2/5 bg-pink-400"></View>
          <View className="flex w-full h-2/5 bg-pink-500"></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
