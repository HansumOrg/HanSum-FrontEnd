import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import {
  Recommendation,
  GuesthouseRecommListPropsWithNavigation,
} from '../../types';
import dummyImage from '../../assets/images/dummy_img';

const GuesthouseRecommList: React.FC<
  GuesthouseRecommListPropsWithNavigation
> = ({ navigation, recommendation }) => {
  const DATA = recommendation;
  const screenWidth = Dimensions.get('window').width;
  const renderItem = ({ item }: { item: Recommendation }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('GuesthouseDetailsNavigator', {
          screen: 'GuesthouseDetails',
        })
      }
    >
      <View
        className="flex-1/2 rounded-lg justify-center items-center m-2 shadow-md shadow-black "
        style={{ width: screenWidth / 3 }}
      >
        <Image
          source={{ uri: dummyImage }} // item.imageBase64 사용시 어플리케이션이 멈춤
          className="w-full h-full rounded-lg bg-blue-300"
        />
        <Text className="absolute text-left left-0 px-2 text-s text-white font-inter-b bottom-2">
          {item.guesthouseName}
        </Text>
      </View>
    </Pressable>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.rank.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default GuesthouseRecommList;
