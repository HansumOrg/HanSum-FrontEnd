import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import BackIcon from '../../assets/icon/header_back.svg'; // 올바른 경로로 수정

interface CommonHeaderProps {
  title: string;
}

export default function CommonHeader({ title }: CommonHeaderProps) {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full justify-center items-center flex-row">
      <Pressable
        className="h-full w-full py-1 justify-center items-star absolute"
        onPress={() => navigation.goBack()}
      >
        <BackIcon
          height="80%"
          width="20%"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </Pressable>
      <View className="h-full w-full flex-row items-center justify-center gap-4">
        <Text className="font-inter-b full text-left text-2xl text-black">
          {title}
        </Text>
      </View>
    </View>
  );
}
