import React from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';

interface Guesthouse {
  guesthouse_name: string;
  imageUrl: string;
  probability: number;
  rank: number;
}

const DATA: Guesthouse[] = [
  {
    guesthouse_name: 'Jeju Beach Guesthouse',
    imageUrl: 'https://example.com/images/jeju-beach.jpg',
    probability: 0.7854,
    rank: 1,
  },
  {
    guesthouse_name: 'Book Hotel',
    imageUrl: 'https://example.com/images/book-hotel.jpg',
    probability: 0.6721,
    rank: 2,
  },
  {
    guesthouse_name: 'Ocean View',
    imageUrl: 'https://example.com/images/ocean-view.jpg',
    probability: 0.8456,
    rank: 3,
  },
  {
    guesthouse_name: 'Mountain Retreat',
    imageUrl: 'https://example.com/images/mountain-retreat.jpg',
    probability: 0.789,
    rank: 4,
  },
  {
    guesthouse_name: 'City Lights',
    imageUrl: 'https://example.com/images/city-lights.jpg',
    probability: 0.6543,
    rank: 5,
  },
];

const GuesthouseRecommList: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;

  const renderItem = ({ item }: { item: Guesthouse }) => (
    <View
      className="flex-1/2 bg-blue-300 rounded-md justify-center items-center m-2"
      style={{ width: screenWidth / 2 }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        className="w-full h-full rounded-t-md"
      />
      <Text className="absolute p-2 text-lg font-bold bottom-2">
        {item.guesthouse_name}
      </Text>
    </View>
  );

  return (
    <FlatList
      className="p-2"
      data={DATA.sort((a, b) =>
        a.guesthouse_name.localeCompare(b.guesthouse_name),
      )}
      renderItem={renderItem}
      keyExtractor={item => item.rank.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default GuesthouseRecommList;
