import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { CalendarProps, CalendarSeletedDaysProps } from '../../types';

function SelectDays({
  // 예약 범위 설정 함수
  reservationStartDate,
  reservationEndDate,
  setReservationStartDate,
  setReservationEndDate,
  date,
  today,
}: CalendarSeletedDaysProps) {
  if (date) {
    today.setHours(0, 0, 0, 0);
    if (!reservationStartDate && date >= today) {
      // 예약 시작 날짜가 없고, 현재 날짜가 오늘 이후일 때
      setReservationStartDate(date);
    }
    if (reservationStartDate && !reservationEndDate && date >= today) {
      // 예약 시작 날짜가 있고, 예약 종료 날짜가 없고, 현재 날짜가 오늘 이후일 때
      setReservationEndDate(date);
    }
    if (reservationStartDate && date < today) {
      // 예약 시작 날짜가 있고, 현재 날짜가 오늘 이전일 때
      setReservationStartDate(null);
      setReservationEndDate(null);
    }
    if (reservationStartDate && reservationEndDate && date >= today) {
      // 예약 시작 날짜와 예약 종료 날짜가 있고, 현재 날짜가 오늘 이후일 때
      setReservationEndDate(date);
    }
    if (
      reservationStartDate &&
      reservationEndDate &&
      date < reservationStartDate
    ) {
      // 예약 시작 날짜와 예약 종료 날짜가 있고, 현재 날짜가 예약 시작일 이전일 때
      setReservationStartDate(null);
      setReservationEndDate(null);
    }
  }
}

function GetDayOfWeek({
  // 각 월별 날짜 렌더링 생성 함수
  date,
  reservationStartDate,
  reservationEndDate,
  setReservationStartDate,
  setReservationEndDate,
  today,
}: CalendarSeletedDaysProps) {
  const firstDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).getDay();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const weeks = [];
  let week = [];
  for (let i = 0; i < firstDayOfWeek; i += 1) {
    // 첫째 주 시작 전까지 빈 칸 채우기
    week.push(<View key={i} className="flex w-[14%]" />);
  }
  for (let i = 1; i <= lastDay.getDate(); i += 1) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    const isToday =
      today.getDate() === i &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear();
    const isReserved =
      reservationStartDate &&
      reservationEndDate &&
      currentDate > reservationStartDate &&
      currentDate < reservationEndDate;
    const isReservedText = isReserved ? 'text-primary-2' : 'text-black';
    const isTodayColor = isToday ? 'border-primary-2 border rounded-full' : '';
    const isReservationStart =
      reservationStartDate &&
      currentDate.getTime() === reservationStartDate.getTime();
    const isReservationStartColor = isReservationStart
      ? 'bg-primary-2/[.50] rounded-full'
      : '';
    const isReservationEnd =
      reservationEndDate &&
      currentDate.getTime() === reservationEndDate.getTime();
    const isReservationEndColor = isReservationEnd
      ? 'bg-primary-2/[.50] rounded-full'
      : '';
    week.push(
      <Pressable
        key={currentDate.getMonth() + currentDate.getDate()}
        className="flex w-[14%] flex-row items-center justify-center"
        onPress={() =>
          SelectDays({
            date: currentDate,
            today,
            reservationStartDate,
            reservationEndDate,
            setReservationStartDate,
            setReservationEndDate,
          })
        }
      >
        {i < 10 ? (
          <View
            className={`flex w-auto h-full ${isTodayColor} ${isReservationStartColor} ${isReservationEndColor} py-3 px-4`}
          >
            <Text className={`font-inter-r text-sm ${isReservedText}`}>
              {i}
            </Text>
          </View>
        ) : (
          <View
            className={`flex w-auto h-full ${isTodayColor} ${isReservationStartColor} ${isReservationEndColor} p-3`}
          >
            <Text className={`font-inter-r text-sm ${isReservedText}`}>
              {i}
            </Text>
          </View>
        )}
      </Pressable>,
    );
    if (week.length === 7 || i === lastDay.getDate()) {
      for (let j = week.length; j < 7; j += 1) {
        week.push(<View key={j} className="flex w-[14%] items-center" />);
      }
      weeks.push(
        <View
          key={weeks.length}
          className="flex flex-row flex-wrap w-full py-6"
        >
          {week}
        </View>,
      );
      week = [];
    }
  }
  return weeks;
}

export default function Calendar({
  reservationStartDate,
  reservationEndDate,
  setReservationStartDate,
  setReservationEndDate,
}: CalendarProps) {
  const currentDate = new Date();
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
          {GetDayOfWeek({
            date: nextMonth,
            reservationStartDate,
            reservationEndDate,
            setReservationStartDate,
            setReservationEndDate,
            today: currentDate,
          })}
          <View className="flex w-full border-b border-gray-1" />
        </View>,
      );
    }
    return months;
  };

  return <View className="flex w-full h-auto mb-40">{renderMonths()}</View>;
}
