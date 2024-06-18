import React from 'react';
import { View, Text } from 'react-native';
import { BasicReservationRecord } from '../../types';
import { useGetGuesthouseDetailsQuery } from '../../api/endpoints/guesthouseEndpoints';

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
  if (diffDays < 0) {
    return `이용 완료`;
  }
  return `D-${diffDays}`;
};

const ReservationItem: React.FC<{ item: BasicReservationRecord }> = ({
  item,
}) => {
  const { data: guesthouseData } = useGetGuesthouseDetailsQuery(
    item.guesthouseId,
  );

  return (
    <View className="flex-row w-full justify-between items-center bg-white rounded-lg m-2 h-[35%] shadow-xl shadow-black">
      <View className="w-1/2 mx-2">
        <Text className="text-s text-black font-inter-b">
          {guesthouseData?.guesthouseName}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-gray font-inter-r">Check-in</Text>
          <Text className="text-gray font-inter-r">
            {formatDate(item.checkinDate)}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray font-inter-r">Check-out</Text>
          <Text className="text-gray font-inter-r">
            {formatDate(item.checkoutDate)}
          </Text>
        </View>
      </View>
      <View className="bg-primary-2 h-full w-1/4 justify-center items-center rounded-r-md">
        <Text className="text-white text-sm font-inter-r">
          {calculateDday(item.checkinDate)}
        </Text>
      </View>
    </View>
  );
};

export default ReservationItem;
