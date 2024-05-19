import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

function GetDayOfWeek(date: Date) {
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
    const isToday =
      today.getDate() === i &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear();
    week.push(
      <View className="flex w-[14%] flex-row items-center justify-center">
        {isToday ? (
          <View className="flex w-auto h-full rounded-full bg-primary-1 p-3">
            <Text className="font-inter-r text-sm text-black">{i}</Text>
          </View>
        ) : (
          <Text className="font-inter-r text-sm text-black">{i}</Text>
        )}
      </View>,
    );

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
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    console.log('currentDate', currentDate.getFullYear());
    console.log('currentDate', currentDate.getDate());
  }, []);

  const renderMonths = () => {
    const months = [];
    for (let i = 0; i < 4; i += 1) {
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
          {GetDayOfWeek(nextMonth)}
          <View className="flex w-full border-b border-gray-1" />
        </View>,
      );
    }
    return months;
  };

  return (
    <ScrollView className="flex w-full h-auto mb-100">
      {renderMonths()}
    </ScrollView>
  );
}
