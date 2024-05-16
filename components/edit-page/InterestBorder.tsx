import React from 'react';
import { View, Text } from 'react-native';

function InterestBorder(interest: string, index: number) {
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
export default InterestBorder;
