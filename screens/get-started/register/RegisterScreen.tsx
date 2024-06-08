import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';
import Title from '../../../components/common/Title';
import { setJoinState } from '../../../api/slices/joinSlice';
import { JoinSuccessResponse } from '../../../api/types';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';
import { useCheckUsername, useAppDispatch, useJoin } from '../../../api/hooks';

export default function RegisterScreen({
  navigation,
}: RegisterStackScreenProps<'Register'>) {
  const initialData = {
    username: '',
    password: '',
    name: '',
    phone: '',
    sex: '',
    birthday: '',
    nickname: '',
    mbti: '',
    userAgreement: 0,
  };
  const [joinData, setJoinData] = useState(initialData);
  const [passwordTest, setPasswordTest] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { handleJoin, isJoinLoading, joinError } = useJoin();
  const { handleCheckUsername, isUsernameLoading, usernameError } =
    useCheckUsername();

  const dispatch = useAppDispatch();

  const handleCheckUsernamePress = async () => {
    const res = await handleCheckUsername(joinData.username);
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

  const signupSubmit = async () => {
    dispatch(setJoinState(joinData));
    const res = await handleJoin();
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      const successRes = res as JoinSuccessResponse;
      console.log(successRes.name);
      console.log(successRes.userId);
      console.log('success');
      navigation.navigate('EnterPersonalInformation');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
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
              value={joinData.nickname}
              onChangeText={text =>
                setJoinData({ ...joinData, nickname: text })
              }
            />
            <InputText
              name="아이디"
              value={joinData.username}
              onChangeText={text =>
                setJoinData({ ...joinData, username: text })
              }
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
              isActivate={joinData.username !== ''}
              onPress={handleCheckUsernamePress}
              text="중복확인"
            />
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="비밀번호"
              value={joinData.password}
              textContentType="password"
              secureTextEntry
              onChangeText={text =>
                setJoinData({ ...joinData, password: text })
              }
            />
            <InputText
              name="비밀번호 확인"
              textContentType="password"
              secureTextEntry
              value={passwordTest}
              onChangeText={text => setPasswordTest(text)}
              isWrong={joinData.password !== passwordTest}
            />
          </View>
          {joinData.password !== passwordTest ? (
            <Text className=" font-inter-r text-sss text-red-1">
              비밀번호가 일치하지 않습니다. 다시 입력해주세요.
            </Text>
          ) : null}
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate={
                joinData.password !== '' &&
                joinData.password === passwordTest &&
                !isDuplicate &&
                isChecked
              }
              onPress={signupSubmit}
              text="다음"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
