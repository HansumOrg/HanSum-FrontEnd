import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import NoticeIcon from '../../../assets/images/icon_notice.svg';
import MoreIcon from '../../../assets/images/icon_more.svg';

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen flex items-center">
        <View className="flex flex-row w-11/12 h-auto justify-between items-center py-2">
          <Text className="font-inter-b w-5/6 text-2xl text-black">
            마이페이지
          </Text>
          <Pressable>
            <NoticeIcon width={29} height={29} />
          </Pressable>
        </View>
        <View className="flex flex-col w-11/12 h-2/6 ">
          <View className="flex flex-row w-auto h-1/5 justify-between items-center">
            <View className="flex flex-col h-full">
              <Text className="font-inter-b text-md text-black">이한이</Text>
              <Text className="font-inter-m text-sm text-black/[.5]">
                Show profile
              </Text>
            </View>
            <Pressable className="px-1">
              <MoreIcon width={29} height={29} />
            </Pressable>
          </View>
          <View className="flex border-b" />
          <View className="flex flex-col w-full h-full bg-green-500">
            <Text className="font-inter-m text-md">고객센터</Text>
            <Text className="font-inter-m text-md">문의사항</Text>
            <Text className="font-inter-m text-md">공지사항</Text>
            <Text className="font-inter-m text-md">로그아웃</Text>
          </View>
        </View>
        <View className="flex flex-row bg-blue-300 w-11/12 h-3/6"></View>
      </View>
    </SafeAreaView>
  );
}
