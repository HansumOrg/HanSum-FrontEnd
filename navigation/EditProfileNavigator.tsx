import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from '../screens/main/my-page/edit-profile/EditProfileScreen';
import ChangeNicknameScreen from '../screens/main/my-page/edit-profile/ChangeNicknameScreen';
import AddInterestScreen from '../screens/main/my-page/edit-profile/AddInterestScreen';
import ViewReceivedStickerScreen from '../screens/main/my-page/edit-profile/ViewReceivedStickerScreen';
import { EditProfileStackParamList } from './types';

export default function EditProfileNavigator() {
  const EditProfileStack = createStackNavigator<EditProfileStackParamList>();

  return (
    <EditProfileStack.Navigator initialRouteName="EditProfile">
      <EditProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <EditProfileStack.Screen
        name="ChangeNickname"
        component={ChangeNicknameScreen}
        options={{ headerShown: false }}
      />
      <EditProfileStack.Screen
        name="AddInterest"
        component={AddInterestScreen}
        options={{ headerShown: false }}
      />
      <EditProfileStack.Screen
        name="ViewReceivedSticker"
        component={ViewReceivedStickerScreen}
        options={{ headerShown: false }}
      />
    </EditProfileStack.Navigator>
  );
}
