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

interface GuestReviewProps {
  onReviewChange: (nickname: string, selectedReviews: string[]) => void;
  nickname: string;
}

const GuestReview: React.FC<GuestReviewProps> = ({ onReviewChange, nickname }) => {
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const toggleReview = (review: string) => {
    setSelectedReviews(prevState => {
      let newReviews;
      if (prevState.includes(review)) {
        newReviews = prevState.filter(r => r !== review);
      } else if (prevState.length < 2) {
        newReviews = [...prevState, review];
      } else {
        newReviews = prevState;
      }
      onReviewChange(nickname, newReviews);
      return newReviews;
    });
  };

  return (
    <View className="flex flex-wrap flex-row gap-2">
      {reviews.map(review => {
        const isNegative = negativeReviews.includes(review);
        const isSelected = selectedReviews.includes(review);

        let buttonClassName = 'flex flex-row items-center px-2 py-1 border';
        let textClassName = 'text-sm  font-inter-r';
        if (isSelected) {
          buttonClassName += isNegative
            ? ' border-orange-400 rounded-md'
            : ' border-primary-2 rounded-2xl';
          textClassName += isNegative
            ? ' font-inter-r text-orange-400'
            : ' font-inter-r text-primary-2';
        } else if (isNegative) {
          buttonClassName += ' border-gray-300 rounded-md';
        } else {
          buttonClassName += ' border-gray-300 rounded-2xl';
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
