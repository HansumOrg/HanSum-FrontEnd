import React, { useState } from 'react';
import { View, Text, Dimensions, Pressable, Image } from 'react-native';
import FullHeartIcon from '../../assets/images/icon_fullheart.svg';
import FavoriteSelect from '../../assets/images/icon_Heart.svg';
import { Guesthouse } from '../../types';
import dummyImage from '../../assets/images/dummy_img';

const screenHeight = Dimensions.get('window').height;

function SearchResultList(props: Guesthouse) {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(props.guesthouseId);
  console.log(props.guesthouseName);
  console.log(props.address);
  console.log(props.mood);
  const { guesthouseName, imageBase64, address } = props;
  return (
    <View
      className="border-t border-gray-100 px-2 bg-white w-full shadow"
      style={{
        height: (screenHeight * 4) / 10,
      }}
    >
      <View className="mt-4 items-end rounded-md w-full bg-primary-1 h-[75%]">
        <Image
          source={{ uri: imageBase64 ?? dummyImage }}
          className="w-full h-full absolute"
        />
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
        {guesthouseName}
      </Text>
      <Text className="text-sss text-black">{address}</Text>
    </View>
  );
}

export default SearchResultList;
