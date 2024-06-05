import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MainTabScreenProps } from '../../navigation/types';
import GuesthouseItem from '../../components/common/GuesthouseItem';

interface Dibs {
  dibs_id: number;
  guesthouse_id: number;
}

interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  imageUrl: string;
}

// 더미 데이터
const dummyDibs: Dibs[] = [
  { dibs_id: 456, guesthouse_id: 789 },
  { dibs_id: 457, guesthouse_id: 790 },
  { dibs_id: 458, guesthouse_id: 791 },
  { dibs_id: 459, guesthouse_id: 792 },
  { dibs_id: 460, guesthouse_id: 793 },
];

const dummyGuesthouses: Guesthouse[] = [
  {
    guesthouse_id: 789,
    guesthouse_name: '서점 숙소',
    address: '제주특별자치도 제주시 조천읍 북촌14길 13-12',
    imageUrl: 'https://example.com/images/jeju-beach.jpg',
  },
  {
    guesthouse_id: 790,
    guesthouse_name: '게으른 하루',
    address: '제주특별자치도 제주시 구좌읍 한동북1길 54-5',
    imageUrl: 'https://example.com/images/book-hotel.jpg',
  },
  {
    guesthouse_id: 791,
    guesthouse_name: '아 배고파',
    address: '제주특별자치도 제주시 구좌읍 한동북1길 54-5',
    imageUrl: 'https://example.com/images/book-hotel.jpg',
  },
  {
    guesthouse_id: 792,
    guesthouse_name: '이지한 하루',
    address: '제주특별자치도 제주시 구좌읍 한동북1길 54-5',
    imageUrl: 'https://example.com/images/book-hotel.jpg',
  },
  {
    guesthouse_id: 793,
    guesthouse_name: '게으른 이지현',
    address: '제주특별자치도 제주시 구좌읍 한동북1길 54-5',
    imageUrl: 'https://example.com/images/book-hotel.jpg',
  },
];

const FavoritesScreen: React.FC<MainTabScreenProps<'Favorites'>> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}) => {
  const [loading, setLoading] = useState(true);
  const [guesthouses, setGuesthouses] = useState<Guesthouse[]>([]);

  useEffect(() => {
    // 더미 데이터를 사용하여 찜 목록과 게스트하우스 정보 설정
    const fetchGuesthouses = () => {
      const guesthouseIds = dummyDibs.map(dib => dib.guesthouse_id);
      const filteredGuesthouses = dummyGuesthouses.filter(guesthouse =>
        guesthouseIds.includes(guesthouse.guesthouse_id),
      );
      setGuesthouses(filteredGuesthouses);
      setLoading(false);
    };

    fetchGuesthouses();
  }, []);
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content'); // 상태 바 스타일을 설정
      return () => {
        StatusBar.setBarStyle('dark-content'); // 화면을 벗어날 때 기본 상태로 되돌림
        StatusBar.setTranslucent(false);
      };
    }, []),
  );
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="bg-white flex w-full justify-center items-center">
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            className="w-full"
            data={guesthouses}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('GuesthouseDetailsNavigator', {
                    screen: 'GuesthouseDetails',
                  })
                }
              >
                <GuesthouseItem item={item} />
              </Pressable>
            )}
            keyExtractor={item => item.guesthouse_id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
