import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/get-started/register/RegisterScreen';
import EnterPersonalInformationScreen from '../screens/get-started/register/EnterPersonalInformationScreen';
import EnterNicknameScreen from '../screens/get-started/register/EnterNicknameScreen';
import SelectMbtiScreen from '../screens/get-started/register/SelectMbtiScreen';
import AgreeTosScreen from '../screens/get-started/register/AgreeTosScreen';
import StartScreen from '../screens/get-started/register/StartScreen';
import { RegisterStackParamList } from './types';

export default function RegisterNavigator() {
  const RegisterStack = createStackNavigator<RegisterStackParamList>();

  return (
    <RegisterStack.Navigator initialRouteName="Register">
      <RegisterStack.Screen name="Register" component={RegisterScreen} />
      <RegisterStack.Screen
        name="EnterPersonalInformation"
        component={EnterPersonalInformationScreen}
      />
      <RegisterStack.Screen
        name="EnterNickname"
        component={EnterNicknameScreen}
      />
      <RegisterStack.Screen name="SelectMbti" component={SelectMbtiScreen} />
      <RegisterStack.Screen name="AgreeTos" component={AgreeTosScreen} />
      <RegisterStack.Screen name="Start" component={StartScreen} />
    </RegisterStack.Navigator>
  );
}
