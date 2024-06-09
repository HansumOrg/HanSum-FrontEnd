import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RadioButtons from '../../../components/common/RadioButtonItem';
import RectButton from '../../../components/common/RectButton';
import { useRegisterContext } from '../../../components/get-started/StartContext';
import { RegisterProps } from '../../../types';

export default function SelectMbtiScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: RegisterStackScreenProps<'SelectMbti'>) {
  const context = useRegisterContext();
  const [selectedIE, setSelectedIE] = useState('');
  const [selectedNS, setSelectedNS] = useState('');
  const [selectedFT, setSelectedFT] = useState('');
  const [selectedPJ, setSelectedPJ] = useState('');
  const mbti = `${selectedIE}${selectedNS}${selectedFT}${selectedPJ}`
    .replace(/More /g, '')
    .replace(/Less /g, '')
    .replace(/Some /g, '');
  const MbtiSubmit = () => {
    if (
      selectedIE !== '' &&
      selectedNS !== '' &&
      selectedFT !== '' &&
      selectedPJ !== ''
    ) {
      context.setRegisterState((prevState: RegisterProps) => ({
        ...prevState,
        mbti,
      }));
      navigation.navigate('AgreeTos');
    }
  };
  const options = (a: string, b: string) => [
    {
      key: '1',
      label: `More ${a}`,
      value: a,
      size: 6,
    },
    {
      key: '2',
      label: `Less ${a}`,
      value: `Less ${a}`,
      size: 6,
    },
    {
      key: '3',
      label: `Some ${a}`,
      value: `Some ${a}`,
      size: 6,
    },
    {
      key: '4',
      label: `Some ${b}`,
      value: `Some ${b}`,
      size: 6,
    },
    {
      key: '5',
      label: `Less ${b}`,
      value: `Less ${b}`,
      size: 6,
    },
    {
      key: '6',
      label: `More ${b}`,
      value: `More ${b}`,
      size: 6,
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />

      <View className="h-screen bg-white flex justify-start items-center px-6 pt-6">
        <View className=" flex justify-center w-full rounded-2xl ">
          <Text className=" font-inter-b text-md text-black">{mbti}유형</Text>
        </View>
        <View className="h-1/6 w-full rounded-2xl mt-2 justify-center items-center">
          <RadioButtons
            activeItem={selectedIE}
            onSelectItem={itemValue => setSelectedIE(itemValue)}
            options={options('E', 'I')}
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
            options={options('N', 'S')}
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
            options={options('F', 'T')}
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
            options={options('P', 'J')}
            text1="즉흥적이고 융통성이 있어요"
            text2="체계적이고 계획적이에요"
            mbti1="P"
            mbti2="J"
          />
        </View>
        <View className="h-1/6 w-full mt-12">
          <RectButton
            isActivate={
              selectedIE !== '' &&
              selectedNS !== '' &&
              selectedFT !== '' &&
              selectedPJ !== ''
            }
            onPress={MbtiSubmit}
            text="선택 완료"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
