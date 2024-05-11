import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import BackIcon from '../../../../assets/images/icon_goback.svg';
import InterestIcon from '../../../../assets/images/icon_addInterest.svg';
import PersonIcon from '../../../../assets/images/icon_person.svg';
import data from '../../../../data.json';

interface User {
  user_id: number;
  login_id: string;
  password: string;
  username: string;
  phone: string;
  sex: string;
  birthday: string;
  nickname: string;
  mbti: string;
  user_agreement: number;
  interested_location: string[];
  interest_hobby: string[];
  interested_food: string[];
}

interface Sticker {
  sticker_id: number;
  user_id: number;
  sticker_text: string;
  sticker_count: number;
}

function mbtiCheck(mbti: string): string {
  const mbtiList = [
    'INFP',
    'ENFJ',
    'ENFP',
    'ESFJ',
    'ISTJ',
    'ISFJ',
    'ESTJ',
    'ESFJ',
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
    'ISTJ',
    'ISFJ',
    'ESTJ',
    'ESFJ',
  ];
  if (mbtiList.slice(0, 4).includes(mbti)) {
    return 'green';
  }
  if (mbtiList.slice(4, 8).includes(mbti)) {
    return 'blue';
  }
  if (mbtiList.slice(8, 12).includes(mbti)) {
    return 'yellow';
  }
  return 'pink';
}

function countCheck(count: number): boolean {
  // 관심사 개수 체크(추가 유도 글 노출 여부) true : 노출, false : 미노출
  if (count > 0) {
    return false;
  }
  return true;
}

function interestBorder(interest: string, index: number) {
  // 관심사 border 컴포넌트
  return (
    <View
      key={index}
      className="flex border-2 mr-1 border-primary-2/100 w-auto h-auto rounded-2xl items-center"
    >
      <Text className="font-inter-r px-2 py-1 text-md text-primary-2">
        {interest}
      </Text>
    </View>
  );
}

function stickerList(sticker: Sticker) {
  return (
    <View className="flex py-2 flex-row w-full h-auto">
      <View className="flex flex-row w-1/5 justify-center items-center">
        <PersonIcon width={18} height={24} />
        <Text className="font-inter-sb mx-1 text-md text-black">
          {sticker.sticker_count}
        </Text>
      </View>
      <View className="flex border-2 mr-1 border-primary-2/100 w-auto h-auto rounded-2xl items-center">
        <Text className="font-inter-r px-2 py-1 text-md text-primary-2">
          {sticker.sticker_text}
        </Text>
      </View>
    </View>
  );
}

export default function EditProfileScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: EditProfileStackScreenProps<'EditProfile'>) {
  const userId = 1;
  const userData: User[] = data.user;
  const stickerData: Sticker[] = data.sticker;
  const [mbtiColor, setMbtiColor] = useState('green');
  const [travleInterestCount, setTravelInterestCount] = useState(false);
  const [hobbyInterestCount, setHobbyInterestCount] = useState(false);
  const [foodInterestCount, setFoodInterestCount] = useState(false);
  const [stickerCount, setStickerCount] = useState(true);
  useEffect(() => {
    // mbti 색 설정
    setMbtiColor(mbtiCheck(userData[userId - 1].mbti));
  }, [userData]);
  useEffect(() => {
    // 관심사 개수 체크(추가 유도 글 노출 여부)
    setTravelInterestCount(
      countCheck(userData[userId - 1].interested_location.length),
    );
    setHobbyInterestCount(
      countCheck(userData[userId - 1].interest_hobby.length),
    );
    setFoodInterestCount(
      countCheck(userData[userId - 1].interested_food.length),
    );
    setStickerCount(!stickerData.some(sticker => sticker.user_id === userId));
  }, [
    foodInterestCount,
    hobbyInterestCount,
    travleInterestCount,
    stickerData,
    userData,
  ]);
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
                <Text className="font-inter-sb text-xl text-black">
                  {userData[userId - 1].username}
                </Text>
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
                {/* mbti에 따른 border 테두리 색 변화 */}
                {mbtiColor === 'green' ? (
                  <View className="flex border-2 border-mbti-green/100 w-2/5 h-auto rounded-2xl items-center">
                    <Text className="font-inter-sb text-lg text-black">
                      {userData[userId - 1].mbti}
                    </Text>
                  </View>
                ) : null}
                {mbtiColor === 'blue' ? (
                  <View className="flex border-2 border-mbti-blue/100 w-2/5 h-auto rounded-2xl items-center">
                    <Text className="font-inter-sb text-lg text-black">
                      {userData[userId - 1].mbti}
                    </Text>
                  </View>
                ) : null}
                {mbtiColor === 'yellow' ? (
                  <View className="flex border-2 border-mbti-yellow/100 w-2/5 h-auto rounded-2xl items-center">
                    <Text className="font-inter-sb text-lg text-black">
                      {userData[userId - 1].mbti}
                    </Text>
                  </View>
                ) : null}
                {mbtiColor === 'pink' ? (
                  <View className="flex border-2 border-mbti-pink/100 w-2/5 h-auto rounded-2xl items-center">
                    <Text className="font-inter-sb text-lg text-black">
                      {userData[userId - 1].mbti}
                    </Text>
                  </View>
                ) : null}
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
              {travleInterestCount ? (
                <Text className="font-inter-sb text-sm text-black/[.5]">
                  주황색 수정 버튼을 눌러 관심사를 추가해주세요!
                </Text>
              ) : null}
              <View className="flex flex-row h-auto w-full">
                {userData[userId - 1].interested_location.map(
                  (interest, index) => interestBorder(interest, index),
                )}
                <Pressable
                  className="py-1 mr-1"
                  onPress={() => navigation.navigate('AddInterest')}
                >
                  <InterestIcon width={25} height={25} />
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/3">
              <Text className="font-inter-sb text-lg py-1 text-black">
                취미
              </Text>
              {hobbyInterestCount ? (
                <Text className="font-inter-sb text-sm text-black/[.5]">
                  주황색 수정 버튼을 눌러 관심사를 추가해주세요!
                </Text>
              ) : null}
              <View className="flex flex-row h-auto w-full">
                {userData[userId - 1].interest_hobby.map((interest, index) =>
                  interestBorder(interest, index),
                )}
                <Pressable
                  className="py-1 mr-1"
                  onPress={() => navigation.navigate('AddInterest')}
                >
                  <InterestIcon width={25} height={25} />
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/3">
              <Text className="font-inter-sb text-lg py-1 text-black">
                좋아하는 음식
              </Text>
              {foodInterestCount ? (
                <Text className="font-inter-sb text-sm text-black/[.5]">
                  주황색 수정 버튼을 눌러 관심사를 추가해주세요!
                </Text>
              ) : null}
              <View className="flex flex-row h-auto w-full">
                {userData[userId - 1].interested_food.map((interest, index) =>
                  interestBorder(interest, index),
                )}
                <Pressable
                  className="py-1 mr-1"
                  onPress={() => navigation.navigate('AddInterest')}
                >
                  <InterestIcon width={25} height={25} />
                </Pressable>
              </View>
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
            {stickerCount ? (
              <Text className="font-inter-sb py-1 text-sm text-black/[.5]">
                아직 스티커를 받지 못했어요!
              </Text>
            ) : null}
            <View className="flex h-1/4 w-full">
              <View className="flex flex-col w-full h-auto">
                <ScrollView showsVerticalScrollIndicator={false}>
                  {stickerData
                    .filter(sticker => sticker.user_id === userId)
                    .map(sticker => stickerList(sticker))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
