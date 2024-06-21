import React, { useState, useRef, useEffect } from 'react';
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
import { SearchPageTypes } from '../../../types';
import { useAppSelector, useAppDispatch, useSearch } from '../../../api/hooks';
import {
  selectDate,
  selectSearchName,
  selectLocation,
  selectDibs,
  selectSearchResult,
  selectSearchParam,
} from '../../../api/selectors';
import { setLocation, setSearchName } from '../../../api/slices/searchSlice';
import { useRegisterDibs, useDeleteDibs } from '../../../api/hooks';
import { isFailedResponse } from '../../../utils/helpers';
import { setGuesthouseId } from '../../../api/slices/guesthouseSlice';

// searchContext를 통해 검색 결과를 받아올 수 있습니다.
// searchContext는 checkin_date, checkout_date, location, guesthouse_name, min_price, max_price, mood, facility를 포함합니다.

export default function SearchResultScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: SearchStackScreenProps<'SearchResult'>) {
  const dispatch = useAppDispatch();
  const location = useAppSelector(selectLocation);
  const guesthouseName = useAppSelector(selectSearchName);
  const date = useAppSelector(selectDate);
  const guesthousSampleData = useAppSelector(selectSearchResult);
  const searchParam = useAppSelector(selectSearchParam);
  const { handleSearch } = useSearch();

  const initialData: SearchPageTypes = {
    location: searchParam.location,
    guesthouseName: searchParam.guesthouseName,
    mood: searchParam.mood,
    facility: searchParam.facility,
  };

  const [searchData, setSearchData] = useState(initialData);
  const isInitialMount = useRef(true);

  const handleSearchSubmit = async () => {
    if (searchData.location && !searchData.guesthouseName) {
      dispatch(setLocation(searchData.location));
    }
    if (!searchData.location && searchData.guesthouseName) {
      dispatch(setSearchName(searchData.guesthouseName));
    }
    console.log(searchData);
    const res = await handleSearch(searchData);
    if (isFailedResponse(res)) {
      console.log('search failed');
    } else {
      navigation.navigate('SearchResult');
    }
  };

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      handleSearchSubmit();
    }
  }, [searchData]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-1/4 justify-end">
          <View className="flex w-full h-4/5  items-center justify-end ">
            <View className="flex flex-row w-full h-1/3 mb-1 bg-white border-2 border-gray-1/100 rounded-lg">
              <View className="flex ml-2 w-auto h-full justify-center">
                <Pressable onPress={handleSearchSubmit}>
                  <SearchIcon width={26} height={27} />
                </Pressable>
              </View>
              <View className="flex w-3/4 h-full justify-center">
                <TextInput
                  className="font-inter-m text-s text-black"
                  placeholder="지역, 게스트하우스 이름"
                  placeholderTextColor="#BDBDBD"
                  onSubmitEditing={event => {
                    setSearchData({
                      ...searchData,
                      location: null,
                      guesthouseName: event.nativeEvent.text,
                    });
                  }}
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
                  {date.checkinDate && date.checkoutDate ? (
                    <View className="flex w-3/4 h-full justify-center">
                      <Text className="font-inter-m text-sm text-black">
                        {`${date.checkinDate} ~ ${date.checkoutDate}`}
                      </Text>
                    </View>
                  ) : (
                    <View className="flex w-3/4 h-full justify-center">
                      <Text className="font-inter-m text-sm text-gray-2">
                        {' '}
                        날짜 선택
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          </View>
          <View className="flex w-full h-1/4 justify-end">
            <Text className="font-inter-m text-sm text-gray-2">{location}</Text>
          </View>
        </View>
        <FlatList
          keyboardShouldPersistTaps="handled"
          className="w-11/12"
          data={guesthousSampleData?.flatMap(data => data)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                dispatch(setGuesthouseId(item.guesthouseId ?? 0));
                navigation.navigate('GuesthouseDetailsNavigator', {
                  screen: 'GuesthouseDetails',
                });
              }}
            >
              <SearchResultList
                guesthouseId={item.guesthouseId}
                guesthouseName={item.guesthouseName}
                address={item.address}
                location={item.location}
                price={item.price}
                phone={item.phone}
                rating={item.rating}
                imageBase64={item.imageBase64}
                mood={item.mood}
              />
            </Pressable>
          )}
          keyExtractor={item => (item?.guesthouseId ?? 0).toString()}
        />
      </View>
    </SafeAreaView>
  );
}
