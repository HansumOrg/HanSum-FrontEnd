import React, { useState } from 'react';
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
import { useAppSelector, useRegisterSticker } from '../../../api/hooks';
import { useGetReservationStatusQuery } from '../../../api/endpoints/reservationEndpoints';
import { useGetHangoutUserQuery } from '../../../api/endpoints/guestEndpoints';
import { useRegisterStickerMutation } from '../../../api/endpoints/userEndpoints';

export default function ReviewsScreen({
  route,
  navigation,
}: MyPageStackScreenProps<'Reviews'>) {
  const screenHeight = Dimensions.get('window').height;
  const guesthouseIdState = useAppSelector(
    state => state.guesthouse.guesthouseId,
  );
  const { data: reservationData } = useGetReservationStatusQuery();
  const selectedReservation = reservationData?.reservationRecords.find(
    record => record.guesthouseId === guesthouseIdState,
  );
  const guesthouseData = useGetHangoutUserQuery(
    selectedReservation?.reservationId ?? 0,
  ).data;
  const guests =
    useGetHangoutUserQuery(selectedReservation?.reservationId ?? 0).data
      ?.guests ?? [];

  const [rating, setRating] = useState(0);
  const [selectedReviews, setSelectedReviews] = useState<{
    [key: string]: string[];
  }>({});

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    console.log(`Updated rating: ${newRating}`);
  };

  const handleReviewChange = (nickname: string, reviews: string[]) => {
    setSelectedReviews(prevState => ({
      ...prevState,
      [nickname]: reviews,
    }));
  };

  const registerSticker = useRegisterSticker();

  const handleSubmit = async () => {
    for (const guest of guests) {
      const stickerTexts = selectedReviews[guest.nickname];

      if (stickerTexts && stickerTexts.length > 0) {
        try {
          await registerSticker.handleRegistSticker([
            {
              userId: guest.userId,
              stickerTexts,
            },
          ]);
          console.log(
            `Successfully registered stickers for ${guest.nickname}, ${guest.userId} with texts: ${stickerTexts}`,
          );
        } catch (error) {
          console.error(
            `Failed to register sticker for ${guest.nickname}`,
            error,
          );
        }
      }
    }
    console.log('Successfully registered stickers');
    navigation.navigate('MyPage');
  };

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
              {guesthouseData && (
                <Text className="text-s font-inter-r text-black">
                  {guesthouseData.guesthouseName}
                </Text>
              )}
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
            <RatingStars onRatingChange={handleRatingChange} />
          </View>
          <View className="px-4 w-full my-2">
            <Text className=" text-left text-md font-inter-sb text-black">
              게스트 리뷰 (선택) - 2개 선택
            </Text>
          </View>
          {guests.map(guest => (
            <GuestReviewCard
              key={guest.nickname}
              name={guest.nickname}
              mbti={guest.mbti}
              onReviewChange={handleReviewChange}
            />
          ))}
          <Pressable
            className="bg-primary-2 items-center justify-center w-full"
            style={{ height: (screenHeight * 1) / 14 }}
            onPress={handleSubmit}
          >
            <Text className="font-inter-b text-lg text-white">등록하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
