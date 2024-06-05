// ../../components/common/GuesthouseItem.tsx
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import FavoriteSelect from '../../assets/icon/icon _Heart.svg';
import dummyImage from '../../assets/images/dummy_img';

interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  imageUrl: string;
}

const screenHeight = Dimensions.get('window').height;

const GuesthouseItem: React.FC<{ item: Guesthouse }> = ({ item }) => (
  <View
    className="border-t items-center border-gray-3 px-2 bg-white w-full shadow"
    style={{
      height: (screenHeight * 4) / 10,
    }}
  >
    <View className="mt-4 items-center rounded-lg w-full h-[68%] ">
      <Image
        source={{ uri: dummyImage }}
        className="w-[90%] h-full  rounded-lg absolute"
      />
      <View className="w-[90%] pt-2 pr-2 aspect-square justify-start items-end">
        <FavoriteSelect width="8%" height="10%" />
      </View>
    </View>
    <Text className="w-[90%] text-sm font-inter-b text-black mt-2">
      {item.guesthouse_name}
    </Text>
    <Text className="w-[90%] text-sss text-black">{item.address}</Text>
  </View>
);

export default GuesthouseItem;
