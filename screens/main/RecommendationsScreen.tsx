import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  BackHandler,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
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
  useEffect(() => {
    const handleBackPress = () =>
      // 백 버튼 누름을 처리하는 사용자 정의 로직
      // 기본 동작(예: 앱 종료)을 방지하려면 true를 반환
      // 기본 동작을 허용하려면 false를 반환
      true;
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      // 이벤트 리스너 제거됨
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  const handleSeeMore = () => {
    navigation.navigate('MyPageNavigator', {
      screen: 'MyPage',
    }); // 'ReservationList'는 다른 페이지의 이름입니다.
  };
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content'); // 상태 바 스타일을 설정
      return () => {
        StatusBar.setBarStyle('dark-content'); // 화면을 벗어날 때 기본 상태로 되돌림
        StatusBar.setTranslucent(false);
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View className="relative h-screen w-screen flex justify-center items-center bg-white">
        <View className="w-full h-full">
          <View className="flex-row mt-4 w-full justify-start items-center">
            <View className=" ml-4 justify-center items-center w-[20%] px-4 border rounded-full">
              <Text className=" text-black ">INFP</Text>
            </View>
            <Text className="ml-2 text-md text-left font-inter-m text-black">
              Username을 위한 게스트하우스 추천
            </Text>
          </View>
          <View className="mt-4 h-2/6 ">
            <GuesthouseRecommList navigation={navigation} route={route} />
          </View>
          <View className="pt-4 overflow-y-auto h-3/5">
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
              <View className=" h-4/5 w-[100%] items-center px-4">
                {reservationRecords.length > 0 ? (
                  reservationRecords
                    .slice(0, 2)
                    .map(item => (
                      <ReservationItem key={item.reservation_id} item={item} />
                    ))
                ) : (
                  <Text className="text-center text-gray-500">
                    현재 예약중인 숙소가 없습니다.
                  </Text>
                )}
              </View>
              {/* 만약 예약내역이 없으면 "현재 예약중인 숙소가 없습니다 출력" */}
              <View className="h-3/5 w-full justify-center items-center">
                <AdBanner />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
