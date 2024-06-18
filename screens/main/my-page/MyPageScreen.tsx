import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import NoticeIcon from '../../../assets/images/icon_notice.svg';
import MoreIcon from '../../../assets/images/icon_more.svg';
import ReservationBox from '../../../components/my-page/ReservationBox';
import { useGetUserInfoQuery } from '../../../api/endpoints/userEndpoints';
import { useGetReservationStatusQuery } from '../../../api/endpoints/reservationEndpoints';
import { useLogout } from '../../../api/hooks';
import { isSuccessResponse, isFailedResponse } from '../../../utils/helpers';

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.

  route,
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  const { data: userData } = useGetUserInfoQuery();
  const [modalVisible, setModalVisible] = useState(false);
  const { data: reservationData } = useGetReservationStatusQuery();
  const { handleLogout } = useLogout();

  const handleLogoutPress = async () => {
    const res = await handleLogout();
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('logout success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
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
      <StatusBar barStyle="dark-content" />
      <View className="h-screen w-screen flex items-center bg-white">
        <View className="flex flex-row w-11/12 h-auto justify-between items-center py-2">
          <Text className="font-inter-b w-5/6 text-xl text-black">
            마이페이지
          </Text>
          <Pressable onPress={() => navigation.navigate('Notifications')}>
            <NoticeIcon width={29} height={29} />
          </Pressable>
        </View>
        <View className="flex flex-col w-11/12 h-1/4">
          <View className="flex flex-row w-auto h-1/5 justify-between items-end">
            <View className="flex flex-col h-full justify-end">
              <Text className="font-inter-b text-s text-black">
                {userData ? userData.nickname : '사용자를 찾을 수 없습니다.'}
              </Text>
              <Text className="font-inter-m text-ss text-black/[.5]">
                Show profile
              </Text>
            </View>
            <Pressable
              className="px-1"
              onPress={() =>
                navigation.navigate('EditProfileNavigator', {
                  screen: 'EditProfile',
                })
              }
            >
              <MoreIcon width={29} height={29} />
            </Pressable>
          </View>
          <View className="flex border-b" />
          <View className="flex flex-col w-full h-full">
            <View className="flex flex-row w-full h-1/4 justify-between items-end">
              <Text className="font-inter-m text-s text-black">고객센터</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-s text-black">문의사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-s text-black">공지사항</Text>
              <Pressable className="px-1">
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <View className="flex border-b" />
            <View className="flex flex-row w-full h-1/6 justify-between items-end">
              <Text className="font-inter-m text-s text-black">로그아웃</Text>
              <Pressable className="px-1" onPress={() => setModalVisible(true)}>
                <MoreIcon width={29} height={29} />
              </Pressable>
            </View>
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View className=" bg-black/75 h-screen w-screen items-center justify-center">
                <View className="w-4/5 h-1/4 bg-white rounded-lg items-center justify-between px-4 py-8 shadow-lg shadow-black">
                  <Text className="text-left font-inter-r text-sm text-black">
                    {'\n'}
                    로그아웃 하시겠습니까?
                  </Text>
                  <View className="flex-row justify-between w-full ">
                    <TouchableOpacity
                      className="rounded-md bg-primary-2 w-[45%] py-2 justify-center items-center"
                      onPress={handleLogoutPress}
                    >
                      <Text className="text-white font-inter-sb text-s text-center">
                        로그아웃
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="rounded-md bg-gray-2 w-[45%] py-2 justify-center items-center"
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text className="text-white font-inter-sb text-s text-center">
                        취소
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <View className="flex border-b" />
          </View>
        </View>
        <View className="flex flex-col w-11/12 h-auto">
          <Text className="font-inter-b mt-10 text-sm text-black">내 예약</Text>
        </View>
        <View className="flex flex-grow w-full h-1/3">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex w-full h-auto mb-20">
              {reservationData &&  reservationData.reservationRecords  ? (
                reservationData.reservationRecords.map(reservation => (
                  <ReservationBox
                    route={route}
                    navigation={navigation}
                    reservation={reservation}
                    key={reservation.reservationId}
                  />
                ))
              ) : (
                <Text className="text-center text-gray-500">
                  현재 예약중인 숙소가 없습니다.
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
