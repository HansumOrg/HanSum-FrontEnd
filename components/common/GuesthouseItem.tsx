// ../../components/common/GuesthouseItem.tsx
import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import FavoriteSelect from '../../assets/icon/icon _Heart.svg';

interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  imageUrl: string;
}

const screenHeight = Dimensions.get('window').height;

const GuesthouseItem: React.FC<{ item: Guesthouse }> = ({ item }) => (
  <View
    className="border-t border-gray-100 px-2 bg-white w-full shadow"
    style={{
      height: (screenHeight * 4) / 10,
    }}
  >
    <View className="mt-4 items-end rounded-md w-full bg-primary-1 h-[75%]">
      <Pressable className="w-[20%] pt-2 pr-2 aspect-square justify-start items-end">
        <FavoriteSelect width="45%" height="45%" />
      </Pressable>
    </View>
    <Text className="text-sm font-inter-b text-black mt-2">
      {item.guesthouse_name}
    </Text>
    <Text className="text-sss text-black">{item.address}</Text>
  </View>
);

export default GuesthouseItem;
