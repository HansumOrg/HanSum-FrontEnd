import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import RatingStars from '../../../components/common/RatingStars';
import GuestReview from '../../../components/common/GuestReview';

export default function ReviewsScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: MyPageStackScreenProps<'Reviews'>) {
  const [review, setReview] = useState('');
  const maxLength = 1000;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="h-screen px-4 py-1 bg-white flex justify-start items-center">
          <View className="w-full items-start justify-center">
            <View className="bg-gray-2 h-[2%] w-full" />
            <View className="flex-row w-[80%] my-2 bg-red-100 justify-between items-start pl-2">
              <Text className="text-s font-inter-r text-black">숙소 정보</Text>
              <Text className="text-s font-inter-r text-black">
                게스트하우스 이름 param
              </Text>
            </View>
            <View className="bg-gray-2 h-[2%] w-full" />
          </View>
          <View className="w-full h-[20%] my-2 justify-between items-center">
            <Text className="mt-5 text-md font-inter-sb text-black">
              게스트 하우스는 어떠셨나요?
            </Text>
            <RatingStars />
          </View>
          <View className="w-full h-[20%] my-2 justify-between items-start">
            <Text className="mt-5 text-md font-inter-sb text-black">
              후기를 작성해주세요
            </Text>
            <TextInput
              className="w-full h-full border border-black rounded-md p-1 placeholder-font-inter-r text-black text-sm font-inter-r"
              placeholder=" 개인 정보 보호를 위해 고객님의 개인 정보를 입력하지 마세요. (5자 이상 작성해주세요.)"
              multiline
              onChangeText={text => setReview(text)}
              textAlignVertical="top"
              maxLength={maxLength}
              value={review}
            />
            <Text className="text-right w-full">{`${review.length}/${maxLength}`}</Text>
          </View>
        </View>
        <View
          className="px-4 w-full my-2 justify-start items-center"
          style={{ height: (screenHeight * 3) / 5 }}
        >
          <Text className="mt-5 w-full text-left text-md font-inter-sb text-black">
            게스트 리뷰 (선택) - 2개 선택
          </Text>
          <View className="mt-4 flex-row h-[10%] w-full">
            <Text className="text-md font-inter-r text-black">게스트-</Text>
            <Text className="text-md font-inter-r text-black">게스트 mbti</Text>
          </View>
          <GuestReview />
        </View>
        <View
          className="px-4 w-full my-2 justify-start items-center"
          style={{ height: (screenHeight * 3) / 5 }}
        >
          <View className="mt-2 flex-row h-[10%] w-full">
            <Text className="text-md font-inter-r text-black">게스트-</Text>
            <Text className="text-md font-inter-r text-black">게스트 mbti</Text>
          </View>
          <GuestReview />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
