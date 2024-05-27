import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ApiTestStackParamList } from './types';
import ApiTestScreen from '../screens/api-test/ApiTestScreen';
import JoinScreen from '../screens/api-test/JoinScreen';

export default function ApiTestNavigator() {
  const ApiTestStack = createStackNavigator<ApiTestStackParamList>();

  return (
    <ApiTestStack.Navigator initialRouteName="ApiTest">
      <ApiTestStack.Screen
        name="ApiTest"
        component={ApiTestScreen}
        options={{
          headerShown: false,
        }}
      />
      <ApiTestStack.Screen name="Join" component={JoinScreen} />
    </ApiTestStack.Navigator>
  );
}
