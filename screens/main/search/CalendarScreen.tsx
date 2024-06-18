import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import Calendar from '../../../components/search-page/Calendar';
import { SearchStackScreenProps } from '../../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../../api/hooks';
import { setDate } from '../../../api/slices/searchSlice';
import { selectDate } from '../../../api/selectors';

const days = ['일', '월', '화', '수', '목', '금', '토'];

export default function CalendarScreen({
  navigation,
}: SearchStackScreenProps<'Calendar'>) {
  const dispatch = useAppDispatch();
  const selectedDates = useAppSelector(selectDate);

  const [reservationStartDate, setReservationStartDate] = useState<Date | null>(
    selectedDates.checkinDate ? new Date(selectedDates.checkinDate) : null,
  );
  const [reservationEndDate, setReservationEndDate] = useState<Date | null>(
    selectedDates.checkoutDate ? new Date(selectedDates.checkoutDate) : null,
  );
  const [isReservationable, setIsReservationable] = useState<boolean>(false);
  const [footerColor, setFooterColor] = useState<string>('bg-gray-1/100');
  const [reservationString, setReservationString] = useState<string>('');

  useEffect(() => {
    if (reservationStartDate && reservationEndDate) {
      setIsReservationable(true);
      const startYear = reservationStartDate.getFullYear();
      const startMonth = reservationStartDate.getMonth() + 1;
      const startDate = reservationStartDate.getDate();
      const startDay = days[reservationStartDate.getDay()];
      const endYear = reservationEndDate.getFullYear();
      const endMonth = reservationEndDate.getMonth() + 1;
      const endDate = reservationEndDate.getDate();
      const endDay = days[reservationEndDate.getDay()];
      const reservationDays =
        (reservationEndDate.getTime() - reservationStartDate.getTime()) /
        (1000 * 60 * 60 * 24);
      setReservationString(
        `${startYear}.${startMonth}.${startDate}(${startDay}) ~ ${endYear}.${endMonth}.${endDate}(${endDay}) - ${reservationDays}박`,
      );
    } else {
      setIsReservationable(false);
    }
  }, [reservationStartDate, reservationEndDate]);

  useEffect(() => {
    if (isReservationable) {
      setFooterColor('bg-primary-2/100');
    } else {
      setFooterColor('bg-gray-2/100');
    }
  }, [isReservationable]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-white flex items-center">
        <View className="flex flex-row h-auto w-10/12 justify-between">
          <Text className="font-inter-sm text-ss text-black">일</Text>
          <Text className="font-inter-sm text-ss text-black">월</Text>
          <Text className="font-inter-sm text-ss text-black">화</Text>
          <Text className="font-inter-sm text-ss text-black">수</Text>
          <Text className="font-inter-sm text-ss text-black">목</Text>
          <Text className="font-inter-sm text-ss text-black">금</Text>
          <Text className="font-inter-sm text-ss text-black">토</Text>
        </View>
        <View className="flex w-11/12 py-1 border-b border-gray-1/100" />
        <View className="flex w-11/12 h-full bg-white">
          <ScrollView
            className="flex w-full h-auto"
            showsVerticalScrollIndicator={false}
          >
            <Calendar
              reservationStartDate={reservationStartDate}
              reservationEndDate={reservationEndDate}
              setReservationStartDate={setReservationStartDate}
              setReservationEndDate={setReservationEndDate}
            />
          </ScrollView>
        </View>
        <Pressable
          className="absolute z-5 w-full h-1/4 bottom-1 justify-center items-center"
          disabled={!isReservationable}
          onPress={() => {
            if (reservationStartDate && reservationEndDate) {
              const checkinDate = new Date(
                reservationStartDate.getTime() + 1000 * 60 * 60 * 24,
              )
                .toISOString()
                .split('T')[0];
              const checkoutDate = new Date(
                reservationEndDate.getTime() + 1000 * 60 * 60 * 24,
              )
                .toISOString()
                .split('T')[0];
              dispatch(setDate({ checkinDate, checkoutDate }));
            }
            navigation.goBack();
          }}
        >
          <View
            className={`flex w-full h-auto mt-4 ${footerColor} items-center shadow-2xl shadow-black/100`}
          >
            <Text className="font-inter-sb text-s text-black p-6">
              {isReservationable ? reservationString : '날짜를 선택해주세요'}
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
