import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView } from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import InterestList from '../../../../components/edit-page/InterestList';
import { useAppSelector, useUpdateInterests } from '../../../../api/hooks';
import { selectInterests } from '../../../../api/selectors';

const travleList = [
  '성산일출봉',
  '만장굴',
  '이호테우 해변',
  '천지연 폭포',
  '섭지코지',
  '세화',
  '올레길',
  '협재 해수욕장',
  '함덕',
];
const hobbyList = [
  '독서',
  '요리',
  '캠핑',
  '등산',
  '운동',
  '음악 감상',
  '영화 감상',
  '사진 촬영',
];
const foodList = ['고기국수', '해물라면', '오메기떡', '감귤', '흑돼지'];

export default function AddInterestScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: EditProfileStackScreenProps<'AddInterest'>) {
  const curruentState = useAppSelector(selectInterests);
  const initialData = {
    interestedLocation: curruentState?.interestedLocation ?? null,
    interestedHobby: curruentState?.interestedHobby ?? null,
    interestedFood: curruentState?.interestedFood ?? null,
  };
  const [interestData, setInterestData] = useState(initialData);
  const { handleUpdateInterests } = useUpdateInterests();
  const travleInterest = initialData.interestedLocation ?? [];
  const hobbyInterest = initialData.interestedHobby ?? [];
  const foodInterest = initialData.interestedFood ?? [];
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-full ">
          <ScrollView className="flex w-10/12 h-full">
            <View className="flex flex-row py-2 w-full h-auto">
              <Text className="font-inter-b px-2 text-md text-black">
                제주 여행지
              </Text>
              <Text className="font-inter-b px-2 text-md text-black">
                ({travleInterest.length}/3)
              </Text>
            </View>
            <View className="flex flex-row flex-wrap w-wrap h-auto">
              {travleList.map((_, index) =>
                InterestList({
                  handleUpdateInterests,
                  interestData,
                  setInterestData,
                  interests: travleList,
                  userinterest: travleInterest,
                  index,
                  type: 0,
                }),
              )}
            </View>
            <View className="flex flex-row w-full h-auto py-2 items-cen">
              <Text className="font-inter-b px-2 text-md text-black">취미</Text>
              <Text className="font-inter-b px-2 text-md text-black">
                ({hobbyInterest.length}/3)
              </Text>
            </View>
            <View className="flex flex-row flex-wrap w-wrap h-auto">
              {hobbyList.map((_, index) =>
                InterestList({
                  handleUpdateInterests,
                  interestData,
                  setInterestData,
                  interests: hobbyList,
                  userinterest: hobbyInterest,
                  index,
                  type: 1,
                }),
              )}
            </View>
            <View className="flex flex-row w-full h-auto py-2">
              <Text className="font-inter-b px-2 text-md text-black">
                좋아하는 음식
              </Text>
              <Text className="font-inter-b px-2 text-md text-black">
                ({foodInterest.length}/3)
              </Text>
            </View>
            <View className="flex flex-row flex-wrap w-wrap h-auto">
              {foodList.map((_, index) =>
                InterestList({
                  handleUpdateInterests,
                  interestData,
                  setInterestData,
                  interests: foodList,
                  userinterest: foodInterest,
                  index,
                  type: 2,
                }),
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
