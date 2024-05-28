import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Pressable,
  Dimensions,
  Text,
} from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import GenderButton from '../../../components/common/GenderRectButton';
import Title from '../../../components/common/Title';
import WheelPicker from '../../../components/get-started/WheelPicker'; // Assuming the file location

const EnterPersonalInformationScreen = ({
  navigation,
}: RegisterStackScreenProps<'EnterPersonalInformation'>) => {
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const submitPersonalInformation = () => {
    console.log('submitPersonalInformation');
    console.log(gender, year, month, day);
  };

  const years = Array.from({ length: 50 }, (_, i) => (1970 + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className="bg-white h-1/3 justify-center">
            <Title text="사용자의 성별을 선택해주세요." />
          </View>
          <View className="flex-row bg-white h-1/3 divide-x-8 divide-white">
            <Pressable
              className="h-full w-1/2"
              onPress={() => handleGenderSelect('F')}
            >
              <GenderButton text="여자" isActivate={gender === 'F'} />
            </Pressable>
            <Pressable
              className="h-full w-1/2"
              onPress={() => handleGenderSelect('M')}
            >
              <GenderButton text="남자" isActivate={gender === 'M'} />
            </Pressable>
          </View>
          <View className="bg-white h-1/3 justify-center">
            <Title text="사용자의 생일을 선택해주세요." />
          </View>
          <View className="flex-row bg-red-200 h-2/3 items-center justify-between">
            <View className="absolute h-1/5 w-full bg-gray-5 rounded-lg" />
            <View className="flex-row justify-between w-full px-8">
              <View className="flex-row justify-center items-center">
                <WheelPicker
                  items={years}
                  onItemChange={setYear}
                  itemHeight={Dimensions.get('window').height / 20}
                  itemdoc="년"
                />
              </View>
              <View className="flex-row justify-center items-center">
                <WheelPicker
                  items={months}
                  onItemChange={setMonth}
                  itemHeight={Dimensions.get('window').height / 20}
                  itemdoc="월"
                />
              </View>
              <View className="flex-row justify-center items-center">
                <WheelPicker
                  items={days}
                  onItemChange={setDay}
                  itemHeight={Dimensions.get('window').height / 20}
                  itemdoc="일"
                />
              </View>
            </View>
          </View>
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate
              onPress={() => {
                submitPersonalInformation();
                navigation.navigate('EnterNickname');
              }}
              text="선택완료"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPersonalInformationScreen;
