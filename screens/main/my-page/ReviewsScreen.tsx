import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import RatingStars from '../../../components/common/RatingStars';
import GuestReviewCard from '../../../components/my-page/review-page/GuestReviewCard';

export default function ReviewsScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: MyPageStackScreenProps<'Reviews'>) {
  const screenHeight = Dimensions.get('window').height;
  const guests = [
    { name: '게스트 이름 1', mbti: 'MBTI1' },
    { name: '게스트 이름 2', mbti: 'MBTI2' },
    { name: '게스트 이름 3', mbti: 'MBTI3' },
    { name: '게스트 이름 4', mbti: 'MBTI4' },
    { name: '게스트 이름 5', mbti: 'MBTI5' },
  ];

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className=" px-4 py-1 bg-white flex justify-start items-center">
          <View
            className="w-full items-start justify-center"
            style={{ height: (screenHeight * 1) / 14 }}
          >
            <View className="bg-gray-2 h-[2%] w-full" />
            <View className="flex-row w-[80%] my-2  justify-between items-start pl-2">
              <Text className="text-s font-inter-r text-black">숙소 정보</Text>
              <Text className="text-s font-inter-r text-black">
                게스트하우스 이름 state
              </Text>
            </View>
            <View className="bg-gray-2 h-[2%] w-full" />
          </View>
          <View
            className="w-full my-2 justify-normal items-center"
            style={{ height: screenHeight / 5 }}
          >
            <Text className="my-5 text-md font-inter-sb text-black">
              게스트 하우스는 어떠셨나요?
            </Text>
            <RatingStars />
          </View>
          <View className="px-4 w-full my-2">
            <Text className=" text-left text-md font-inter-sb text-black">
              게스트 리뷰 (선택) - 2개 선택
            </Text>
          </View>
          {guests.map(guest => (
            <>
              <GuestReviewCard
                key={guest.name}
                name={guest.name}
                mbti={guest.mbti}
              />
              <View
                className="bg-white h-[2%] w-full"
                style={{ height: (screenHeight * 1) / 14 }}
              />
            </>
          ))}
          <Pressable
            className="bg-primary-2 items-center justify-center w-full"
            style={{ height: (screenHeight * 1) / 14 }}
            onPress={() => navigation.navigate('MyPage')}
          >
            <Text className="font-inter-b text-lg text-white">등록하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
