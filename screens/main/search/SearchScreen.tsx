import React from 'react';
import { SafeAreaView, StatusBar, View, Text, TextInput } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import SearchIcon from '../../../assets/images/icon_search.svg';
import CalendarIcon from '../../../assets/images/icon_calendar.svg';

export default function SearchScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: SearchStackScreenProps<'Search'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-white flex justify-center items-center">
        <View className="flex w-11/12 h-full">
          <View className="flex w-full h-1/4 justify-end">
            <View className="flex w-full h-4/6  items-center justify-center">
              <View className="flex flex-row w-full h-1/3 mb-1 bg-white border-2 border-gray-1/100 rounded-lg">
                <View className="flex ml-2 w-auto h-full justify-center">
                  <SearchIcon width={26} height={27} />
                </View>
                <View className="flex w-3/4 h-full mt-1 justify-center">
                  <TextInput
                    className="font-inter-m text-lg text-gray-1"
                    placeholder="지역, 게스트하우스 이름"
                  />
                </View>
              </View>
              <View className="flex flex-row w-full h-1/3 mt-1 bg-white border-2 border-gray-1/100 rounded-lg">
                <View className="flex ml-2 w-auto h-full justify-center">
                  <CalendarIcon width={26} height={27} />
                </View>
                <View className="flex w-3/4 h-full mt-1 justify-center">
                  <TextInput
                    className="font-inter-m text-lg text-gray-1"
                    placeholder="날짜 선택"
                  />
                </View>
              </View>
            </View>
            <View className="flex w-full h-1/6">
              <Text className="font-inter-b text-xl text-black">
                제주도 여행지
              </Text>
            </View>
          </View>
          <View className="flex w-full h-full bg-slate-300">
            <View className="flex w-full h-3/6 bg-blue-200">
              <View className="flex w-full h-1/6 bg-pink-300"></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
