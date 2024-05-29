import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import SearchIcon from '../../../assets/images/icon_search.svg';
import CalendarIcon from '../../../assets/images/icon_calendar.svg';
import MoreIcon from '../../../assets/images/icon_goback.svg';
import FilterIcon from '../../../assets/images/icon_filter.svg';
import { SearchResultProps } from '../../../types';

export default function SearchScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: SearchStackScreenProps<'Search'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
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
                      const searchProps: SearchResultProps = {
                        location: '중문',
                        checkin_date: '2024-05-10',
                        checkout_date: '2024-05-20',
                        guesthouse_name: event.nativeEvent.text,
                        mood: '액티비티가 다양한',
                        facility: '수영장',
                        min_price: 1,
                        max_price: 10,
                      };
                      navigation.navigate('SearchResult', { ...searchProps });
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
                    <Text className="font-inter-m text-md text-gray-2">
                      {' '}
                      날짜 선택
                    </Text>
                  </View>
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
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    제주공항 서부(용담, 도두, 연동, 노형동)
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    제주공항 동부(제주시청, 탑동, 건입동)/추자도
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    서귀포시/중문/모슬포
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    이호테우/하귀/애월/한림/협재
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    함덕/김녕/세화
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
              <View className="flex flex-col w-full h-auto py-3">
                <View className="flex flex-row w-full h-auto justify-between">
                  <Text className="font-inter-r inter-sm text-black">
                    남원/표선/성산
                  </Text>
                  <MoreIcon width={23} height={22} />
                </View>
                <View className="flex w-full py-1 border-b border-gray-2" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
