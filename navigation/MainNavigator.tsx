import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendationsScreen from '../screens/main/RecommendationsScreen';
import SearchNavigator from './SearchNavigator';
import ChatNavigator from './ChatNavigator';
import MyPageNavigator from './MyPageNavigator';
import FavoritesScreen from '../screens/main/FavoritesScreen';
import GuesthouseDetailsNavigator from './GuesthouseDetailsNavigator';
import { MainTabParamList } from './types';

export default function MainNavigator() {
  const MainTab = createBottomTabNavigator<MainTabParamList>();

  return (
    <MainTab.Navigator initialRouteName="Recommendations">
      <MainTab.Screen
        name="Recommendations"
        component={RecommendationsScreen}
      />
      <MainTab.Screen name="SearchNavigator" component={SearchNavigator} />
      <MainTab.Screen name="ChatNavigator" component={ChatNavigator} />
      <MainTab.Screen name="MyPageNavigator" component={MyPageNavigator} />
      <MainTab.Screen name="Favorites" component={FavoritesScreen} />
      <MainTab.Screen
        name="GuesthouseDetailsNavigator"
        component={GuesthouseDetailsNavigator}
      />
    </MainTab.Navigator>
  );
}
