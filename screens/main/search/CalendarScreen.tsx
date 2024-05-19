import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import Calendar from '../../../components/search-page/Calendar';

export default function CalendarScreen({
  route,
  navigation,
}: SearchStackScreenProps<'Calendar'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-white flex items-center">
        <View className="flex flex-row h-auto w-10/12 justify-between">
          <Text className="font-inter-sm text-sm text-black">일</Text>
          <Text className="font-inter-sm text-sm text-black">월</Text>
          <Text className="font-inter-sm text-sm text-black">화</Text>
          <Text className="font-inter-sm text-sm text-black">수</Text>
          <Text className="font-inter-sm text-sm text-black">목</Text>
          <Text className="font-inter-sm text-sm text-black">금</Text>
          <Text className="font-inter-sm text-sm text-black">토</Text>
        </View>
        <View className="flex w-11/12 py-1 border-b border-gray-1/100" />
        <View className="flex w-11/12 h-full bg-white">
          <Calendar />
        </View>
      </View>
    </SafeAreaView>
  );
}