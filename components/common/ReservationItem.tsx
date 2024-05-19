import React from 'react';
import { View, Text, Dimensions } from 'react-native';

interface ReservationRecord {
  guesthouse_name: string;
  checkin_date: string;
  checkout_date: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const calculateDday = (date: string): string => {
  const today = new Date();
  const targetDate = new Date(date);
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'D-DAY';
  }
  return `D-${diffDays}`;
};

const ReservationItem: React.FC<{ item: ReservationRecord }> = ({ item }) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <View
      className="flex-row justify-between items-center bg-white rounded-lg m-4 shadow"
      style={{ height: screenHeight / 10 }}
    >
      <View className="w-1/2 mx-2">
        <Text className="text-sm font-bold">{item.guesthouse_name}</Text>
        <View className="flex-row justify-between">
          <Text className="text-gray">Check-in</Text>
          <Text className="text-dark mb-1">
            {formatDate(item.checkin_date)}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray">Check-out</Text>
          <Text className="text-dark">{formatDate(item.checkout_date)}</Text>
        </View>
      </View>
      <View className="bg-primary-2 h-full w-1/4 justify-center items-center p-2 rounded-r-md">
        <Text className="text-white text-sm font-inter-r">
          {calculateDday(item.checkin_date)}
        </Text>
      </View>
    </View>
  );
};

export default ReservationItem;
