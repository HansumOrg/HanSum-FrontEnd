// ../../components/common/RatingStars.tsx
import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import EmptyStar from '../../assets/icon/empty_rabong.svg';
import FullStar from '../../assets/icon/full_rabong.svg';
import HalfStar from '../../assets/icon/half_rabong.svg';

// 별점 데이터를 포함하는 배열 생성
const stars = [
  { id: 'star-1', value: 0.5 },
  { id: 'star-2', value: 1.5 },
  { id: 'star-3', value: 2.5 },
  { id: 'star-4', value: 3.5 },
  { id: 'star-5', value: 4.5 },
];

const RatingStars: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handlePress = (value: number) => {
    console.log(`Pressed star value: ${value}`);
    if (rating === value) {
      setRating(value + 0.5); // Half star if clicked again
    } else {
      setRating(value); // Full star
    }
    console.log(`Updated rating: ${rating}`);
  };

  const renderStar = (value: number) => {
    if (rating >= value + 0.5) {
      return <FullStar className="w-1/5 h-full" />;
    }
    if (rating === value) {
      return <HalfStar className="w-1/5 h-full" />;
    }
    return <EmptyStar className="w-1/5 h-full" />;
  };

  return (
    <View className="justify-center items-center w-full ">
      <View className="flex-row justify-center items-center w-full">
        {stars.map(star => (
          <Pressable key={star.id} onPress={() => handlePress(star.value)}>
            {renderStar(star.value)}
          </Pressable>
        ))}
      </View>
      <Text className="text-ss font-inter-r text-black">탭해서 평가하기</Text>
    </View>
  );
};

export default RatingStars;
