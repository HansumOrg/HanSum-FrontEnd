import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';
import Title from '../../../components/common/Title';
import DuplicateId from '../../../components/api/DuplicateId';

export default function RegisterScreen({
  navigation,
}: RegisterStackScreenProps<'Register'>) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTest, setPasswordTest] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const signupSumit = () => {
    console.log('signupSumit');
    console.log(userId, password);
  };

  const userIdSubmit = async () => {
    try {
      console.log('checkDuplicate');
      await DuplicateId({
        loginId: userId,
        onCheck: isAvailable => {
          setIsDuplicate(!isAvailable);
          console.log(
            isAvailable ? '사용 가능한 ID입니다.' : '이미 사용 중인 ID입니다.',
          );
        },
      });
      setIsChecked(true);
    } catch (error) {
      console.error('중복 확인 중 에러 발생:', error);
      setIsDuplicate(true); // 오류가 발생한 경우 중복으로 간주
    }
  };
  const handleIdTest = () => {
    userIdSubmit().catch(error =>
      console.error('중복 확인 중 에러 발생:', error),
    );
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
              value={userName}
              onChangeText={text => setUserName(text)}
            />
            <InputText
              name="아이디"
              value={userId}
              onChangeText={text => setUserId(text)}
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
              isActivate={userId !== ''}
              onPress={handleIdTest}
              text="중복확인"
            />
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
              isWrong={password !== passwordTest}
            />
          </View>
          {password !== passwordTest ? (
            <Text className=" font-inter-r text-sss text-red-1">
              비밀번호가 일치하지 않습니다. 다시 입력해주세요.
            </Text>
          ) : null}
          <View className="bg-white h-1/3 mt-2">
            <RectButton
              isActivate={
                password !== '' &&
                password === passwordTest &&
                !isDuplicate &&
                isChecked
              }
              onPress={() => {
                signupSumit();
                navigation.navigate('EnterPersonalInformation', {
                  userName,
                  userId,
                  password,
                });
                // 이름과 아이디, 비밀번호를 파라미터로 넘겨줘야함
              }}
              text="다음"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
