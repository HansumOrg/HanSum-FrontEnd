import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  BackHandler,
} from 'react-native';
import { GuesthouseDetailsStackScreenProps } from '../../../navigation/types';
import LocalSvg from '../../../assets/images/icon_local.svg';
import PhoneSVG from '../../../assets/images/icon_phone.svg';
import { ReservationRecord } from '../../../types';
import dummyImage from '../../../assets/images/dummy_img';

const screenHeight = Dimensions.get('window').height;

const reservation: ReservationRecord = {
  guesthouse_name: '서점 숙소',
  guesthouse_address: '제주시 조천읍 북촌리 283',
  guesthouse_phone: '010-1234-5678',
  checkin_date: '2024-03-30T15:00:00',
  checkout_date: '2024-03-31T11:00:00',
  nights: 1,
};
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
export default function ReservationCompleteScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: GuesthouseDetailsStackScreenProps<'ReservationComplete'>) {
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
  const [imageError, setImageError] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className=" h-screen bg-gray-1 gap-1 flex justify-start items-center">
        <View className="flex justify-start h-3/5 w-full bg-white items-center  py-4 px-4">
          <Text className="font-inter-b w-full text-left text-xl2 mt-4 text-black">
            {reservation.guesthouse_name}
          </Text>
          <Text className="font-inter-b  w-full text-left text-xl2 text-black">
            예약이 완료되었습니다.
          </Text>
          <View className="flex-row h-3/5 w-full justify-center items-center mt-4 rounded-lg mb-4">
            {dummyImage && !imageError ? (
              <Image
                source={{ uri: dummyImage }}
                className="w-full h-full rounded-lg"
                onError={() => setImageError(true)}
              />
            ) : (
              <Text className="text-white font-inter-b text-lg">
                이미지 로드를 실패했습니다.
              </Text>
            )}
          </View>
          <View className="flex-row justify-center items-center w-full h-1/6 bg-white rounded-lg">
            <View className="flex-row justify-center items-center w-[86%] h-full bg-gray-1 rounded-lg ">
              <View className="flex-row absolute h-[78.38%] w-[0.58%] bg-gray-3" />
              <View className="flex w-[50%] h-full justify-nomal items-start p-2  rounded-l-lg">
                <Text className=" font-inter-m text-sss text-black ">
                  Check In
                </Text>
                <Text className="font-inter-m text-ss text-black ">
                  {formatDate(reservation.checkin_date)}
                </Text>
              </View>
              <View className="flex w-[50%] h-full justify-nomal items-start p-2 ">
                <Text className=" font-inter-m text-sss text-black ">
                  Check Out
                </Text>
                <Text className="mr-1 font-inter-m text-ss text-black ">
                  {formatDate(reservation.checkout_date)}
                </Text>
              </View>
            </View>
            <View className="flex justify-center items-center h-full bg-primary-2 rounded-r-lg">
              <Text className=" font-inter-sb text-lg text-white m-2">
                {reservation.nights}박
              </Text>
            </View>
          </View>
        </View>

        <View className="flex justify-start h-2/5 w-full bg-white items-center pt-4">
          <View className="flex justify-start items-center h-3/5 w-full px-4 py-4">
            <Text className="w-full text-left font-inter-b text-md text-black mb-4">
              숙소 정보
            </Text>
            <View className="flex-row w-full h-1/6 justify-start items-center mt-2">
              <LocalSvg height="95%" width="7%" />
              <Text className="ml-2 font-inter-r text-sm text-black">
                {reservation.guesthouse_address}
              </Text>
            </View>
            <View className="flex-row w-full h-1/6 justify-start items-center mt-2">
              <PhoneSVG height="95%" width="7%" />
              <Text className="ml-2 font-inter-r text-sm text-black">
                {reservation.guesthouse_phone}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          className=" absolute z-10 bottom-0 mb-[2%] bg-primary-2 items-center justify-center w-full h-1/5 shadow-black drop-shadow-xl"
          style={{ height: (screenHeight * 1) / 14 }}
          onPress={() =>
            navigation.navigate('MyPageNavigator', { screen: 'MyPage' })
          }
        >
          <Text className="font-inter-b text-lg text-white">예약하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
