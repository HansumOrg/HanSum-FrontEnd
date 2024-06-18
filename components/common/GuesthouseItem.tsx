// ../../components/common/GuesthouseItem.tsx
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import FavoriteSelect from '../../assets/icon/icon _Heart.svg';
import dummyImage from '../../assets/images/dummy_img';

interface Guesthouse {
  guesthouseId: number;
  guesthouseName: string;
  address: string;
  imageBase64: string;
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
        source={{ uri: item.imageBase64 || dummyImage}}
        className="w-[90%] h-full  rounded-lg absolute"
      />
      <View className="w-[90%] pt-2 pr-2 aspect-square justify-start items-end">
        <FavoriteSelect width="8%" height="10%" />
      </View>
    </View>
    {/* 원래는 엑스틀라 볼드 */}
    <Text className="w-[90%] text-sm font-inter-b text-black mt-2">
      {item.guesthouseName}
    </Text>
    <Text className="w-[90%] text-sss text-black">{item.address}</Text>
  </View>
);

export default GuesthouseItem;
