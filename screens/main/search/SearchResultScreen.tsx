import React from 'react';
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
import { useSearchContext } from '../../../components/search-page/SearchContext';
import { SearchResultProps } from '../../../types';

// searchContext를 통해 검색 결과를 받아올 수 있습니다.
// searchContext는 checkin_date, checkout_date, location, guesthouse_name, min_price, max_price, mood, facility를 포함합니다.

const guesthousSampleData = [
  {
    location: '중문',
    checkinDate: '2024-05-10',
    checkoutDate: '2024-05-15',
    guesthouses: [
      {
        guesthouse_id: 123,
        guesthouse_name: 'Jeju Beach Guesthouse',
        address: '제주 서귀포시 성산읍 신양로122번길 30-8',
        location: '중문',
        price: 50000,
        phone: '010-1234-5678',
        rating: 4.7,
        imageUrl: 'asdfasdfasdfg',
        mood: '액티비티가 다양한',
      },
      {
        guesthouse_id: 456,
        guesthouse_name: 'Ocean View Guesthouse',
        address: '456 Ocean Rd, Jungmun',
        location: '중문',
        price: 70000,
        phone: '010-9876-5432',
        rating: 4.5,
        imageUrl: 'asasdfkjlkjzlxcvlkl;askdfl...',
        mood: '활기 넘치는',
      },
    ],
  },
];

export default function SearchResultScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: SearchStackScreenProps<'SearchResult'>) {
  const context = useSearchContext();
  const {
    location,
    checkin_date: checkinDate,
    checkout_date: checkoutDate,
    guesthouse_name: guesthouseName,
  } = context.searchState;
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
                {guesthouseName ? (
                  <TextInput
                    className="font-inter-m text-md text-black"
                    placeholder={`${guesthouseName}`}
                    placeholderTextColor="black"
                    onSubmitEditing={event => {
                      context.setSearchState(
                        (prevState: SearchResultProps) => ({
                          ...prevState,
                          guesthouse_name: event.nativeEvent.text,
                        }),
                      );
                      navigation.navigate('SearchResult');
                    }}
                  />
                ) : (
                  <TextInput
                    className="font-inter-m text-md text-black"
                    placeholder="지역, 게스트하우스 이름"
                    placeholderTextColor="#BDBDBD"
                  />
                )}
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
          data={guesthousSampleData.flatMap(data => data.guesthouses)}
          renderItem={({ item }) => (
            <SearchResultList
              guesthouse_id={item.guesthouse_id}
              guesthouse_name={item.guesthouse_name}
              address={item.address}
              location={item.location}
              price={item.price}
              phone={item.phone}
              rating={item.rating}
              imageUrl={item.imageUrl}
              mood={item.mood}
            />
          )}
          keyExtractor={item => item.guesthouse_id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
