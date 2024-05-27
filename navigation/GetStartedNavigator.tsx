import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from '../screens/get-started/GetStartedScreen';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';
import { GetStartedStackParamList } from './types';

export default function GetStartedNavigator() {
  const GetStartedStack = createStackNavigator<GetStartedStackParamList>();

  return (
    <GetStartedStack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{ headerShown: false }}
    >
      {/* <GetStartedStack.Navigator
      initialRouteName="LoginNavigator"
      screenOptions={{ headerShown: false }}
    > */}
      <GetStartedStack.Screen name="GetStarted" component={GetStartedScreen} />
      <GetStartedStack.Screen
        name="LoginNavigator"
        component={LoginNavigator}
      />
      <GetStartedStack.Screen
        name="RegisterNavigator"
        component={RegisterNavigator}
      />
    </GetStartedStack.Navigator>
  );
}
