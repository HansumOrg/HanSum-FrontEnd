import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/main/search/CalendarScreen';
import SearchResultScreen from '../screens/main/search/SearchResultScreen';
import FilterScreen from '../screens/main/search/FilterScreen';
import SearchScreen from '../screens/main/search/SearchScreen';
import { SearchStackParamList } from './types';

export default function SearchNavigator() {
  const SearchStack = createStackNavigator<SearchStackParamList>();

  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen name="Filter" component={FilterScreen} />
      <SearchStack.Screen name="Calendar" component={CalendarScreen} />
      <SearchStack.Screen name="SearchResult" component={SearchResultScreen} />
    </SearchStack.Navigator>
  );
}
