// ../../components/common/GuesthouseItem.tsx
import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';

interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  imageUrl: string;
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const GuesthouseItem: React.FC<{ item: Guesthouse }> = ({ item }) => (
  <View
    className="my-4 px-2 bg-white w-full shadow"
    style={{
      width: (screenWidth * 9) / 10,
      height: (screenHeight * 3) / 10,
    }}
  >
    {/* <Image source={{ uri: item.imageUrl }} className=" w-full rounded-lg" /> */}
    <View className="mt-1 items-end rounded-md w-full bg-primary-1 h-[75%]">
      <Pressable className="mt-2 mr-2 bg-red-500 border w-[5%] aspect-square" />
    </View>
    <Text className="text-sm font-inter-b text-black mt-2">
      {item.guesthouse_name}
    </Text>
    <Text className="text-sss text-black">{item.address}</Text>
  </View>
);

export default GuesthouseItem;
