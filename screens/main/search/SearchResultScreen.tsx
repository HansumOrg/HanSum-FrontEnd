import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import SearchIcon from '../../../assets/images/icon_search.svg';
import CalendarIcon from '../../../assets/images/icon_calendar.svg';
import FilterIcon from '../../../assets/images/icon_filter.svg';
import SearchResultList from '../../../components/search-result-page/SearchResultList';

interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  location: string;
  price: number;
  phone: string;
  rating: number;
  imageUrl: string;
  mood: string;
}

const guesthousSampleData = [
  {
    guesthouse_id: 1,
    guesthouse_name: 'Jeju Beach House',
    address: '123 Beach Road, Jeju City',
    location: 'Jeju City',
    price: 30000,
    phone: '01011112222',
    rating: 4.2,
    imageUrl: 'https://example.com/jeju-beach.jpg',
    mood: '액티비티가 다양한',
  },
  {
    guesthouse_id: 2,
    guesthouse_name: 'Seogwipo Sunset Inn',
    address: '456 Sunset Street, Seogwipo',
    location: 'Seogwipo',
    price: 35000,
    phone: '01033334444',
    rating: 4.0,
    imageUrl: 'https://example.com/seogwipo-sunset.jpg',
    mood: '여유로운',
  },
  {
    guesthouse_id: 3,
    guesthouse_name: 'Seogwipo Sunset Inn',
    address: '456 Sunset Street, Seogwipo',
    location: 'Seogwipo',
    price: 35000,
    phone: '01033334444',
    rating: 4.0,
    imageUrl: 'https://example.com/seogwipo-sunset.jpg',
    mood: '여유로운',
  },
];

export default function SearchResultScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: SearchStackScreenProps<'SearchResult'>) {
  const {
    location,
    checkin_date: checkinDate, // eslint 상에서 camelCase를 권장하여 변경
    checkout_date: checkoutDate,
    guesthouse_name: guesthouseName,
    mood,
    facility,
    min_price,
    max_price,
  } = route.params;
  const [guesthouses, setGuesthouses] =
    useState<Guesthouse[]>(guesthousSampleData);
  useEffect(()=>{
    console.log(guesthouses[1]);
  },[])
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-1/4 justify-end">
          <View className="flex w-full h-4/5  items-center justify-end ">
            <View className="flex flex-row w-full h-1/3 mb-1 bg-white border-2 border-gray-1/100 rounded-lg">
              <View className="flex ml-2 w-auto h-full justify-center">
                <SearchIcon width={26} height={27} />
              </View>
              <View className="flex w-3/4 h-full justify-center">
                <TextInput
                  className="font-inter-m text-md text-black"
                  placeholder={`${guesthouseName}`}
                  placeholderTextColor="black"
                />
              </View>
              <Pressable
                className="flex w-auto h-full justify-center"
                onPress={() => navigation.navigate('Filter')}
              >
                <FilterIcon width={34} height={34} />
              </Pressable>
            </View>
            <Pressable
              className="flex w-full h-1/3"
              onPress={() => navigation.navigate('Calendar')}
            >
              <View className="flex flex-row w-full h-full mt-1 bg-white border-2 border-gray-1/100 rounded-lg">
                <View className="flex ml-2 w-auto h-full justify-center">
                  <CalendarIcon width={26} height={27} />
                </View>
                <View className="flex w-3/4 h-full justify-center">
                  {checkinDate && checkoutDate ? (
                    <Text className="font-inter-m text-md text-black">
                      {`${new Date(checkinDate).getMonth() + 1}월 ${new Date(
                        checkinDate,
                      ).getDate()}일 ~ ${
                        new Date(checkoutDate).getMonth() + 1
                      }월 ${new Date(checkoutDate).getDate()}일`}
                    </Text>
                  ) : (
                    <Text className="font-inter-m text-md text-gray-2">
                      날짜 선택
                    </Text>
                  )}
                </View>
              </View>
            </Pressable>
          </View>
          <View className="flex w-full h-1/4 justify-end">
            <Text className="font-inter-m text-lg text-gray-2">{location}</Text>
          </View>
        </View>
        <FlatList
          className="w-11/12"
          data={guesthouses}
          renderItem={({ item }) => <SearchResultList item={item} />}
          keyExtractor={item => item.guesthouse_id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
