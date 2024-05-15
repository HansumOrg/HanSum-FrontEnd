import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Pressable } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import GenderButton from '../../../components/common/GenderRectButton';
import Title from '../../../components/common/Title';

export default function EnterPersonalInformationScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: RegisterStackScreenProps<'EnterPersonalInformation'>) {
  const [gender, setGender] = useState('');

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Title text="사용자의 성별을 선택해주세요." />
          </View>
          <View className="flex-row bg-white h-1/3 divide-x-8 divide-white">
            <Pressable
              className="h-full w-1/2 "
              onPress={() => handleGenderSelect('F')}
            >
              <GenderButton text="여자" isActivate={gender === 'F'} />
            </Pressable>

            <Pressable
              className=" h-full w-1/2"
              onPress={() => handleGenderSelect('M')}
            >
              <GenderButton text="남자" isActivate={gender === 'M'} />
            </Pressable>
          </View>
          <View className=" bg-white h-1/3 justify-center">
            <Title text="사용자의 생일을 선택해주세요." />
          </View>
          <View className="flex-row bg-red-200 h-2/3 " />
          <View className="bg-white h-1/3 mt-2 ">
            <RectButton
              isActivate
              onPress={() => {
                navigation.navigate('EnterNickname');
              }}
              text="선택완료"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
