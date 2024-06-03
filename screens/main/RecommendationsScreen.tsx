import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { MainTabScreenProps } from '../../navigation/types';
import ReservationItem from '../../components/common/ReservationItem';
import GuesthouseRecommList from '../../components/common/GuesthouseRecommList';
import AdBanner from '../../components/common/AdBanner';

const reservationRecords = [
  {
    reservation_id: 1,
    user_id: 1,
    guesthouse_id: 2,
    guesthouse_name: '서점 숙소',
    checkin_date: '2024-06-10 15:00:00',
    checkout_date: '2024-06-15 10:00:00',
  },
  {
    reservation_id: 2,
    user_id: 1,
    guesthouse_id: 3,
    guesthouse_name: '송당 온도',
    checkin_date: '2024-06-11 15:00:00',
    checkout_date: '2024-06-16 10:00:00',
  },
  {
    reservation_id: 3,
    user_id: 1,
    guesthouse_id: 4,
    guesthouse_name: '송당 온',
    checkin_date: '2024-06-01 15:00:00',
    checkout_date: '2024-06-16 10:00:00',
  },
  {
    reservation_id: 4,
    user_id: 1,
    guesthouse_id: 5,
    guesthouse_name: '송당 도',
    checkin_date: '2024-06-01 15:00:00',
    checkout_date: '2024-06-03 10:00:00',
  },
];

export default function RecommendationsScreen({
  // route와 navigation 사용 안할 시 제거해주세요.

  route,
  navigation,
}: MainTabScreenProps<'Recommendations'>) {
  const handleSeeMore = () => {
    navigation.navigate('MyPageNavigator'); // 'ReservationList'는 다른 페이지의 이름입니다.
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="relative h-screen w-screen flex justify-center items-center bg-white">
        <View className="w-full h-full">
          <View className="mt-4 h-2/6 ">
            <GuesthouseRecommList navigation={navigation} route={route} />
          </View>
          <View className="pt-1overflow-y-auto h-3/5">
            <View className="h-1/2 w-full">
              <View className="flex-row justify-between px-2 pt-2 border-t border-gray-2 mx-2">
                <Text className="text-sm font-inter-b text-black mb-5">
                  이한님의 예약 현황
                </Text>
                <Pressable onPress={handleSeeMore}>
                  <Text className="text-sss font-inter-r text-black mb-5">
                    더보기
                  </Text>
                </Pressable>
              </View>
              <View className=" h-4/5">
                {reservationRecords.slice(0, 2).map(item => (
                  <ReservationItem key={item.reservation_id} item={item} />
                ))}
              </View>
              <View className="h-1/2 w-full justify-center items-center">
                <AdBanner />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
