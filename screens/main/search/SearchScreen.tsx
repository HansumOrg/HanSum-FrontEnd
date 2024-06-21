import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import { useSearch, useAppSelector, useAppDispatch } from '../../../api/hooks';
import { selectDate, selectSearchParam } from '../../../api/selectors';
import { setSearchName, setLocation } from '../../../api/slices/searchSlice';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';

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

  const { handleSearch } = useSearch();
  const dispatch = useAppDispatch();
  const date = useAppSelector(selectDate);
  const searchParam = useAppSelector(selectSearchParam);
  const initialData = {
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
      console.log(res);
      console.log('search failed');
    } else {
      navigation.navigate('SearchResult');
    }
  };

  useEffect(()=>{
    console.log(searchData.guesthouseName);
  },[searchData]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      handleSearchSubmit();
    }
  }, [searchData.location]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="h-screen bg-white flex justify-center items-center">
        <View className="flex w-11/12 h-full">
          <View className="flex w-full h-1/4 justify-end">
            <View className="flex w-full h-4/5  items-center justify-end ">
              <View className="flex flex-row w-full h-1/3 mb-1 bg-white border-2 border-gray-1/100 rounded-lg">
                <View className="flex ml-2 w-auto h-full justify-center">
                  <Pressable onPress={handleSearchSubmit}>
                    <SearchIcon width={26} height={27} />
                  </Pressable>
                </View>
                <View className="flex w-3/4 h-full justify-center">
                  <TextInput
                    className="font-inter-m text-sm text-black"
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
                onPress={() => {
                  navigation.navigate('Calendar');
                }}
              >
                <View className="flex flex-row w-full h-full mt-1 bg-white border-2 border-gray-1/100 rounded-lg">
                  <View className="flex ml-2 w-auto h-full justify-center">
                    <CalendarIcon width={26} height={27} />
                  </View>
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
                      location: '용담,도두,연동,노형동',
                      guesthouseName: null,
                    });
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
                    setSearchData({
                      ...searchData,
                      location: '제주시청,탑동,건입동,추자도',
                      guesthouseName: null,
                    });
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
                    setSearchData({
                      ...searchData,
                      location: '서귀포시,중문,모슬포',
                      guesthouseName: null,
                    });
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
                    setSearchData({
                      ...searchData,
                      location: '이호테우,하귀,애월,한림,협재',
                      guesthouseName: null,
                    });
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
                    setSearchData({
                      ...searchData,
                      location: '함덕,김녕,세화',
                      guesthouseName: null,
                    });
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
                    setSearchData({
                      ...searchData,
                      location: '남원,표선,성산',
                      guesthouseName: null,
                    });
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
