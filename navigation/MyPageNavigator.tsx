import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPageScreen from '../screens/main/my-page/MyPageScreen';
import EditProfileNavigator from './EditProfileNavigator';
import NotificationsScreen from '../screens/main/my-page/NotificationsScreen';
import ReviewsScreen from '../screens/main/my-page/ReviewsScreen';
import LogoutScreen from '../screens/main/my-page/LogoutScreen';
import { MyPageStackParamList } from './types';
import MyPageContextProvider from '../components/my-page/MyPageContext';
import CommonHeader from '../components/common/CommonHeader';

const ReviewsHeader = () => <CommonHeader title="리뷰 남기기" />;
const MyPageStack = createStackNavigator<MyPageStackParamList>();

export default function MyPageNavigator() {
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

        <MyPageStack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{
            headerLeft: ReviewsHeader,
          }}
        />
        <MyPageStack.Screen name="Logout" component={LogoutScreen} />
      </MyPageStack.Navigator>
    </MyPageContextProvider>
  );
}
