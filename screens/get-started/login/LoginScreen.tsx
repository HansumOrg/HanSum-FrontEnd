import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { LoginStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import FindButton from '../../../components/common/FindButton';
import InputText from '../../../components/common/InputText';

export default function LoginScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: LoginStackScreenProps<'Login'>) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const loginSumit = () => {
    console.log('loginSumit');
    console.log(userId, password);
  };
  const onPress = () => {
    console.log('fuck');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3">
            <Text>안녕하세요!</Text>
            <Text>아이디와 비밀번호를 입력해주세요.</Text>
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="아이디"
              value={userId}
              onChangeText={text => setUserId(text)}
            />
            <InputText
              name="비밀번호"
              value={password}
              textContentType="password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              activate={password !== '' && userId !== ''}
              onPress={loginSumit}
              text="로그인 하기"
            />
            <FindButton
              onPress1={onPress}
              onPress2={onPress}
              text1="아이디 찾기"
              text2="비밀번호 찾기"
            />
            {/* <View className="flex space-x-2 flex-row divide-x-2 items-center justify-center mt-2 w-full ">
              <View>
                <Text className="text-black">아이디 찾기</Text>
              </View>
              <View>
                <Text className="ml-2 text-black">비밀번호 찾기</Text>
              </View> 
            </View>
            */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
