import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MyPageStackScreenProps } from '../../../navigation/types';
import NoticeIcon from '../../../assets/images/icon_notice.svg';
import MoreIcon from '../../../assets/images/icon_more.svg';
import data from '../../../data.json';
import { Reservation, Guesthouse } from '../../../types';
import ReservationBox from '../../../components/my-page/ReservationBox';
import { useMyPageContext } from '../../../components/my-page/MyPageContext';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default function MyPageScreen({
  // route와 navigation 사용 안할 시 제거해주세요.

  route,
  navigation,
}: MyPageStackScreenProps<'MyPage'>) {
  const context = useMyPageContext();
  const userId = context.myPageState.user_id;
  const [modalVisible, setModalVisible] = useState(false);
  const reservationData: Reservation[] = data.reservation;
  const guesthouseData: Guesthouse[] = data.guesthouse;
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
                {userId
                  ? context.myPageState.username
                  : '사용자를 찾을 수 없습니다.'}
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
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>로그아웃 할까요?</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.textStyle}>로그아웃</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.textStyle}>
                        {'    '}취소{'    '}
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
              {reservationData
                .filter(reservation => reservation.user_id === userId)
                .map(reservation => (
                  <ReservationBox
                    route={route}
                    navigation={navigation}
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
