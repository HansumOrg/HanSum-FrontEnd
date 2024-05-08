import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';
import { GetStartedStackParamList } from './types';

export default function GetStartedNavigator() {
  const GetStartedStack = createStackNavigator<GetStartedStackParamList>();

  return (
    <GetStartedStack.Navigator initialRouteName="LoginNavigator">
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
