import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';
import Title from '../../../components/common/Title';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';
import { useCheckUsername } from '../../../api/hooks';
import { useRegisterContext } from '../../../components/get-started/StartContext';
import { RegisterProps } from '../../../types';

export default function RegisterScreen({
  navigation,
}: RegisterStackScreenProps<'Register'>) {
  const context = useRegisterContext();
  const [passwordTest, setPasswordTest] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { handleCheckUsername } = useCheckUsername();

  const handleCheckUsernamePress = async () => {
    const res = await handleCheckUsername(context.registerState.username);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('check username success');
      setIsDuplicate(false);
      setIsChecked(true);
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      setIsDuplicate(true);
      setIsChecked(false);
      console.log(res);
    } else {
      console.log('잘못된 응답입니다.');
      setIsChecked(false);
      setIsDuplicate(true);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Title text="안녕하세요!" />
            <Title text="사용하실 정보를 입력해주세요." />
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="이름"
              value={context.registerState.name}
              onChangeText={text => {
                context.setRegisterState((prevState: RegisterProps) => ({
                  ...prevState,
                  name: text,
                }));
              }}
            />
            <InputText
              name="아이디"
              value={context.registerState.username}
              onChangeText={text => {
                context.setRegisterState((prevState: RegisterProps) => ({
                  ...prevState,
                  username: text,
                }));
              }}
              isWrong={isDuplicate}
            />
          </View>
          {isDuplicate ? (
            <Text className=" font-inter-r text-sss text-red-1">
              이미 존재하는 아이디입니다. 다시 입력해주세요.
            </Text>
          ) : null}
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate={context.registerState.username !== ''}
              onPress={handleCheckUsernamePress}
              text="중복확인"
            />
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="비밀번호"
              value={context.registerState.password}
              textContentType="password"
              secureTextEntry
              onChangeText={text => {
                context.setRegisterState((prevState: RegisterProps) => ({
                  ...prevState,
                  password: text,
                }));
              }}
            />
            <InputText
              name="비밀번호 확인"
              textContentType="password"
              secureTextEntry
              value={passwordTest}
              onChangeText={text => setPasswordTest(text)}
              isWrong={context.registerState.password !== passwordTest}
            />
          </View>
          {context.registerState.password !== passwordTest ? (
            <Text className=" font-inter-r text-sss text-red-1">
              비밀번호가 일치하지 않습니다. 다시 입력해주세요.
            </Text>
          ) : null}
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate={
                context.registerState.password !== '' &&
                context.registerState.password === passwordTest &&
                !isDuplicate &&
                isChecked
              }
              onPress={() => {
                navigation.navigate('EnterPersonalInformation');
              }}
              text="다음"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
