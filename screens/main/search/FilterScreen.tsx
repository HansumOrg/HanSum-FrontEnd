import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import CheckIcon from '../../../assets/images/icon_checkbox.svg';
import PartyIcon from '../../../assets/images/icon_party.svg';
import BreakfastIcon from '../../../assets/images/icon_breakfast.svg';
import BedroomIcon from '../../../assets/images/icon_bedroom.svg';
import ParkingIcon from '../../../assets/images/icon_parking.svg';
import SwimmingIcon from '../../../assets/images/icon_swimming.svg';
import WomanIcon from '../../../assets/images/icon_woman.svg';

export default function FilterScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: SearchStackScreenProps<'Filter'>) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="w-screen h-screen bg-white flex justify-center items-center">
        <View className="flex w-10/12 h-full">
          <View className="flex w-full h-1/5  items-center justify-end">
            <View className="flex flex-col w-full h-2/3">
              <View className="flex flex-row w-full h-1/3 justify-between items-center">
                <Text className="font-inter-sb text-xl text-black">분위기</Text>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-1/2 h-full items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black ">
                    액티비티가 다양한
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
                <View className="flex flex-row w-1/2 h-full items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black ">
                    힐링하기 좋은
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-1/2 h-full items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black">
                    활기 넘치는
                  </Text>
                  <CheckIcon width={19} height={19} />
                </View>
                <View className="flex flex-row w-1/2 h-full items-center justify-between px-2">
                  <Text className="font-inter-m text-md text-black">
                    여유로운
                  </Text>
                  <CheckIcon width={19} height={19} />
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
                <Text className="font-inter-b text-md text-primary-2">2</Text>
                <Text className="font-inter-b text-sm text-black/[.50]">
                  개 선택
                </Text>
              </View>
            </View>
            <View className="flex flex-row w-full h-1/3 justify-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <PartyIcon width={37} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
                    파티
                  </Text>
                </Pressable>
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <BreakfastIcon width={42} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
                    조식
                  </Text>
                </Pressable>
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <BedroomIcon width={44} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
                    1인실
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/3 items-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <ParkingIcon width={50} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
                    파티
                  </Text>
                </Pressable>
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <SwimmingIcon width={48} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
                    수영
                  </Text>
                </Pressable>
                <Pressable className="flex flex-col w-auto h-auto items-center">
                  <WomanIcon width={46} height={44} />
                  <Text className="font-inter-sb text-sm text-gray-3 py-1">
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
            <View className="flex w-full h-2/5 bg-blue-500">
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
