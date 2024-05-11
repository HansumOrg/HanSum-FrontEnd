import React, { useState, useEffect } from 'react';
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
import data from '../../../data.json';

interface Reservation {
  reservation_id: number;
  user_id: number;
  guesthouse_id: number;
  checkin_date: string;
  checkout_date: string;
}

interface User {
  user_id: number;
  login_id: string;
  password: string;
  username: string;
  phone: string;
  sex: string;
  birthday: string;
  nickname: string;
  mbti: string;
  user_agreement: number;
  interested_location: string[];
  interest_hobby: string[];
  interested_food: string[];
}

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

interface ReservationBoxProps {
  navigation: MyPageStackScreenProps<'MyPage'>['navigation'];
  reservation: Reservation;
  guesthouse: Guesthouse;
}

function DateCheck({ checkin_date, checkout_date }: Reservation): number {
  const today = new Date();
  const checkin = new Date(checkin_date);
  const checkout = new Date(checkout_date);
  let status = 0;
  if (today < checkin) {
    status = 0;
  } else if (today >= checkin && today < checkout) {
    status = 1;
  } else {
    status = 2;
  }
  return status;
}

function ReservationBox(props: ReservationBoxProps) {
  const { navigation, reservation, guesthouse } = props;
  const [dateState, setDateState] = useState(0); // 0: 예약확정, 1: 이용중, 2: 이용완료
  useEffect(() => {
    setDateState(DateCheck(reservation));
  }, [reservation]);
  return (
    <View className="flex bg-white m-2 h-[130px] w-[365px] rounded-md shadow-lg shadow-black/100">
      <View className="flex flex-row h-full w-full rounded-l-md">
        <View className="flex flex-col p-2 w-2/3 h-full ">
          <Text className="font-inter-m py-1 text-xl text-black">
            {guesthouse.guesthouse_name}
          </Text>
          <View className="flex flex-col w-full h-1/3 ">
            <View className="flex flex-row w-full h-auto">
              <LocalIcon width={12.8} height={16} />
              <Text className="font-inter-r text-sm px-1 text-black">
                {guesthouse.location}
              </Text>
            </View>
            <View className="flex flex-row py-1 w-full h-full">
              <PhoneIcon width={16} height={16} />
              <Text className="font-inter-m px-1 text-sm text-black">
                {guesthouse.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
              </Text>
            </View>
          </View>
          {dateState !== 2 ? (
            <View className="flex flex-col w-full h-auto">
              <View className="flex flex-row w-2/3 justify-between">
                <Text className="font-inter-m text-sm text-gray-2">
                  Check-in
                </Text>
                <Text className="font-inter-m text-sm text-gray-2">
                  {reservation.checkin_date.split(' ')[1]}
                </Text>
              </View>
              <View className="flex flex-row w-2/3 justify-between">
                <Text className="font-inter-m text-sm text-gray-2">
                  Check-out
                </Text>
                <Text className="font-inter-m text-sm text-gray-2">
                  {reservation.checkout_date.split(' ')[1]}
                </Text>
              </View>
            </View>
          ) : (
            <Pressable onPress={() => navigation.navigate('Reviews')}>
              <View className="flex flex-col my-2 w-[270px] h-1/2 bg-gray-3 rounded-lg justify-center items-center">
                <Text className="font-inter-m text-lg text-black">
                  후기 작성
                </Text>
              </View>
            </Pressable>
          )}
        </View>
        <View className="flex w-1/3 flex-row h-full">
          {dateState === 0 ? (
            <View className="flex flex-row w-full h-full">
              <View className="flex w-2/5 h-full bg-primary-1 justify-center items-center">
                <Pressable
                  onPress={() => navigation.navigate('EditProfileNavigator')}
                >
                  <AddProfileIcon width={40} height={40} />
                </Pressable>
              </View>
              <View className="flex w-3/5 h-full rounded-r-md bg-primary-2 justify-center items-center">
                <Text className="font-inter-sb text-lg text-white">
                  예약{'\n'}확정
                </Text>
              </View>
            </View>
          ) : null}
          {dateState === 1 ? (
            <View className="flex flex-row w-full h-full">
              <View className="flex w-2/5 h-full bg-white justify-center items-center" />
              <View className="flex w-3/5 h-full rounded-r-md bg-gray-2 justify-center items-center">
                <Text className="font-inter-sb text-lg text-white">이용중</Text>
              </View>
            </View>
          ) : null}
          {dateState === 2 ? (
            <View className="flex flex-row w-full h-full justify-end">
              <View className="flex w-3/5 h-full rounded-r-md bg-point justify-center items-center">
                <Text className="font-inter-sb text-lg text-white">
                  이용{'\n'}완료
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  const userId = 1;
  const userData: User[] = data.user;
  const reservationData: Reservation[] = data.reservation;
  const guesthouseData: Guesthouse[] = data.guesthouse;
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen flex items-center bg-white">
        <View className="flex flex-row w-11/12 h-auto justify-between items-center  py-2">
          <Text className="font-inter-b w-5/6 text-2xl text-black">
            마이페이지
          </Text>
          <Pressable onPress={() => navigation.navigate('Notifications')}>
            <NoticeIcon width={29} height={29} />
          </Pressable>
        </View>
        <View className="flex flex-col w-11/12 h-1/4">
          <View className="flex flex-row w-auto h-1/5 justify-between items-end">
            <View className="flex flex-col h-full justify-end">
              <Text className="font-inter-b text-md text-black">
                {userData.find(user => user.user_id === userId)?.username ??
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
              <Pressable
                className="px-1"
                onPress={() => navigation.navigate('Logout')}
              >
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
            <ScrollView
              className="flex w-full h-full"
              showsVerticalScrollIndicator={false}
            >
              {reservationData
                .filter(reservation => reservation.user_id === userId)
                .map(reservation => (
                  <ReservationBox
                    reservation={reservation}
                    guesthouse={guesthouseData[reservation.guesthouse_id - 1]}
                    key={reservation.reservation_id}
                    navigation={navigation}
                  />
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
