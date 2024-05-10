import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';

export default function RegisterScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RegisterStackScreenProps<'Register'>) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTest, setPasswordTest] = useState('');

  const signupSumit = () => {
    console.log('signupSumit');
    console.log(userId, password);
  };
  const idTest = () => {
    console.log('idTest');
    console.log(userId);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Text>안녕하세요!</Text>
            <Text>사용하실 정보를 입력해주세요.</Text>
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="이름"
              value={userName}
              onChangeText={text => setUserName(text)}
            />
            <InputText
              name="아이디"
              value={userId}
              onChangeText={text => setUserId(text)}
            />
          </View>
          <View className="bg-white h-1/3 mt-2">
            <RectButton activate onPress={idTest} text="중복확인" />
          </View>
          <View className=" bg-white h-1/3 ">
            <InputText
              name="비밀번호"
              value={password}
              textContentType="password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
            <InputText
              name="비밀번호 확인"
              textContentType="password"
              secureTextEntry
              value={passwordTest}
              onChangeText={text => setPasswordTest(text)}
            />
          </View>
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              activate={password !== '' && password === passwordTest}
              onPress={() => {
                signupSumit();
                navigation.navigate('EnterPersonalInformation');
              }}
              text="다음"
            />
          </View>
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
    </SafeAreaView>
  );
}
