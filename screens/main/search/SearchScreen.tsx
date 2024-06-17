import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SearchStackScreenProps } from '../../../navigation/types';
import SearchIcon from '../../../assets/images/icon_search.svg';
import CalendarIcon from '../../../assets/images/icon_calendar.svg';
import MoreIcon from '../../../assets/images/icon_goback.svg';
import FilterIcon from '../../../assets/images/icon_filter.svg';
import { useSearchContext } from '../../../components/search-page/SearchContext';
import { SearchResultProps } from '../../../types';
import { useSearch, useAppSelector } from '../../../api/hooks';
import {
  selectSearchName,
  selectLocation,
  selectMood,
  selectFacility,
} from '../../../api/selectors';

export default function SearchScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: SearchStackScreenProps<'Search'>) {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content'); // 상태 바 스타일을 설정
      return () => {
        StatusBar.setBarStyle('dark-content'); // 화면을 벗어날 때 기본 상태로 되돌림
        StatusBar.setTranslucent(false);
      };
    }, []),
  );
  // const location = useAppSelector(selectLocation);
  // const name = useAppSelector(selectSearchName);
  const mood = useAppSelector(selectMood);
  const facility = useAppSelector(selectFacility);

  const initialData = {
    location: '',
    guesthouse_name: '',
    mood,
    facility,
  };
  const [searchData, setSearchData] = useState(initialData);

  const searchContext = useSearchContext();
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="h-screen bg-white flex justify-center items-center">
        <View className="flex w-11/12 h-full">
          <View className="flex w-full h-1/4 justify-end">
            <View className="flex w-full h-4/5  items-center justify-end ">
              <View className="flex flex-row w-full h-1/3 mb-1 bg-white border-2 border-gray-1/100 rounded-lg">
                <View className="flex ml-2 w-auto h-full justify-center">
                  <SearchIcon width={26} height={27} />
                </View>
                <View className="flex w-3/4 h-full justify-center">
                  <TextInput
                    className="font-inter-m text-md text-black"
                    placeholder="지역, 게스트하우스 이름"
                    placeholderTextColor="#BDBDBD"
                    onSubmitEditing={event => {
                      setSearchData({
                        ...searchData,
                        guesthouse_name: event.nativeEvent.text,
                      });
                      navigation.navigate('SearchResult');
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
                onPress={() => {
                  navigation.navigate('Calendar');
                }}
              >
                <View className="flex flex-row w-full h-full mt-1 bg-white border-2 border-gray-1/100 rounded-lg">
                  <View className="flex ml-2 w-auto h-full justify-center">
                    <CalendarIcon width={26} height={27} />
                  </View>
                  {searchContext.searchState.checkin_date &&
                  searchContext.searchState.checkout_date ? (
                    <View className="flex w-3/4 h-full justify-center">
                      <Text className="font-inter-m text-md text-black">
                        {`${searchContext.searchState.checkin_date} ~ ${searchContext.searchState.checkout_date}`}
                      </Text>
                    </View>
                  ) : (
                    <View className="flex w-3/4 h-full justify-center">
                      <Text className="font-inter-m text-md text-gray-2">
                        {' '}
                        날짜 선택
                      </Text>
                    </View>
                  )}
                </View>
              </Pressable>
            </View>
            <View className="flex w-full h-1/4 justify-end">
              <Text className="font-inter-b text-lg text-black">
                제주도 여행지
              </Text>
            </View>
          </View>
          <View className="flex w-full h-full my-2">
            <View className="flex w-full h-1/2">
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    setSearchData({
                      ...searchData,
                      guesthouse_name: null,
                      location: '용담,도두,연동,노형동',
                    });
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    제주공항 서부(용담, 도두, 연동, 노형동)
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    searchContext.setSearchState(
                      (prevState: SearchResultProps) => ({
                        ...prevState,
                        location: '제주시청,탑동,건입동,추자도',
                      }),
                    );
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    제주공항 동부(제주시청, 탑동, 건입동)/추자도
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    searchContext.setSearchState(
                      (prevState: SearchResultProps) => ({
                        ...prevState,
                        location: '서귀포시,중문,모슬포',
                      }),
                    );
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    서귀포시/중문/모슬포
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    searchContext.setSearchState(
                      (prevState: SearchResultProps) => ({
                        ...prevState,
                        location: '이호테우,하귀,애월,한림,협재',
                      }),
                    );
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    이호테우/하귀/애월/한림/협재
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    searchContext.setSearchState(
                      (prevState: SearchResultProps) => ({
                        ...prevState,
                        location: '남원,표선,성산',
                      }),
                    );
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    함덕/김녕/세화
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <Pressable
                  className="flex flex-row w-full h-auto justify-between"
                  onPress={() => {
                    searchContext.setSearchState(
                      (prevState: SearchResultProps) => ({
                        ...prevState,
                        location: '남원/표선/성산',
                      }),
                    );
                    navigation.navigate('SearchResult');
                  }}
                >
                  <Text className="font-inter-r inter-sm text-black">
                    남원/표선/성산
                  </Text>
                  <MoreIcon width={23} height={22} />
                </Pressable>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
