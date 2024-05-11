import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import NoticeIcon from '../../../assets/images/icon_notice.svg';
import MoreIcon from '../../../assets/images/icon_more.svg';
import LocalIcon from '../../../assets/images/icon_local.svg';
import PhoneIcon from '../../../assets/images/icon_phone.svg';
import AddProfileIcon from '../../../assets/images/icon_addProfile.svg';

const Reservation = [
  {
    reservation_id: 1,
    user_id: 1,
    guesthouse_id: 2,
    checkin_date: '2024-06-10 15:00:00',
    checkout_date: '2024-06-15 10:00:00',
  },
  {
    reservation_id: 2,
    user_id: 1,
    guesthouse_id: 1,
    checkin_date: '2024-07-01 15:00:00',
    checkout_date: '2024-07-05 10:00:00',
  },
];

const User = [
  {
    user_id: 1,
    login_id: 'john_doe',
    password: 'hashed_password',
    username: 'John Doe',
    phone: '01012345678',
    sex: 'M',
    birthday: '1990/01/01',
    nickname: 'Johnny',
    mbti: 'INTJ',
    user_agreement: 1,
    interested_location: ['성산일출봉', '만장굴'],
    interest_hobby: ['독서', '요리'],
    interested_food: ['고기국수', '해물라면'],
  },
  {
    user_id: 2,
    login_id: 'jane_smith',
    password: 'hashed_password',
    username: 'Jane Smith',
    phone: '01098765432',
    sex: 'F',
    birthday: '1992/02/14',
    nickname: 'Janie',
    mbti: 'ENFP',
    user_agreement: 1,
    interested_location: ['함덕', '천지연 폭포'],
    interest_hobby: ['캠핑', '등상'],
    interested_food: ['감귤', '흑돼지'],
  },
];

const Guesthouse = [
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
];

const ReservationBox = ({ reservation }) => (
  <View className="flex bg-white m-2 w-6/5 h-[130px] w-[365px] rounded-md shadow-lg shadow-black/100">
    <View className="flex flex-row h-full w-full rounded-l-md">
      <View className="flex flex-col p-2 w-4/6 h-full">
        <Text className="font-inter-m py-1 text-xl text-black">
          {
            Guesthouse.find(
              guesthouse =>
                guesthouse.guesthouse_id === reservation.guesthouse_id,
            )?.guesthouse_name
          }
        </Text>
        <View className="flex flex-row py-1 w-full h-auto">
          <LocalIcon width={12.8} height={16} />
          <Text className="font-inter-r text-sm px-1 text-black">
            {
              Guesthouse.find(
                guesthouse =>
                  guesthouse.guesthouse_id === reservation.guesthouse_id,
              )?.address
            }
          </Text>
        </View>
        <View className="flex flex-row py-1 w-full h-auto">
          <PhoneIcon width={16} height={16} />
          <Text className="font-inter-m px-1 text-sm text-black">
            {Guesthouse.find(
              guesthouse =>
                guesthouse.guesthouse_id === reservation.guesthouse_id,
            )?.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
          </Text>
        </View>
        <View className="flex flex-row w-2/3 justify-between">
          <Text className="font-inter-m text-sm text-gray-2">Check-in</Text>
          <Text className="font-inter-m text-sm text-gray-2">
            {reservation.checkin_date.split(' ')[1]}
          </Text>
        </View>
        <View className="flex flex-row w-2/3 justify-between">
          <Text className="font-inter-m text-sm text-gray-2">Check-out</Text>
          <Text className="font-inter-m text-sm text-gray-2">
            {reservation.checkout_date.split(' ')[1]}
          </Text>
        </View>
      </View>
      <View className="flex w-1/3 flex-row h-full bg-yellow-300">
        <View className="flex w-2/5 h-full bg-primary-1 justify-center items-center">
          <Pressable>
            <AddProfileIcon width={40} height={40} />
          </Pressable>
        </View>
        {/* <View className="flex w-2/5 h-full bg-white justify-center items-center" /> */}
        <View className="flex w-3/5 h-full rounded-r-md bg-primary-2 justify-center items-center">
          <Text className="font-inter-sb text-lg text-white">
            예약{'\n'}확정
          </Text>
        </View>
        {/* <View className="flex w-3/5 h-full rounded-r-md bg-gray-3 justify-center items-center">
          <Text className="font-inter-sb text-lg text-white">예약중</Text>
        </View> */}
        {/* <View className="flex w-3/5 h-full rounded-r-md bg-point justify-center items-center">
          <Text className="font-inter-sb text-lg text-white">
            이용{'\n'}완료
          </Text>
        </View> */}
      </View>
    </View>
  </View>
);

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  const userId = 1;
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen flex items-center bg-white">
        <View className="flex flex-row w-11/12 h-auto justify-between items-center  py-2">
          <Text className="font-inter-b w-5/6 text-2xl text-black">
            마이페이지
          </Text>
          <Pressable>
            <NoticeIcon width={29} height={29} />
          </Pressable>
        </View>
        <View className="flex flex-col w-11/12 h-1/4">
          <View className="flex flex-row w-auto h-1/5 justify-between items-end">
            <View className="flex flex-col h-full justify-end">
              <Text className="font-inter-b text-md text-black">
                {User.find(user => user.user_id === userId)?.username ??
                  '사용자를 찾을 수 없습니다.'}
              </Text>
              <Text className="font-inter-m text-sm text-black/[.5]">
                Show profile
              </Text>
            </View>
            <Pressable className="px-1">
              <MoreIcon width={29} height={29} />
            </Pressable>
          </View>
          <View className="flex border-b" />
          <View className="flex flex-col w-full h-full">
            <View className="flex flex-row w-full h-1/4 justify-between items-end">
              <Text className="font-inter-m text-md text-black">고객센터</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">문의사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">공지사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-md text-black">로그아웃</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
          </View>
        </View>
        <View className="flex flex-col w-11/12 h-3/6">
          <View className="flex h-1/6 justify-end">
            <Text className="font-inter-b text-lg text-black">내 예약</Text>
          </View>
          <View className="flex w-full h-full my-4">
            <ScrollView className="flex w-full h-full">
              {Reservation.filter(
                reservation => reservation.user_id === userId,
              ).map(reservation => (
                <ReservationBox
                  reservation={reservation}
                  key={reservation.reservation_id}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
