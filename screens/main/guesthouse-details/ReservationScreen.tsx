import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { GuesthouseDetailsStackScreenProps } from '../../../navigation/types';
import LocalSvg from '../../assets/images/icon_local.svg';
import PhoneSVG from '../../assets/images/icon_phone.svg';
import GoFront from '../../assets/images/icon_goback.svg';
import UnChecked from '../../components/Reservation/unchecked_rectangle.svg';
import Checked from '../../components/Reservation/checked_rectangle.svg';

interface ReservationRecord {
  guesthouse_name: string;
  guesthouse_address: string;
  guesthouse_phone: string;
  checkin_date: string;
  checkout_date: string;
  nights: number;
}

interface GuestInfo {
  nickname: string;
  name: string;
  mbti: string;
}

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
export default function ReservationScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: GuesthouseDetailsStackScreenProps<'Reservation'>) {
  const [agreeMbti, setAgreeMbti] = useState(false);
  const [agreeNickname, setAgreeNickname] = useState(false);

  const reservation: ReservationRecord = {
    guesthouse_name: '서점 숙소',
    guesthouse_address: '제주시 조천읍 북촌리 283',
    guesthouse_phone: '010-1234-5678',
    checkin_date: '2024-03-30T15:00:00',
    checkout_date: '2024-03-31T11:00:00',
    nights: 1,
  };

  const guestInfo: GuestInfo = {
    nickname: '이한이',
    name: '이나영',
    mbti: 'INFP',
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-gray-1 gap-1 flex justify-start items-center">
        <View className="flex justify-center h-[25%] w-full bg-white items-center py-4 px-2">
          <View className="flex-row justify-center items-center w-full h-full bg-white shadow-lg shadow-black rounded-lg">
            <View className="flex justify-start items-start w-[86%] h-full px-4 py-2 bg-white rounded-lg">
              <Text className="font-inter-r text-lg text-black ">
                {reservation.guesthouse_name}
              </Text>
              <View className="flex-row w-full h-1/6 justify-start items-center mt-2">
                <LocalSvg height="95%" width="7%" preserveAspectRatio="none" />
                <Text className="ml-2 font-inter-r text-sm text-black">
                  {reservation.guesthouse_address}
                </Text>
              </View>
              <View className="flex-row w-full h-1/6 justify-start items-center mt-2">
                <PhoneSVG height="95%" width="7%" preserveAspectRatio="none" />
                <Text className="ml-2 font-inter-r text-sm text-black">
                  {reservation.guesthouse_phone}
                </Text>
              </View>
              <View className="flex-row w-full h-2/6 justify-between items-center mt-2 bg-gray-1 rounded-xl">
                <View className="flex-row w-[45%] h-full justify-start items-center bg-gray-3 rounded-xl">
                  <View className="flex-row w-1/4 h-full justify-center items-center bg-gray-2 rounded-l-xl">
                    <Text className="mx-1 font-inter-m text-xxs text-black">
                      Check In
                    </Text>
                  </View>
                  <Text
                    className="ml-1 font-inter-m text-sss text-black flex-shrink"
                    numberOfLines={2}
                  >
                    {formatDate(reservation.checkin_date)}
                  </Text>
                </View>
                <View className="flex-row w-[45%] h-full justify-start items-center bg-gray-3 rounded-xl">
                  <View className="flex-row w-1/4 h-full justify-center items-center bg-gray-2 rounded-l-xl">
                    <Text className="mx-1 font-inter-m text-xxs text-black">
                      Check Out
                    </Text>
                  </View>
                  <Text
                    className="ml-1 font-inter-m text-sss text-black flex-shrink"
                    numberOfLines={2}
                  >
                    {formatDate(reservation.checkout_date)}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex justify-center items-center w-[14%] h-full bg-primary-2 rounded-r-lg">
              <Text className=" font-inter-sb text-lg text-white">
                {reservation.nights}박
              </Text>
            </View>
          </View>
        </View>
        <View className="flex justify-center h-1/5 w-full bg-white items-center px-2 py-4">
          <View className="flex justify-between items-start h-full w-full">
            <Text className=" mt-4 font-inter-sb text-md text-black">
              예약자 정보
            </Text>
            <View className="flex-row h-2/3 w-1/2 rounded-lg">
              <View className="justify-center items-start w-1/2">
                <Text className=" font-inter-m text-sm text-gray-2">
                  닉네임
                </Text>
                <Text className=" font-inter-m text-sm text-gray-2">이름</Text>
                <Text className=" font-inter-m text-sm text-gray-2">MBTI</Text>
              </View>
              <View className="justify-center items-start w-1/2">
                <Text className=" font-inter-m text-sm text-black">
                  {guestInfo.nickname}
                </Text>
                <Text className=" font-inter-m text-sm text-black">
                  {guestInfo.name}
                </Text>
                <Text className=" font-inter-m text-sm text-black">
                  {guestInfo.mbti}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex justify-center h-2/5 w-full bg-white items-center">
          <View className="flex justify-start items-center h-3/5 w-full px-2 py-4">
            <Text className="w-full text-left font-inter-sb text-md text-black">
              이용약관 동의
            </Text>
            <View className="flex-row w-full h-2/6 justify-between items-center mt-2 ">
              <View className="flex-row w-4/5 h-full justify-between items-center">
                <Text className="font-inter-m text-sm text-black">
                  MBTI를 공개하는 것을 동의합니다. (필수)
                </Text>
                <GoFront width="10%" height="100%" />
              </View>
              <Pressable onPress={() => setAgreeMbti(!agreeMbti)}>
                {agreeMbti ? <Checked /> : <UnChecked />}
              </Pressable>
            </View>
            <View className="flex-row w-full h-2/6 justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-between items-center">
                <Text className="font-inter-m text-sm text-black">
                  예약자들과 소통을 하기 위해 닉네임, 관심사 공개에
                  동의하시겠습니까? (선택)
                </Text>
                <GoFront width="10%" height="100%" />
              </View>
              <Pressable onPress={() => setAgreeNickname(!agreeNickname)}>
                {agreeNickname ? <Checked /> : <UnChecked />}
              </Pressable>
            </View>
          </View>
          <Pressable className="my-4 bg-primary-2 items-center justify-center w-full h-1/5 shadow-black drop-shadow-xl">
            <Text className="font-inter-b text-lg text-white">예약하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
