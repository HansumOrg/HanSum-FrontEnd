import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/get-started/login/LoginScreen';
import FindIdScreen from '../screens/get-started/login/FindIdScreen';
import FindPasswordScreen from '../screens/get-started/login/FindPasswordScreen';
import { LoginStackParamList } from './types';

export default function LoginNavigator() {
  const LoginStack = createStackNavigator<LoginStackParamList>();

  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="FindId" component={FindIdScreen} />
      <LoginStack.Screen name="FindPassword" component={FindPasswordScreen} />
    </LoginStack.Navigator>
  );
}
