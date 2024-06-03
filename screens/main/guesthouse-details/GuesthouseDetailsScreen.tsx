import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LocalSvg from '../../../assets/images/icon_local.svg';
import PhoneSVG from '../../../assets/images/icon_phone.svg';
import CalendarSVG from '../../../assets/icon/calendar.svg';
import MbtiCheck from '../../../components/edit-page/MbtiCheck';
import { GuesthouseDetailsStackScreenProps } from '../../../navigation/types';
import RatingStarsDisplay from '../../../components/gesthouse-detail/RatingStarsDisplay';
import GoFront from '../../../assets/images/icon_goback.svg';

const screenHeight = Dimensions.get('window').height;

const guesthouseData = {
  guesthouse_id: 123,
  guesthouse_name: '낯선하루',
  address: '123 Beach St, Jungmun',
  location: '중문',
  price: 50000,
  phone: '010-1234-5678',
  rating: 3.5,
  imageBase64: 'asdfsdfsdfsdfsdfsdfg',
  mood: '여유로운',
};

const membersData = {
  guesthouse_id: 123,
  guesthouse_name: '낯선하루',
  members: [
    {
      user_id: 456,
      username: 'Jane Doe',
      nickname: 'jane',
      mbti: 'ENFP',
    },
    {
      user_id: 789,
      username: 'John Smith',
      nickname: 'john',
      mbti: 'INTJ',
    },
  ],
};

const reservationRecords = [
  {
    reservation_id: 123456,
    user_id: 456,
    guesthouse_id: 123,
    checkin_date: '2024-05-25 14:00:00',
    checkout_date: '2024-05-26 12:00:00',
  },
  {
    reservation_id: 223344,
    user_id: 456,
    guesthouse_id: 11415,
    checkin_date: '2024-06-01 14:00:00',
    checkout_date: '2024-06-05 12:00:00',
  },
];

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[dayOfWeek];
};

export default function GuesthouseDetailsScreen({
  // route와 navigation 사용 안할 시 제거해주세요.

  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: GuesthouseDetailsStackScreenProps<'GuesthouseDetails'>) {
  const guesthouse = guesthouseData;
  const { members } = membersData;
  const reservation = reservationRecords[0];
  const checkinDate = reservation.checkin_date.split(' ')[0];
  const checkoutDate = reservation.checkout_date.split(' ')[0];
  const checkinDayOfWeek = getDayOfWeek(checkinDate);
  const checkoutDayOfWeek = getDayOfWeek(checkoutDate);
  // const { guesthouseId } = route.params;

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <ScrollView className="bg-gray-4">
        <View
          className="w-full flex justify-start items-center bg-white"
          style={{
            height: (screenHeight * 7) / 10,
          }}
        >
          <View className=" w-full justify-center items-center h-1/2 bg-slate-500 shadow-lg shadow-black">
            <View className="flex justify-center items-center shadow-inner shadow-black">
              <Text className="text-5xl text-white">여기 사진이 들가야함</Text>
            </View>
          </View>
          <View className=" h-2/5 w-full justify-start items-center pt-8 px-4">
            <Text className="w-full mb-4 text-2xl font-inter-b text-black text-left ">
              {guesthouse.guesthouse_name}
            </Text>
            <View className="w-full h-1/6 flex-row justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-start items-center">
                <LocalSvg
                  height="100%"
                  width="10%"
                  preserveAspectRatio="none"
                />
                <Text className="text-lg font-inter-r text-black ml-4">
                  {guesthouse.address}
                </Text>
              </View>
              <Text className=" underline text-sm font-inter-r text-black">
                지도보기
              </Text>
            </View>
            <View className="w-full h-1/6 flex-row justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-start items-center">
                <PhoneSVG height="50%" width="5%" preserveAspectRatio="none" />
                <Text className="text-lg font-inter-r text-black ml-4">
                  {guesthouse.phone}
                </Text>
              </View>
            </View>
            <View className="w-full h-1/5 mt-4 flex-row justify-between items-center">
              <View className="flex-row border border-gray-3 p-2 h-full justify-start items-center">
                <CalendarSVG width="12.5%" />
                <Text className="text-sm font-inter-r text-black ml-4">
                  {`${checkinDate} (${checkinDayOfWeek}) ~ ${checkoutDate} (${checkoutDayOfWeek}) - 1박`}
                </Text>
              </View>
            </View>
            <Text className="mt-4 w-full text-left text-sm font-inter-r text-black-50%">
              예약취소가능
            </Text>
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
          className="w-full mt-1 justify-between bg-white py-6 px-4"
          style={{
            height: (screenHeight * 2) / 6,
          }}
        >
          <View className="justify-center items-start">
            <Text className=" w-full text-left text-xl font-inter-b text-black">
              예약자 MBTI
            </Text>
            <View className="flex-row justify-start items-center mt-4">
              {members.map(member => (
                <MbtiCheck key={member.user_id} mbti={member.mbti} />
              ))}
              {members.length >= 3 && (
                <Pressable>
                  <GoFront width="10%" height="100%" />
                </Pressable>
              )}
            </View>
          </View>
          <Pressable
            className="my-4 bg-primary-2 items-center justify-center w-full shadow-black drop-shadow-xl"
            style={{ height: (screenHeight * 1) / 14 }}
            onPress={() => navigation.navigate('Reservation', { guesthouseId })}
          >
            <Text className="font-inter-b text-lg text-white">예약하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
