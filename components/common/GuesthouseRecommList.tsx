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
  GuesthouseRecommListProps,
  GuesthouseRecommListPropsWithNavigation,
} from '../../types';
import dummyImage from '../../assets/images/dummy_img';

const DATA: GuesthouseRecommListProps[] = [
  {
    guesthouse_name: 'Jeju Beach Guesthouse',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    probability: 0.7854,
    guesthouseId: 123,
    rank: 1,
  },
  {
    guesthouse_name: 'Book Hotel',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    probability: 0.6721,
    guesthouseId: 11415,
    rank: 2,
  },
  {
    guesthouse_name: 'Ocean View',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    probability: 0.8456,
    guesthouseId: 456,
    rank: 3,
  },
  {
    guesthouse_name: 'Mountain Retreat',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    probability: 0.789,
    guesthouseId: 789,
    rank: 4,
  },
  {
    guesthouse_name: 'City Lights',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    probability: 0.6543,
    guesthouseId: 101112,
    rank: 5,
  },
];

const GuesthouseRecommList: React.FC<
  GuesthouseRecommListPropsWithNavigation
> = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const renderItem = ({ item }: { item: GuesthouseRecommListProps }) => (
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
          source={{ uri: dummyImage }}
          className="w-full h-full rounded-lg bg-blue-300"
        />
        <Text className="absolute text-left left-0 px-2 text-s text-white font-inter-b bottom-2">
          {item.guesthouse_name}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={DATA.sort((a, b) =>
        a.guesthouse_name.localeCompare(b.guesthouse_name),
      )}
      renderItem={renderItem}
      keyExtractor={item => item.rank.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default GuesthouseRecommList;
