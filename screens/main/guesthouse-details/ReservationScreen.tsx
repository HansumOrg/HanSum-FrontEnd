import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LocalSvg from '../../../assets/images/icon_local.svg';
import PhoneSVG from '../../../assets/images/icon_phone.svg';
import GoFront from '../../../assets/images/icon_goback.svg';
import UnChecked from '../../../components/reservation/unchecked_rectangle.svg';
import Checked from '../../../components/reservation/checked_rectangle.svg';
import { ReservationRecord, GuestInfo } from '../../../types';
import { GuesthouseDetailsStackScreenProps } from '../../../navigation/types';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: GuesthouseDetailsStackScreenProps<'Reservation'>) {
  const [agreeMbti, setAgreeMbti] = useState(false);
  const [agreeNickname, setAgreeNickname] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleAgreeNickname = (agree: boolean) => {
    setAgreeNickname(agree);
    setModalVisible(false);
  };

  const handleReservation = () => {
    // 예약하기 로직을 추가하세요.
    navigation.navigate('ReservationComplete');
    console.log('예약 완료');
  };
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

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-gray-1 gap-1 flex justify-start items-center">
        <View className="flex justify-center h-[25%] w-full bg-white items-center py-4 px-6">
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
                <View className="flex-row w-[48%] h-full justify-start items-center bg-gray-3 rounded-xl">
                  <View className="flex-row w-1/4 h-full justify-center items-center bg-gray-2 rounded-l-xl">
                    <Text className="mx-1 font-inter-m text-xss text-center text-black">
                      Check {'\n'}In
                    </Text>
                  </View>
                  <Text
                    className="mx-1 font-inter-m text-sss text-black flex-shrink"
                    numberOfLines={2}
                  >
                    {formatDate(reservation.checkin_date)}
                  </Text>
                </View>
                <View className="flex-row w-[48%] h-full justify-start items-center bg-gray-3 rounded-xl">
                  <View className="flex-row w-1/4 h-full justify-center items-center bg-gray-2 rounded-l-xl">
                    <Text className="mx-1 font-inter-m text-xss text-center text-black">
                      Check {'\n'}Out
                    </Text>
                  </View>
                  <Text
                    className="mx-1 font-inter-m text-sss text-black flex-shrink"
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
        <View className="flex justify-center h-1/5 w-full bg-white items-center px-6 py-4">
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
        <View className="flex justify-center h-[45%] w-full bg-white items-center px-4">
          <View className="flex justify-start items-center h-3/5 w-full px-2 py-4">
            <Text className="w-full text-left font-inter-sb text-md text-black">
              이용약관 동의
            </Text>
            <View className="flex-row w-full h-2/6 justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-between items-end">
                <Text className="font-inter-m w-full  text-sm  text-black">
                  MBTI를 공개하는 것을 동의합니다. (필수)
                </Text>
                <GoFront width="10%" height="100%" />
              </View>
              <Pressable onPress={() => setAgreeMbti(!agreeMbti)}>
                {agreeMbti ? (
                  <Checked width={24} height={24} />
                ) : (
                  <UnChecked width={24} height={24} />
                )}
              </Pressable>
            </View>
            <View className="flex-row w-full h-2/6 justify-between items-center mt-2">
              <View className="flex-row w-4/5 h-full justify-between items-center">
                <Text className="font-inter-m w-full text-sm text-black">
                  예약자들과 소통을 하기 위해 닉네임, 관심사 공개에
                  동의하시겠습니까? (선택)
                </Text>
                <GoFront width="10%" height="100%" />
              </View>
              <Pressable onPress={() => setAgreeNickname(!agreeNickname)}>
                {agreeNickname ? (
                  <Checked width={24} height={24} />
                ) : (
                  <UnChecked width={24} height={24} />
                )}
              </Pressable>
            </View>
          </View>
          {agreeMbti ? (
            <Pressable
              className="mt-4 bg-primary-2 items-center justify-center w-screen h-[18%] shadow-black drop-shadow-xl"
              onPress={
                agreeNickname ? handleReservation : () => setModalVisible(true)
              }
            >
              <Text className="font-inter-b text-lg text-white">예약하기</Text>
            </Pressable>
          ) : (
            <View className="mt-4 bg-gray-3 items-center justify-center w-screen h-[18%] shadow-black drop-shadow-xl">
              <Text className="font-inter-b text-lg text-black">예약하기</Text>
            </View>
          )}
        </View>
        <View className="absolute justify-center h-1/5 w-full bg-white items-center bottom-0 -z-10 " />
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
              <Text style={styles.modalText}>
                닉네임, 관심사 공개를 하지 않으시면 채팅기능을 이용할 수
                없습니다. 공개를 원하시지 않습니까?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleAgreeNickname(true);
                    handleReservation();
                  }}
                >
                  <Text style={styles.textStyle}>예(공개)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleReservation();
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>아니요(비공개)</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
