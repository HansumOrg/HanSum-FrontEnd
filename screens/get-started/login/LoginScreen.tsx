import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Alert } from 'react-native';
import { LoginStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import FindButton from '../../../components/common/FindButton';
import InputText from '../../../components/common/InputText';
import Title from '../../../components/common/Title';

export default function LoginScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: LoginStackScreenProps<'Login'>) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  let isWrong = false;
  const loginSubmit = async () => {
    try {
      const response = await fetch(' /login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userId,
          password,
        }),
      });
      const statusCode = response.status;
      // const accessToken = response.headers.get('access');
      // const refreshToken = response.headers.get('refresh');
      if (statusCode === 200) {
        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);
        // 로그인 성공 처리 로직
      } else if (response.status === 401) {
        isWrong = true;
      } else {
        // 기타 오류 처리
        Alert.alert('오류 발생', '다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onPress = () => {
    console.log('fuck');
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
              onPress={() => {
                loginSubmit().catch(error => {
                  console.error(error);
                  // 필요한 경우 여기에 추가적인 오류 처리 로직을 추가할 수 있습니다.
                });
              }}
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
