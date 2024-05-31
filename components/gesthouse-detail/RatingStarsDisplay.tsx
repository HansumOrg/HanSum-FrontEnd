// ../../components/common/RatingStarsDisplay.tsx
import React from 'react';
import { View } from 'react-native';
import EmptyStar from '../../assets/icon/empty_rabong.svg';
import FullStar from '../../assets/icon/full_rabong.svg';
import HalfStar from '../../assets/icon/half_rabong.svg';

interface RatingStarsDisplayProps {
  rating: number;
}

const stars = [
  { id: 'star-1', value: 1 },
  { id: 'star-2', value: 2 },
  { id: 'star-3', value: 3 },
  { id: 'star-4', value: 4 },
  { id: 'star-5', value: 5 },
];

const RatingStarsDisplay: React.FC<RatingStarsDisplayProps> = ({ rating }) => {
  const renderStar = (value: number) => {
    if (rating >= value) {
      return <FullStar className="w-1/5 h-full" />;
    }
    if (rating >= value - 0.5) {
      return <HalfStar className="w-1/5 h-full" />;
    }
    return <EmptyStar className="w-1/5 h-full" />;
  };

  return (
    <View className="flex-row justify-center items-center w-full">
      {stars.map(star => (
        <View key={star.id} className="w-1/5 h-full">
          {renderStar(star.value)}
        </View>
      ))}
    </View>
  );
};

export default RatingStarsDisplay;
