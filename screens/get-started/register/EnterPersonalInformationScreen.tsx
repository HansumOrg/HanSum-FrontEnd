import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import GenderButton from '../../../components/common/GenderRectButton';
import Title from '../../../components/common/Title';
import WheelPicker from '../../../components/get-started/WheelPicker'; // Assuming the file location
import { useAppDispatch, useAppSelector } from '../../../api/hooks';
import { setJoinState } from '../../../api/slices/joinSlice';

const EnterPersonalInformationScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: RegisterStackScreenProps<'EnterPersonalInformation'>) => {
  const curruentState = useAppSelector(state => state.join);
  const initialData = {
    username: curruentState.username,
    password: curruentState.password,
    name: curruentState.name,
    phone: curruentState.phone,
    sex: '',
    birthday: '',
    nickname: null,
    mbti: null,
    userAgreement: null,
  };
  const [joinData, setJoinData] = useState(initialData);
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const dispatch = useAppDispatch();

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    setJoinData({ ...joinData, sex: selectedGender });
  };

  useEffect(() => {
    setJoinData(prev => ({
      ...prev,
      birthday: `${year}-${month}-${day}`,
    }));
  }, [year, month, day]);

  const submitPersonalInformation = () => {
    dispatch(setJoinState(joinData));
    navigation.navigate('EnterNickname');
  };

  const years = Array.from({ length: 50 }, (_, i) => (1970 + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5 w-full">
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
          <View className="flex-row h-2/3 items-start justify-between">
            <View className="flex-row justify-between items-center w-full">
              <View className="absolute h-1/5 w-full bg-gray-5 rounded-lg" />
              <View className="flex-row justify-center items-start ml-8">
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
              <View className="flex-row justify-center items-start mr-8">
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
              onPress={submitPersonalInformation}
              text="선택완료"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPersonalInformationScreen;
