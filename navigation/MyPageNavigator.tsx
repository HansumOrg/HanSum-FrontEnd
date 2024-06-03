import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPageScreen from '../screens/main/my-page/MyPageScreen';
import EditProfileNavigator from './EditProfileNavigator';
import NotificationsScreen from '../screens/main/my-page/NotificationsScreen';
import ReviewsScreen from '../screens/main/my-page/ReviewsScreen';
import LogoutScreen from '../screens/main/my-page/LogoutScreen';
import { MyPageStackParamList } from './types';
import MyPageContextProvider from '../components/my-page/MyPageContext';

export default function MyPageNavigator() {
  const MyPageStack = createStackNavigator<MyPageStackParamList>();

  return (
    <MyPageContextProvider>
      <MyPageStack.Navigator initialRouteName="MyPage">
        <MyPageStack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ headerShown: false }}
        />
        <MyPageStack.Screen
          name="EditProfileNavigator"
          component={EditProfileNavigator}
          options={{ headerShown: false }}
        />
        <MyPageStack.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
        <MyPageStack.Screen name="Reviews" component={ReviewsScreen} />
        <MyPageStack.Screen name="Logout" component={LogoutScreen} />
      </MyPageStack.Navigator>
    </MyPageContextProvider>
  );
}
