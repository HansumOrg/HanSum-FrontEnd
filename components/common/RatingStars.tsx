import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import EmptyStar from '../../assets/icon/empty_rabong.svg';
import FullStar from '../../assets/icon/full_rabong.svg';
import HalfStar from '../../assets/icon/half_rabong.svg';

const stars = [
  { id: 'star-1', value: 0.5 },
  { id: 'star-2', value: 1.5 },
  { id: 'star-3', value: 2.5 },
  { id: 'star-4', value: 3.5 },
  { id: 'star-5', value: 4.5 },
];

interface RatingStarsProps {
  onRatingChange: (value: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handlePress = (value: number) => {
    let newRating = value;
    if (rating === value) {
      newRating = value + 0.5; // Half star if clicked again
    }
    setRating(newRating);
    onRatingChange(newRating);
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
      <View className="flex-row justify-center items-center w-full mb-2">
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
