import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import BackIcon from '../../../../assets/images/icon_goback.svg';
import InterestIcon from '../../../../assets/images/icon_addInterest.svg';

export default function EditProfileScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: EditProfileStackScreenProps<'EditProfile'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-full">
          <View className="flex flex-col w-full h-1/4 ">
            <View className="flex w-full h-1/3 justify-center ">
              <Pressable onPress={() => navigation.goBack()}>
                <BackIcon
                  style={{ transform: [{ scaleX: -1 }] }}
                  width={38}
                  height={32}
                />
              </Pressable>
            </View>
            <View className="flex w-full h-1/4 justify-end my-1 px-2">
              <Text className="font-inter-m text-lg py-1 text-black/[.5]">
                닉네임
              </Text>
              <View className="flex flex-row w-1/2 justify-between items-cente">
                <Text className="font-inter-sb text-xl text-black">이한이</Text>
                <Pressable
                  onPress={() => navigation.navigate('ChangeNickname')}
                >
                  <Text className="font-inter-m text-sm text-black underline">
                    수정
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/4 justify-end px-2">
              <Text className="font-inter-m text-lg py-1 text-black/[.5]">
                MBTI
              </Text>
              <View className="flex flex-row w-1/2 justify-between items-center">
                <View className="flex border-2 border-mbti-green/100 w-2/5 h-auto rounded-2xl items-center">
                  <Text className="font-inter-sb text-lg text-black">INFP</Text>
                </View>
                <Pressable>
                  <Text className="font-inter-m text-sm text-black underline">
                    수정
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="flex flex-col h-2/5 w-full px-2">
            <View className="flex w-full h-1/3 py-1">
              <Text className="font-inter-m text-md text-black/[.5]">
                관심사 (최대 3개)
              </Text>
              <Text className="font-inter-sb text-lg py-1 text-black">
                제주 여행지
              </Text>
              <Text className="font-inter-sb text-sm text-black/[.5]">
                주황색 수정 버튼을 눌러 관심사를 추가해주세요!
              </Text>
              <Pressable
                className="py-1"
                onPress={() => navigation.navigate('AddInterest')}
              >
                <InterestIcon width={25} height={25} />
              </Pressable>
            </View>
            <View className="flex w-full h-1/3">
              <Text className="font-inter-sb text-lg py-1 text-black">
                취미
              </Text>
              <Text className="font-inter-sb text-sm text-black/[.5]">
                주황색 수정 버튼을 눌러 관심사를 추가해주세요!
              </Text>
              <Pressable
                className="py-1"
                onPress={() => navigation.navigate('AddInterest')}
              >
                <InterestIcon width={25} height={25} />
              </Pressable>
            </View>
            <View className="flex w-full h-1/3">
              <Text className="font-inter-sb text-lg py-1 text-black">
                좋아하는 음식
              </Text>
              <Text className="font-inter-sb text-sm text-black/[.5]">
                주황색 수정 버튼을 눌러 관심사를 추가해주세요!
              </Text>
              <Pressable
                className="py-1"
                onPress={() => navigation.navigate('AddInterest')}
              >
                <InterestIcon width={25} height={25} />
              </Pressable>
            </View>
          </View>
          <View className="flex flex-col px-2 w-full h-full">
            <View className="flex flex-row w-2/5 justify-between">
              <Text className="font-inter-sb text-lg text-black">
                받은 스티커
              </Text>
              <Pressable
                onPress={() => navigation.navigate('ViewReceivedSticker')}
              >
                <BackIcon width={23} height={23} />
              </Pressable>
            </View>
            <Text className="font-inter-sb py-1 text-sm text-black/[.5]">
              아직 스티커를 받지 못했어요!
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
