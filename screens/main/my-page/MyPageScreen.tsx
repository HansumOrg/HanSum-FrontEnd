import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import NoticeIcon from '../../../assets/images/icon_notice.svg';
import MoreIcon from '../../../assets/images/icon_more.svg';
import { BoxShadow } from 'react-native-shadow';

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const shadowOpt = (width: number, height: number) => ({
    width,
    height,
    color: '#000',
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
  });
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen flex items-center bg-white">
        <View className="flex flex-row w-11/12 h-auto justify-between items-center py-2">
          <Text className="font-inter-b w-5/6 text-xl text-black">
            마이페이지
          </Text>
          <Pressable>
            <NoticeIcon width={29} height={29} />
          </Pressable>
        </View>
        <View className="flex flex-col w-11/12 h-1/3">
          <View className="flex flex-row w-auto h-1/4 justify-between items-end">
            <View className="flex flex-col h-full justify-end">
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
          <View className="flex flex-col w-full h-full">
            <View className="flex flex-row w-full h-1/5 justify-between items-end">
              <Text className="font-inter-m text-md text-black">고객센터</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">문의사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">공지사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">로그아웃</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
          </View>
        </View>
        <View className="flex flex-col w-11/12 h-3/6">
          <View className="flex h-1/6 justify-end">
            <Text className="font-inter-b text-lg text-black">내 예약</Text>
          </View>
          <View className="flex w-full h-full">
            <ScrollView>
              <View className="flex h-full items-center">
                <View
                  style={{
                    shadowColor: '#000',
                  }}
                  className="bg-white w-auto m-5 rounded-sm shadow-md"
                >
                  <Text>글입니다.</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
