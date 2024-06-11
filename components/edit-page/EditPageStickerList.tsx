import React from 'react';
import { View, Text } from 'react-native';
import PersonIcon from '../../assets/images/icon_person.svg';
import { EditPageStickerListProps } from '../../types';

function EditPageStickerList({ sticker, index }: EditPageStickerListProps) {
  return (
    <View key={index} className="flex py-2 flex-row w-full h-auto">
      <View className="flex flex-row w-1/5 justify-center items-center">
        <PersonIcon width={18} height={24} />
        <Text className="font-inter-sb mx-1 text-s text-black">
          {sticker.stickerCount}
        </Text>
      </View>
      <View className="flex border-2 mr-1 border-primary-2/100 w-auto h-auto rounded-2xl items-center">
        <Text className="font-inter-r px-2 py-1 text-s text-primary-2">
          {sticker.stickerText}
        </Text>
      </View>
    </View>
  );
}
export default EditPageStickerList;
