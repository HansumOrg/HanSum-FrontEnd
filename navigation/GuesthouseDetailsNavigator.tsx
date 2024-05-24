import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuesthouseDetailsScreen from '../screens/main/guesthouse-details/GuesthouseDetailsScreen';
import ChatGuideScreen from '../screens/main/guesthouse-details/ChatGuideScreen';
import ReservationScreen from '../screens/main/guesthouse-details/ReservationScreen';
import { GuesthouseDetailsStackParamList } from './types';
import Header from '../components/common/HeaderComponent';

const GuesthouseDetailHeader = () => <Header />;

export default function GuesthouseDetailsNavigator() {
  const GuesthouseDetailsStack =
    createStackNavigator<GuesthouseDetailsStackParamList>();

  return (
    <GuesthouseDetailsStack.Navigator initialRouteName="GuesthouseDetails">
      <GuesthouseDetailsStack.Screen
        name="GuesthouseDetails"
        component={GuesthouseDetailsScreen}
        options={{
          headerTransparent: true,
          headerTitle: GuesthouseDetailHeader,
        }}
      />
      <GuesthouseDetailsStack.Screen
        name="ChatGuide"
        component={ChatGuideScreen}
      />
      <GuesthouseDetailsStack.Screen
        name="Reservation"
        component={ReservationScreen}
      />
    </GuesthouseDetailsStack.Navigator>
  );
}
