import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

function GetDayOfWeek(
  date: Date,
  reservationStartDate: Date | null,
  reservationEndDate: Date | null,
  setReservationStartDate: (date: Date | null) => void,
  setReservationEndDate: (date: Date | null) => void,
) {
  const firstDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).getDay();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const weeks = [];
  let week = [];
  for (let i = 0; i < firstDayOfWeek; i += 1) {
    week.push(<View className="flex w-[14%]" />);
  }
  const today = new Date();
  for (let i = 1; i <= lastDay.getDate(); i += 1) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    const isToday =
      today.getDate() === i &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear();
    const isReserved =
      reservationStartDate &&
      reservationEndDate &&
      currentDate >= reservationStartDate &&
      currentDate <= reservationEndDate;
    const isReservedBorder = isReserved ? 'bg-primary-1/[.50]' : '';
    const isTodayColor = isToday ? 'bg-primary-1 rounded-full' : 'bg-white';
    if (i < 10) {
      week.push(
        <Pressable
          key={i}
          className="flex w-[14%] flex-row items-center justify-center"
          onPress={() => {
            if (!reservationStartDate && currentDate >= today) {
              setReservationStartDate(currentDate);
            }
            if (
              reservationStartDate &&
              !reservationEndDate &&
              currentDate >= today
            ) {
              setReservationEndDate(currentDate);
            }
            if (
              reservationStartDate &&
              reservationEndDate &&
              currentDate < reservationStartDate
            ) {
              setReservationStartDate(currentDate);
            }
            if (
              reservationStartDate &&
              reservationEndDate &&
              currentDate > reservationEndDate
            ) {
              setReservationEndDate(currentDate);
            }
          }}
        >
          <View
            className={`flex w-auto h-full ${isTodayColor} ${isReservedBorder} py-3 px-4`}
          >
            <Text className="font-inter-r text-sm text-black">{i}</Text>
          </View>
        </Pressable>,
      );
    } else {
      week.push(
        <Pressable
          key={i}
          className="flex w-[14%] flex-row items-center justify-center"
          onPress={() => {
            if (!reservationStartDate) {
              setReservationStartDate(currentDate);
            }
            if (reservationStartDate && !reservationEndDate) {
              setReservationEndDate(currentDate);
            }
            if (
              reservationStartDate &&
              reservationEndDate &&
              currentDate < reservationStartDate
            ) {
              setReservationStartDate(currentDate);
            }
            if (
              reservationStartDate &&
              reservationEndDate &&
              currentDate > reservationEndDate
            ) {
              setReservationEndDate(currentDate);
            }
          }}
        >
          <View
            className={`flex w-auto h-full ${isTodayColor} ${isReservedBorder} p-3`}
          >
            <Text className="font-inter-r text-sm text-black">{i}</Text>
          </View>
        </Pressable>,
      );
    }

    if (week.length === 7 || i === lastDay.getDate()) {
      for (let j = week.length; j < 7; j += 1) {
        week.push(<View className="flex w-[14%] items-center" />);
      }
      weeks.push(
        <View className="flex flex-row flex-wrap w-full py-6">{week}</View>,
      );
      week = [];
    }
  }
  return weeks;
}

export default function Calendar() {
  const currentDate = new Date();
  const [reservationStartDate, setReservationStartDate] = useState<Date | null>(
    null,
  ); // 예약 시작 날짜
  const [reservationEndDate, setReservationEndDate] = useState<Date | null>(
    null,
  ); // 예약 종료 날짜

  useEffect(() => {
    console.log('start', reservationStartDate);
  }, [reservationStartDate]);

  useEffect(() => {
    console.log('end', reservationEndDate);
  }, [reservationEndDate]);

  const renderMonths = () => {
    const months = [];
    for (let i = 0; i < 6; i += 1) {
      const nextMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + i,
        1,
      );
      months.push(
        <View key={i} className="flex flex-col w-full h-auto py-2">
          <View className="flex flex-row w-full h-auto items-end">
            <Text className="font-inter-r text-xl text-black">
              {nextMonth.getMonth() + 1}월
            </Text>
            <Text className="font-inter-r text-md px-1 text-black">
              {nextMonth.getFullYear()}년
            </Text>
          </View>
          {GetDayOfWeek(
            nextMonth,
            reservationStartDate,
            reservationEndDate,
            setReservationStartDate,
            setReservationEndDate,
          )}
          <View className="flex w-full border-b border-gray-1" />
        </View>,
      );
    }
    return months;
  };

  return <View className="flex w-full h-auto mb-40">{renderMonths()}</View>;
}
