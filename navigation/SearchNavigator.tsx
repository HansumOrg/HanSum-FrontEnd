import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/main/search/CalendarScreen';
import SearchResultScreen from '../screens/main/search/SearchResultScreen';
import FilterScreen from '../screens/main/search/FilterScreen';
import SearchScreen from '../screens/main/search/SearchScreen';
import { SearchStackParamList } from './types';
import SearchContextProvider from '../components/search-page/SearchContext';
import SpacialHeader from '../components/search-page/SpacialHeader';

const CalendarHeader = () => <SpacialHeader title="날짜 선택" />;
const FilterHeader = () => <SpacialHeader title="필터" />;

export default function SearchNavigator() {
  const SearchStack = createStackNavigator<SearchStackParamList>();

  return (
    <SearchContextProvider>
      <SearchStack.Navigator initialRouteName="Search">
        <SearchStack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <SearchStack.Screen
          name="Filter"
          component={FilterScreen}
          options={{
            headerLeft: FilterHeader,
          }}
        />
        <SearchStack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            headerLeft: CalendarHeader,
          }}
        />
        <SearchStack.Screen
          name="SearchResult"
          component={SearchResultScreen}
          options={{ headerShown: false }}
        />
      </SearchStack.Navigator>
    </SearchContextProvider>
  );
}
