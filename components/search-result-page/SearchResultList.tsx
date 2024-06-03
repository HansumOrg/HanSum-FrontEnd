import React, { useState } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import FullHeartIcon from '../../assets/images/icon_fullheart.svg';
import FavoriteSelect from '../../assets/images/icon_Heart.svg';
import { Guesthouse } from '../../types';

const screenHeight = Dimensions.get('window').height;

function SearchResultList({
  guesthouse_id,
  guesthouse_name,
  address,
  location,
  price,
  phone,
  rating,
  imageUrl,
  mood,
}: Guesthouse) {
  const [isFavorite, setIsFavorite] = useState(false);
  const parameter = {
    guesthouse_id,
    guesthouse_name,
    address,
    location,
    price,
    phone,
    rating,
    imageUrl,
    mood,
    isFavorite, // 찜 선택 여부
  };
  return (
    <View
      className="border-t border-gray-100 px-2 bg-white w-full shadow"
      style={{
        height: (screenHeight * 4) / 10,
      }}
    >
      <View className="mt-4 items-end rounded-md w-full bg-primary-1 h-[75%]">
        {isFavorite ? (
          <Pressable
            className="w-[20%] pt-2 pr-2 aspect-square justify-start items-end"
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}
          >
            <FullHeartIcon width="45%" height="45%" />
          </Pressable>
        ) : (
          <Pressable
            className="w-[20%] pt-2 pr-2 aspect-square justify-start items-end"
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}
          >
            <FavoriteSelect width="45%" height="45%" />
          </Pressable>
        )}
      </View>
      <Text className="text-sm font-inter-b text-black mt-2">
        {guesthouse_name}
      </Text>
      <Text className="text-sss text-black">{address}</Text>
    </View>
  );
}

export default SearchResultList;
