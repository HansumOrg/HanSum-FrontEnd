import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuesthouseDetailsScreen from '../screens/main/guesthouse-details/GuesthouseDetailsScreen';
import ChatGuideScreen from '../screens/main/guesthouse-details/ChatGuideScreen';
import ReservationScreen from '../screens/main/guesthouse-details/ReservationScreen';
import ReservationCompleteScreen from '../screens/main/guesthouse-details/ReservationCompleteScreen';
import { GuesthouseDetailsStackParamList } from './types';

export default function GuesthouseDetailsNavigator() {
  const GuesthouseDetailsStack =
    createStackNavigator<GuesthouseDetailsStackParamList>();

  return (
    <GuesthouseDetailsStack.Navigator initialRouteName="GuesthouseDetails">
      <GuesthouseDetailsStack.Screen
        name="GuesthouseDetails"
        component={GuesthouseDetailsScreen}
      />
      <GuesthouseDetailsStack.Screen
        name="ChatGuide"
        component={ChatGuideScreen}
      />
      <GuesthouseDetailsStack.Screen
        name="Reservation"
        component={ReservationScreen}
      />
      <GuesthouseDetailsStack.Screen
        name="ReservationComplete"
        component={ReservationCompleteScreen}
      />
    </GuesthouseDetailsStack.Navigator>
  );
}
