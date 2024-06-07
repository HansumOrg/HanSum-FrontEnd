import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import HeaderCancleIcon from '../../assets/icon/icon_cancel.svg';

interface SpacialHeaderProps {
  title: string;
}

export default function SpacialHeader({ title }: SpacialHeaderProps) {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full justify-center items-center flex-row">
      <Pressable
        className="h-full w-full py-1 justify-center items-star absolute"
        onPress={() => navigation.goBack()}
      >
        <HeaderCancleIcon
          height="40%"
          width="20%"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </Pressable>
      <View className="h-full w-full flex-row items-center justify-center gap-4">
        <Text className="font-inter-b full text-left text-lg text-black">
          {title}
        </Text>
      </View>
    </View>
  );
}
