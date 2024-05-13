import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RadioButtons from '../../../components/common/RadioButtonItem';
import RectButton from '../../../components/common/RectButton';

export default function SelectMbtiScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}: RegisterStackScreenProps<'SelectMbti'>) {
  const [selectedIE, setSelectedIE] = useState('mbti');
  const [selectedNS, setSelectedNS] = useState('mbti');
  const [selectedFT, setSelectedFT] = useState('mbti');
  const [selectedPJ, setSelectedPJ] = useState('mbti');

  const options = [
    {
      key: '1',
      label: '',
      value: '1',
      size: 6,
    },
    {
      key: '2',
      label: '',
      value: '2',
      size: 6,
    },
    {
      key: '3',
      label: '',
      value: '3',
      size: 6,
    },
    {
      key: '4',
      label: '',
      value: '4',
      size: 6,
    },
    {
      key: '5',
      label: '',
      value: '5',
      size: 6,
    },
    {
      key: '6',
      label: '',
      value: '6',
      size: 6,
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />

      <View className="h-screen bg-white flex justify-start items-center px-6 pt-6">
        <View className=" flex justify-center w-full rounded-2xl ">
          <Text className=" font-inter-b text-md text-black">INFP유형</Text>
        </View>
        {/* 
          TODO: 선이 제대로 적용되지 않는 이슈 및 가운데 텍스트가 들어가는 이튜 해경해야함
        */}
        <View className="h-1/6 w-full rounded-2xl mt-2 justify-center items-center">
          <RadioButtons
            activeItem={selectedIE}
            onSelectItem={itemValue => setSelectedIE(itemValue)}
            options={options}
            text1="외향적이에요"
            text2="내향적이에요"
            mbti1="E"
            mbti2="I"
          />
        </View>
        <View className="h-1/6 w-full rounded-2xl mt-2  justify-center items-center">
          <RadioButtons
            activeItem={selectedNS}
            onSelectItem={itemValue => setSelectedNS(itemValue)}
            options={options}
            text1="미래지향적이에요"
            text2="현실주의적이에요"
            mbti1="N"
            mbti2="S"
          />
        </View>
        <View className="h-1/6 w-full rounded-2xl mt-2  justify-center items-center">
          <RadioButtons
            activeItem={selectedFT}
            onSelectItem={itemValue => setSelectedFT(itemValue)}
            options={options}
            text1="감정이 풍부해요"
            text2="이성적이에요"
            mbti1="F"
            mbti2="T"
          />
        </View>
        <View className="h-1/6 w-full rounded-2xl mt-2  justify-center items-center">
          <RadioButtons
            activeItem={selectedPJ}
            onSelectItem={itemValue => setSelectedPJ(itemValue)}
            options={options}
            text1="즉흥적이고 융통성이 있어요"
            text2="체계적이고 계획적이에요"
            mbti1="P"
            mbti2="J"
          />
        </View>
        <View className="h-1/6 w-full mt-2">
          <RectButton
            activate
            onPress={() => navigation.navigate('AgreeTos')}
            text="선택 완료"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
