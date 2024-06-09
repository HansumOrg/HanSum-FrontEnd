import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { LoginStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import FindButton from '../../../components/common/FindButton';
import InputText from '../../../components/common/InputText';
import Title from '../../../components/common/Title';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';
import { useLogin, useAppSelector } from '../../../api/hooks';

export default function LoginScreen({
  route,
  navigation,
}: LoginStackScreenProps<'Login'>) {
  const initialData = {
    username: '',
    password: '',
  };

  const { handleLogin, isLoginLoading, loginError } = useLogin();

  const [loginData, setLoginData] = useState(initialData);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const access = useAppSelector(state => state.auth.access);

  useEffect(() => {
    setLoginData({ username: userId, password });
  }, [userId, password]);

  const loginSubmit = async () => {
    const res = await handleLogin(loginData);
    if (isSuccessResponse(res)) {
      console.log('login success');
      setIsWrong(false);
    } else if (isFailedResponse(res)) {
      console.log(res);
      setIsWrong(true);
    } else {
      console.log('잘못된 응답입니다.');
      setIsWrong(true);
    }
  };

  const onPress = () => {
    console.log('none');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 w-full">
            <Title text="안녕하세요!" />
            <Title text="아이디와 비밀번호를 입력해주세요." />
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="아이디"
              value={userId}
              onChangeText={text => setUserId(text)}
              isWrong={isWrong}
            />
            <InputText
              name="비밀번호"
              value={password}
              textContentType="password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              isWrong={isWrong}
            />
          </View>
          {isWrong ? (
            <Text className=" font-inter-r text-sss text-red-1">
              아이디와 비밀번호가 일치하지 않습니다. 다시 입력해주세요.
            </Text>
          ) : null}
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate={password !== '' && userId !== ''}
              onPress={loginSubmit}
              text="로그인 하기"
            />
            <FindButton
              onPress1={onPress}
              onPress2={onPress}
              text1="아이디 찾기"
              text2="비밀번호 찾기"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
