import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import LocalSvg from '../../../assets/images/icon_local.svg';
import PhoneSVG from '../../../assets/images/icon_phone.svg';
import CalendarSVG from '../../../assets/icon/calendar.svg';
import MbtiCheck from '../../../components/edit-page/MbtiCheck';
import { GuesthouseDetailsStackScreenProps } from '../../../navigation/types';
import RatingStarsDisplay from '../../../components/gesthouse-detail/RatingStarsDisplay';
import GoFront from '../../../assets/images/icon_goback.svg';
import {
  SearchContextType,
  useSearchContext,
} from '../../../components/search-page/SearchContext';
import { useAppSelector } from '../../../api/hooks';
import {
  useGetGuesthouseDetailsQuery,
  useGetGuesthouseMembersQuery,
} from '../../../api/endpoints/guesthouseEndpoints';

const screenHeight = Dimensions.get('window').height;

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[dayOfWeek];
};

export default function GuesthouseDetailsScreen({
  // route와 navigation 사용 안할 시 제거해주세요.

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: GuesthouseDetailsStackScreenProps<'GuesthouseDetails'>) {
  const guesthouseIdState = useAppSelector(
    state => state.guesthouse.guesthouseId,
  );
  const {
    data: guesthouseData = {
      guesthouseName: '게스트하우스를 불러오지 못했습니다.',
      address: '',
      location: '',
      price: 0,
      phone: '',
      rating: 0,
      imageBase64: '',
      mood: '',
    },
  } = useGetGuesthouseDetailsQuery(guesthouseIdState ?? 0);
  const guesthouse = guesthouseData;
  const membersData = useGetGuesthouseMembersQuery(guesthouseIdState ?? 0);
  const { members } = membersData.data ?? { members: [] };
  const searchContext: SearchContextType = useSearchContext();
  const today: Date = new Date();
  const tomorrow: Date = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkinDate: string = searchContext.searchState.checkin_date
    ? searchContext.searchState.checkin_date.split(' ')[0]
    : today.toISOString().split('T')[0];
  const checkoutDate: string = searchContext.searchState.checkout_date
    ? searchContext.searchState.checkout_date.split(' ')[0]
    : tomorrow.toISOString().split('T')[0];
  const checkinDayOfWeek: string = getDayOfWeek(checkinDate);
  const checkoutDayOfWeek: string = getDayOfWeek(checkoutDate);
  const nights: number = Math.floor(
    (new Date(checkoutDate).getTime() - new Date(checkinDate).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content'); // 상태 바 스타일 설정
      StatusBar.setTranslucent(true); // 상태 바를 투명하게 설정
      StatusBar.setBackgroundColor('transparent'); // 상태 바 배경색 설정
      return () => {
        StatusBar.setBarStyle('default'); // 화면을 벗어날 때 기본 상태로 되돌림
        StatusBar.setTranslucent(false); // 기본 상태로 되돌림 // 기본 상태로 되돌림
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <ScrollView className="bg-gray-4" keyboardShouldPersistTaps="handled">
        <View
          className="w-full flex justify-start items-center bg-white"
          style={{
            height: (screenHeight * 7) / 10,
          }}
        >
          <View className=" w-full justify-center items-center h-1/2 bg-slate-500 shadow-lg shadow-black">
            <View className="flex justify-center h-full w-full items-center shadow-inner shadow-black">
              <Image
                source={{ uri: guesthouse.imageBase64 }}
                className="h-full w-full"
              />
            </View>
          </View>
          <View className=" h-2/5 w-full justify-start items-center pt-8 px-4">
            <Text className="w-full mb-4 text-2xl font-inter-b text-black text-left ">
              {guesthouse.guesthouseName}
            </Text>
            <View className="w-full h-1/6 flex-row justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-start items-center">
                <LocalSvg height="80%" width="10%" />
                <Text className="text-mdß font-inter-r text-black ml-4 flex">
                  {guesthouse.address}
                </Text>
              </View>
              <Text className=" underline text-sm font-inter-r text-black">
                지도보기
              </Text>
            </View>
            <View className="w-full h-1/6 flex-row justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-start items-center">
                <PhoneSVG height="80%" width="10%" />
                <Text className="text-lg font-inter-r text-black ml-4">
                  {guesthouse.phone}
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate('SearchNavigator', { screen: 'Calendar' });
              }}
              className="w-full mt-4 flex-row justify-between items-center"
            >
              <View className="flex-row border border-gray-3 p-2 h-full w-full  justify-start items-center">
                <CalendarSVG width="12.5%" />
                <Text
                  className="m-1 text-sm font-inter-r text-black ml-4 flex-shrink"
                  numberOfLines={3}
                >
                  {`${checkinDate} (${checkinDayOfWeek}) ~  ${checkoutDate} (${checkoutDayOfWeek}) - ${nights}박`}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          className="w-full mt-1 bg-white py-6 px-4"
          style={{
            height: screenHeight / 5,
          }}
        >
          <Text className=" text-xl font-inter-sb text-black">사용자 리뷰</Text>
          <View className="flex-row justify-start items-center mt-4">
            <Text className="text-4xl font-inter-r text-black">
              {guesthouse.rating}
            </Text>
            <Text className="text-4xl font-inter-r text-black-50%">/5</Text>
            <View className="ml-4 flex-row w-3/5 justify-center items-center">
              <RatingStarsDisplay rating={guesthouse.rating} />
            </View>
          </View>
        </View>
        <View
          className="w-full mt-1 justify-between bg-white py-6 "
          style={{
            height: (screenHeight * 2) / 6,
          }}
        >
          <View className="justify-center items-start mx-4">
            <Text className=" w-full text-left text-xl font-inter-b text-black">
              예약자 MBTI
            </Text>
            <View className="flex-row justify-start items-center mt-4">
              {members.map(member => (
                <MbtiCheck key={member.userId} mbti={member.mbti} />
              ))}
              {members.length >= 3 && (
                <Pressable>
                  <GoFront width="10%" height="100%" />
                </Pressable>
              )}
            </View>
          </View>
          <Pressable
            className="bg-primary-2 items-center justify-center w-screen shadow-black drop-shadow-xl"
            style={{ height: (screenHeight * 1) / 14 }}
            onPress={() => navigation.navigate('Reservation')}
          >
            <Text className="font-inter-b text-lg text-white">예약하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
