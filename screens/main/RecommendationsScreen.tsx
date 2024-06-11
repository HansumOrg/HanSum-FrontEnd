import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MainTabScreenProps } from '../../navigation/types';
import ReservationItem from '../../components/common/ReservationItem';
import GuesthouseRecommList from '../../components/common/GuesthouseRecommList';
import AdBanner from '../../components/common/AdBanner';
import { useGetUserInfoQuery } from '../../api/endpoints/userEndpoints';
import { useGetReservationStatusQuery } from '../../api/endpoints/reservationEndpoints';
import { useGetRecommendationQuery } from '../../api/endpoints/recommendationEndpoints';
import { useAppSelector, useRefresh } from '../../api/hooks';

export default function RecommendationsScreen({
  route,
  navigation,
}: MainTabScreenProps<'Recommendations'>) {
  const access = useAppSelector(state => state.auth.access);
  const { data: userData, refetch: refetchUserData } = useGetUserInfoQuery();
  const {
    data: reservationData,
    error: reservationError,
    isLoading,
  } = useGetReservationStatusQuery();
  const userMbti = userData?.mbti ?? '';
  const { data: recommendationData, error: recommendationError } =
    useGetRecommendationQuery(userMbti);

  const { handleRefresh } = useRefresh();

  const handleSeeMore = () => {
    navigation.navigate('MyPageNavigator', {
      screen: 'MyPage',
    });
  };

  useEffect(() => {
    const refetchData = async () => {
      try {
        await refetchUserData();
      } catch (error) {
        console.error('Failed to refetch user data:', error);
      }
    };

    if (access) {
      void refetchData();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      return () => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setTranslucent(false);
      };
    }, []),
  );
  console.log(access);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View className="relative h-screen w-screen flex justify-center items-center bg-white">
        <View className="w-full h-full">
          <View className="flex-row mt-4 w-full justify-start items-center">
            <View className="ml-4 justify-center items-center w-[20%] px-4 border rounded-full">
              <Text className="text-black">{userData?.mbti}</Text>
            </View>
            <Text className="ml-2 text-md text-left font-inter-m text-black">
              {userData?.nickname}님을 위한 게스트하우스 추천
            </Text>
          </View>
          <View className="mt-4 h-2/6">
            {recommendationData ? (
              <GuesthouseRecommList
                navigation={navigation}
                route={route}
                recommendation={recommendationData?.recommendations}
              />
            ) : null}
          </View>
          <View className="pt-4 overflow-y-auto h-3/5">
            <View className="h-1/2 w-full">
              <View className="flex-row justify-between px-2 pt-2 border-t border-gray-2 mx-2">
                <Text className="text-sm font-inter-b text-black mb-5">
                  {userData?.nickname}님의 예약 현황
                </Text>
                <Pressable onPress={handleSeeMore}>
                  <Text className="text-sss font-inter-r text-black mb-5">
                    더보기
                  </Text>
                </Pressable>
              </View>
              <View className="h-4/5 w-[100%] items-center px-4">
                {reservationData ? (
                  reservationData.reservationRecords
                    .slice(0, 2)
                    .map(item => (
                      <ReservationItem key={item.reservationId} item={item} />
                    ))
                ) : (
                  <Text className="text-center text-gray-500">
                    현재 예약중인 숙소가 없습니다.
                  </Text>
                )}
              </View>
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
