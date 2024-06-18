import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MainTabScreenProps } from '../../navigation/types';
import GuesthouseItem from '../../components/common/GuesthouseItem';
import { useGetDibsQuery } from '../../api/endpoints/dibsEndpoints';
import { setGuesthouseId } from '../../api/slices/guesthouseSlice';
import { useAppDispatch } from '../../api/hooks';

// 더미 데이터

const FavoritesScreen: React.FC<MainTabScreenProps<'Favorites'>> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,

  navigation,
}) => {
  const { data: dibsGuesthouses, error, isLoading } = useGetDibsQuery();
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content'); // 상태 바 스타일을 설정
      return () => {
        StatusBar.setBarStyle('dark-content'); // 화면을 벗어날 때 기본 상태로 되돌림
        StatusBar.setTranslucent(false);
      };
    }, []),
  );
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="bg-white flex w-full justify-center items-center">
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            className="w-full"
            data={dibsGuesthouses?.dibs}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>{
                  dispatch(setGuesthouseId(item.guesthouseId));
                  
                  navigation.navigate('GuesthouseDetailsNavigator', {
                    screen: 'GuesthouseDetails',
                  })
                }}
              >
                <GuesthouseItem item={item} />
              </Pressable>
            )}
            keyExtractor={item => item.guesthouseId.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
