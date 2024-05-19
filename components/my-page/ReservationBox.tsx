import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import LocalIcon from '../../assets/images/icon_local.svg';
import PhoneIcon from '../../assets/images/icon_phone.svg';
import { Reservation, ReservationBoxProps } from '../../types';

function DateCheck({ checkin_date }: Reservation): number {
  const today = new Date();
  const checkin = new Date(checkin_date);
  let status = 0;
  if (today < checkin) {
    status = 0;
  } else {
    status = 1;
  }
  return status;
}
function ReservationBox(props: ReservationBoxProps) {
  const { reservation, guesthouse } = props;
  const [dateState, setDateState] = useState(0); // 0: 예약확정, 1:이용완료
  useEffect(() => {
    setDateState(DateCheck(reservation));
  }, [reservation]);
  return (
    <View className="flex bg-white h-auto mb-1 w-full items-center">
      <View className="flex flex-row m-2 w-11/12 h-auto rounded-xl shadow-md shadow-black/50 bg-pink-500">
        <View className="flex flex-row h-auto w-full">
          <View className="flex flex-col w-4/5 h-auto rounded-l-md bg-white">
            <Text className="font-inter-m mt-2 mb-1 ml-2 text-xl text-black">
              {guesthouse.guesthouse_name}
            </Text>
            <View className="flex flex-row mx-1 px-1 w-full h-auto">
              <LocalIcon width={12.8} height={16} />
              <Text className="font-inter-r mx-1 text-sm  text-black">
                {guesthouse.address}
              </Text>
            </View>
            <View className="flex flex-row m-1 px-1 w-full h-auto">
              <PhoneIcon width={16} height={16} />
              <Text className="font-inter-r mx-1 text-sm  text-black">
                {guesthouse.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
              </Text>
            </View>
            {dateState === 0 ? (
              <View className="flex flex-col w-3/5 h-auto">
                <View className="flex px-2 flex-row w-full justify-between">
                  <Text className="font-inter-m text-sm text-black/[.50]">
                    Check-in
                  </Text>
                  <Text className="font-inter-m text-sm text-black/[.50]">
                    {reservation.checkin_date.split(' ')[1]}
                  </Text>
                </View>
                <View className="flex px-2 mb-2 flex-row w-full justify-between">
                  <Text className="font-inter-m text-sm text-black/[.50]">
                    Check-out
                  </Text>
                  <Text className="font-inter-m text-sm text-black/[.50]">
                    {reservation.checkout_date.split(' ')[1]}
                  </Text>
                </View>
              </View>
            ) : (
              <Pressable className="flex flex-col w-full h-auto justify-center items-center">
                <View className="flex bg-gray-3 w-11/12 h-auto items-center m-2 rounded-lg">
                  <Text className="font-inter-m text-lg m-2 text-black">
                    후기 작성
                  </Text>
                </View>
              </Pressable>
            )}
          </View>
          {dateState === 0 ? (
            <View className="flex w-1/5 h-auto rounded-r-md bg-primary-2 shadow-md shadow-black/40 items-center justify-center">
              <Text className="font-inter-sb text-lg text-white">
                예약{'\n'}확정
              </Text>
            </View>
          ) : (
            <View className="flex w-1/5 h-auto rounded-r-md bg-point shadow-md shadow-black/40 items-center justify-center">
              <Text className="font-inter-sb text-lg text-white">
                이용{'\n'}완료
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
export default ReservationBox;
