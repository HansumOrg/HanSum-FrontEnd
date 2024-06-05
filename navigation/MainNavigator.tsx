import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendationsScreen from '../screens/main/RecommendationsScreen';
import SearchNavigator from './SearchNavigator';
import MyPageNavigator from './MyPageNavigator';
import FavoritesScreen from '../screens/main/FavoritesScreen';
import { MainTabParamList } from './types';
import IconHeart from '../assets/images/icon_heartnavigator.svg';
import IconProfile from '../assets/images/icon_profilenavigator.svg';
import IconHome from '../assets/images/icon_homenavigator.svg';
import IconSearch from '../assets/images/icon_serachnavigator.svg';
import GuesthouseDetailsNavigator from './GuesthouseDetailsNavigator';

const BottomIconHeart = ({ focused }: { focused: boolean }) => (
  <IconHome width={24} height={24} fill={focused ? '#000000' : '#C2C2C2'} />
);

const BottomIconSearch = ({ focused }: { focused: boolean }) => (
  <IconSearch width={24} height={24} fill={focused ? '#000000' : '#C2C2C2'} />
);

const BottomIconProfile = ({ focused }: { focused: boolean }) => (
  <IconProfile width={24} height={24} fill={focused ? '#000000' : '#C2C2C2'} />
);

const BottomIconFavorites = ({ focused }: { focused: boolean }) => (
  <IconHeart width={24} height={24} fill={focused ? '#000000' : '#C2C2C2'} />
);

export default function MainNavigator() {
  const MainTab = createBottomTabNavigator<MainTabParamList>();

  return (
    <MainTab.Navigator
      initialRouteName="Recommendations"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display:
            route.name === 'GuesthouseDetailsNavigator' ? 'none' : 'flex',
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#C2C2C2',
        tabBarShowLabel: true,
      })}
    >
      <MainTab.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{
          title: '홈',
          tabBarIcon: focused => BottomIconHeart(focused),
        }}
      />
      <MainTab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display:
              getFocusedRouteNameFromRoute(route) === 'SearchResult' ||
              getFocusedRouteNameFromRoute(route) === 'Calendar' ||
              getFocusedRouteNameFromRoute(route) === 'Filter'
                ? 'none'
                : 'flex',
          },
          headerShown: false,
          title: '검색',
          tabBarIcon: ({ focused }) => BottomIconSearch({ focused }),
        })}
      />
      <MainTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: '찜',
          tabBarIcon: ({ focused }) => BottomIconFavorites({ focused }),
        }}
      />
      <MainTab.Screen
        name="MyPageNavigator"
        component={MyPageNavigator}
        options={{
          headerShown: false,
          title: '내 정보',
          tabBarIcon: ({ focused }) => BottomIconProfile({ focused }),
        }}
      />
      <MainTab.Screen
        name="GuesthouseDetailsNavigator"
        component={GuesthouseDetailsNavigator}
        options={{
          tabBarButton: () => null,
        }}
      />
    </MainTab.Navigator>
  );
}
