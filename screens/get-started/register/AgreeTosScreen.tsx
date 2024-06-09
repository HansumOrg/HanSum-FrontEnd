import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import UiCheckbox from '../../../components/common/Checkbox';
import CheckboxItem from '../../../components/common/CheckboxItem';
import { useRegisterContext } from '../../../components/get-started/StartContext';
import { useAppDispatch, useJoin } from '../../../api/hooks';
import { setJoinState } from '../../../api/slices/joinSlice';
import { JoinSuccessResponse } from '../../../api/types';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';

export default function AgreeTosScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: RegisterStackScreenProps<'AgreeTos'>) {
  const context = useRegisterContext();
  const [userAgreement, setUserAgreement] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    location: false,
    sensitive: false,
    marketing: false,
  });
  // Redux API 적용
  const initialData = {
    username: context.registerState.username,
    password: context.registerState.password,
    name: context.registerState.name,
    phone: context.registerState.phone,
    sex: context.registerState.sex,
    birthday: context.registerState.birthday,
    nickname: context.registerState.nickname,
    mbti: context.registerState.mbti,
    userAgreement: 0,
  };
  const [joinData, setJoinData] = useState(initialData);
  const { handleJoin } = useJoin();
  const dispatch = useAppDispatch();

  const handleJoinPress = async () => {
    setJoinData(prev => ({ ...prev, userAgreement: 1 }));
    dispatch(setJoinState(joinData));
    const res = await handleJoin();
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      const successRes = res as JoinSuccessResponse;
      console.log(successRes.name);
      console.log(successRes.userId);
      console.log('success');
      navigation.navigate('Start');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  useEffect(() => {
    const { terms, privacy, location, sensitive } = agreements;
    setUserAgreement(terms && privacy && location && sensitive);
  }, [agreements]);

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
            <RectButton
              isActivate={userAgreement}
              onPress={handleJoinPress}
              text="시작하기"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
