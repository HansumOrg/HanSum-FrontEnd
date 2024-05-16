import React from 'react';
import { View, Text } from 'react-native';
import PersonIcon from '../../assets/images/icon_person.svg';
import { ViewReceivedStickerProps } from '../../types';

function StickerList(props: ViewReceivedStickerProps) {
  // 모든 스티커 리스트를 출력
  const { count, mentList, index } = props;
  return (
    <View className="flex pb-4 flex-row w-full px-1 h-auto " key={index}>
      <View className="flex flex-row w-full justify-between">
        {index <= 4 ? (
          <View className="flex border-2 mr-1 border-primary-2/100 w-auto h-auto rounded-2xl items-center">
            <Text className="font-inter-r px-2 py-1 text-md text-primary-2">
              {mentList[index]}
            </Text>
          </View>
        ) : (
          <View className="flex border-2 mr-1 border-point/100 w-auto h-auto rounded-2xl items-center">
            <Text className="font-inter-r px-2 py-1 text-md text-point">
              ⚠ {mentList[index]}
            </Text>
          </View>
        )}
        <View className="flex flex-row items-center">
          <PersonIcon width={18} height={24} />
          <Text className="font-inter-sb mx-1 text-md text-black">{count}</Text>
        </View>
      </View>
    </View>
  );
}
export default StickerList;
