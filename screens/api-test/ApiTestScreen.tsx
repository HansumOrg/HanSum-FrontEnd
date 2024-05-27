import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { ApiTestStackScreenProps } from '../../navigation/types';

export default function ApiTestScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: ApiTestStackScreenProps<'ApiTest'>) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="default" />
        <View className="h-20 bg-red-300 flex justify-center items-center">
          <Text className="text-2xl text-white">ApiTest</Text>
        </View>
        <Pressable
          className="h-10 bg-blue-200 flex justify-center items-center"
          onPress={() => navigation.navigate('Join')}
        >
          <Text>회원가입 테스트</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
