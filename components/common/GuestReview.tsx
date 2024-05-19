import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const reviews = [
  '항상 웃음을 잃지 않아요',
  '배려심이 깊어요',
  '대화가 즐거웠어요',
  '에너지가 넘치고 활기차요',
  '조용하고 편안한 동반자였어요',
  '공간을 조금 더 정리해주세요',
  '다른 게스트를 조금만 더 배려해주세요',
  '소음 관리에 조금 더 신경 써 주세요',
];

const negativeReviews = [
  '공간을 조금 더 정리해주세요',
  '다른 게스트를 조금만 더 배려해주세요',
  '소음 관리에 조금 더 신경 써 주세요',
];

const GuestReview: React.FC = () => {
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const toggleReview = (review: string) => {
    setSelectedReviews(prevState => {
      if (prevState.includes(review)) {
        return prevState.filter(r => r !== review);
      }
      if (prevState.length < 2) {
        return [...prevState, review];
      }
      return prevState;
    });
  };
  return (
    <View className="flex flex-wrap gap-2">
      {reviews.map(review => {
        const isNegative = negativeReviews.includes(review);
        const isSelected = selectedReviews.includes(review);

        let buttonClassName =
          'flex flex-row items-center px-3 py-1 border rounded-2xl';
        let textClassName = 'text-md';
        if (isNegative) {
          buttonClassName += ' border-red-300 bg-red-100';
          textClassName += ' text-red-600';
        } else {
          buttonClassName += ' border-gray-300';
        }
        if (isSelected) {
          buttonClassName += ' bg-blue-100';
          textClassName += ' font-bold';
        }

        return (
          <Pressable
            key={review}
            className={buttonClassName}
            onPress={() => toggleReview(review)}
          >
            {isNegative && <Text className="mr-2">⚠️</Text>}
            <Text className={textClassName}>{review}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default GuestReview;
