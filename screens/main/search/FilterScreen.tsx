import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import CheckIcon from '../../../assets/images/icon_checkbox.svg';
import PartyIcon from '../../../assets/images/icon_party.svg';
import BreakfastIcon from '../../../assets/images/icon_breakfast.svg';
import BedroomIcon from '../../../assets/images/icon_bedroom.svg';
import ParkingIcon from '../../../assets/images/icon_parking.svg';
import SwimmingIcon from '../../../assets/images/icon_swimming.svg';
import WomanIcon from '../../../assets/images/icon_woman.svg';
import MultiSlider from '../../../components/filter-page/MultiSlider';

export default function FilterScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: SearchStackScreenProps<'Filter'>) {
  // 분위기 필터
  const [activity, setActivity] = useState(false);
  const [healing, setHealing] = useState(false);
  const [energetic, setEnergetic] = useState(false);
  const [leisure, setLeisure] = useState(false);
  // 시설 서비스 필터
  const [party, setParty] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [singleRoom, setSingleRoom] = useState(false);
  const [parking, setParking] = useState(false);
  const [swimming, setSwimming] = useState(false);
  const [womenOnly, setWomenOnly] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(
      [party, breakfast, singleRoom, parking, swimming, womenOnly].filter(
        v => v === true,
      ).length,
    );
  }, [party, breakfast, singleRoom, parking, swimming, womenOnly]);
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="w-screen h-screen bg-white flex justify-center items-center">
        <View className="flex w-10/12 h-full">
          <View className="flex w-full h-1/6  items-center justify-end">
            <View className="flex flex-col w-full h-4/5">
              <View className="flex flex-row w-full h-1/3 justify-between items-center ">
                <Text className="font-inter-sb text-xl text-black">분위기</Text>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-1/2 h-full items-center justify-between">
                  <Text className="font-inter-m text-md text-black ">
                    액티비티가 다양한
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => setActivity(!activity)}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${activity ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
                <View className="flex flex-row w-1/2 h-full items-center justify-between">
                  <Text className="font-inter-m text-md text-black ">
                    힐링하기 좋은
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => setHealing(!healing)}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${healing ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-1/2 h-full items-center justify-between">
                  <Text className="font-inter-m text-md text-black">
                    활기 넘치는
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => setEnergetic(!energetic)}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${energetic ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
                <View className="flex flex-row w-1/2 h-full items-center justify-between">
                  <Text className="font-inter-m text-md text-black">
                    여유로운
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => setLeisure(!leisure)}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${leisure ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View className="flex w-full h-2/5">
            <View className="flex flex-row w-full h-1/5 justify-between items-end">
              <Text className="font-inter-sb text-xl text-black">
                시설 서비스
              </Text>
              <View className="flex flex-row w-auto h-auto items-center">
                <Text className="font-inter-b text-md text-primary-2">
                  {count}
                </Text>
                <Text className="font-inter-b text-sm text-black/[.50]">
                  개 선택
                </Text>
              </View>
            </View>
            <View className="flex flex-row w-full h-1/3 justify-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setParty(!party)}
                >
                  <PartyIcon
                    width={37}
                    height={44}
                    fill={`${party ? '#39C3C5' : '#C2C2C2'}`}
                    stroke={`${party ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      party ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    파티
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setBreakfast(!breakfast)}
                >
                  <BreakfastIcon
                    width={42}
                    height={44}
                    fill={`${breakfast ? '#39C3C5' : '#C2C2C2'}`}
                    stroke={`${breakfast ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      breakfast ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    조식
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setSingleRoom(!singleRoom)}
                >
                  <BedroomIcon
                    width={44}
                    height={44}
                    fill={`${singleRoom ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      singleRoom ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    1인실
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/3 items-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setParking(!parking)}
                >
                  <ParkingIcon
                    width={50}
                    height={44}
                    fill={`${parking ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      parking ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    주차
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setSwimming(!swimming)}
                >
                  <SwimmingIcon
                    width={48}
                    height={44}
                    stroke={`${swimming ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      swimming ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    수영
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => setWomenOnly(!womenOnly)}
                >
                  <WomanIcon
                    width={46}
                    height={44}
                    stroke={`${womenOnly ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      womenOnly ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    여성전용
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="flex flex-col w-full h-2/5">
            <View className="flex w-full h-auto">
              <Text className="font-inter-sb text-xl text-black">가격</Text>
            </View>
            <View className="flex w-full h-2/5 items-center">
              <View className="flex w-11/12 h-full">
                <MultiSlider min={1} max={10} steps={10} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
