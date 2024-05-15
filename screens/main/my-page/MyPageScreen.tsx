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
import data from '../../../data.json';
import { User, Reservation, Guesthouse } from '../../../types';
import ReservationBox from '../../../components/my-page/ReservationBox';

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
        <View className="flex flex-row w-11/12 h-auto justify-between items-center py-2">
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
        <View className="flex flex-col w-11/12 h-auto">
          <Text className="font-inter-b mt-10 text-lg text-black">내 예약</Text>
        </View>
        <View className="flex flex-grow w-full h-1/3">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex w-full h-auto mb-20">
              {reservationData
                .filter(reservation => reservation.user_id === userId)
                .map(reservation => (
                  <ReservationBox
                    reservation={reservation}
                    guesthouse={guesthouseData[reservation.guesthouse_id - 1]}
                    key={reservation.reservation_id}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
