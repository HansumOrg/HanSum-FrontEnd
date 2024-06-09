import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/get-started/register/RegisterScreen';
import EnterPersonalInformationScreen from '../screens/get-started/register/EnterPersonalInformationScreen';
import EnterNicknameScreen from '../screens/get-started/register/EnterNicknameScreen';
import SelectMbtiScreen from '../screens/get-started/register/SelectMbtiScreen';
import AgreeTosScreen from '../screens/get-started/register/AgreeTosScreen';
import StartScreen from '../screens/get-started/register/StartScreen';
import { RegisterStackParamList } from './types';
import CommonHeader from '../components/common/CommonHeader';
import RegisterContextProvider from '../components/get-started/StartContext';

const BackHeader = () => <CommonHeader title="" />;
const MbtiHeader = () => <CommonHeader title="MBTI 유형 선택" />;
const AgreeTosHeader = () => <CommonHeader title="이용약관 동의" />;

export default function RegisterNavigator() {
  const RegisterStack = createStackNavigator<RegisterStackParamList>();

  return (
    <RegisterContextProvider>
      <RegisterStack.Navigator initialRouteName="Register">
        <RegisterStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerLeft: BackHeader }}
        />
        <RegisterStack.Screen
          name="EnterPersonalInformation"
          component={EnterPersonalInformationScreen}
          options={{ headerLeft: BackHeader }}
        />
        <RegisterStack.Screen
          name="EnterNickname"
          component={EnterNicknameScreen}
          options={{ headerLeft: BackHeader }}
        />
        <RegisterStack.Screen
          name="SelectMbti"
          component={SelectMbtiScreen}
          options={{ headerLeft: MbtiHeader }}
        />
        <RegisterStack.Screen
          name="AgreeTos"
          component={AgreeTosScreen}
          options={{ headerLeft: AgreeTosHeader }}
        />
        <RegisterStack.Screen name="Start" component={StartScreen} />
      </RegisterStack.Navigator>
    </RegisterContextProvider>
  );
}
