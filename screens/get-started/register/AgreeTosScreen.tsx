import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import UiCheckbox from '../../../components/common/Checkbox';

interface CheckboxItemProps {
  label: string;
  isRequired: boolean;
  description?: string;
  isChecked: boolean;
  onValueChange: (newValue: boolean) => void;
}
// TODO: 이 부분은 components/common/CheckboxItem.tsx로 분리해야함 잊지 말 것.
const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  isRequired,
  description = '',
  isChecked,
  onValueChange,
}) => (
  <View className="flex-row h-1/6 w-full items-center justify-between">
    <View className="flex-col">
      <View className="flex-row">
        <Text className="text-black text-sm underline">{label}</Text>
        <Text className="text-gray-400">{isRequired ? '필수' : '선택'}</Text>
      </View>
      {description && (
        <Text className="text-gray-400 text-14">{description}</Text>
      )}
    </View>
    <UiCheckbox isChecked={isChecked} onValueChangeHandler={onValueChange} />
  </View>
);

export default function AgreeTosScreen({
  navigation,
}: RegisterStackScreenProps<'AgreeTos'>) {
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    location: false,
    sensitive: false,
    marketing: false,
  });

  const handleSelectAll = (selectAll: boolean) => {
    setAgreements({
      terms: selectAll,
      privacy: selectAll,
      location: selectAll,
      sensitive: selectAll,
      marketing: selectAll,
    });
  };

  const handleConsentChange = (
    key: keyof typeof agreements,
    value: boolean,
  ) => {
    setAgreements(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log(agreements);
    navigation.navigate('Start');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <Text className="font-inter-b text-md text-black">
          이용약관에 동의해주세요
        </Text>
        <View className="h-4/6  items-center justify-start pt-4 ">
          <View className="h-2/3 w-full bg-white">
            <CheckboxItem
              label="이용약관 동의"
              isRequired
              isChecked={agreements.terms}
              onValueChange={value => handleConsentChange('terms', value)}
            />
            <CheckboxItem
              label="개인정보 수집 및 이용 동의"
              isRequired
              isChecked={agreements.privacy}
              onValueChange={value => handleConsentChange('privacy', value)}
            />
            <CheckboxItem
              label="위치정보 이용약관 동의"
              isRequired
              isChecked={agreements.location}
              onValueChange={value => handleConsentChange('location', value)}
            />
            <CheckboxItem
              label="민감정보 이용약관 동의"
              isRequired
              isChecked={agreements.sensitive}
              onValueChange={value => handleConsentChange('sensitive', value)}
            />
            <CheckboxItem
              label="마케팅 수신 동의"
              isRequired={false}
              description="이벤트 혜택 정보를 받을 수 있어요"
              isChecked={agreements.marketing}
              onValueChange={value => handleConsentChange('marketing', value)}
            />
            <Pressable
              className="flex-row justify-between items-center bg-gray-300 h-1/6 w-full mt-6 rounded-md px-4"
              onPress={() =>
                handleSelectAll(!Object.values(agreements).every(Boolean))
              }
            >
              <Text className=" font-inter-b text-black text-sm">
                전체 동의
              </Text>
              <UiCheckbox
                isChecked={Object.values(agreements).every(Boolean)}
                onValueChangeHandler={handleSelectAll}
              />
            </Pressable>
          </View>
        </View>
        <View className="h-1/5 flex">
          <View className="h-2/3 mt-2">
            <RectButton activate onPress={handleSubmit} text="시작하기" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
