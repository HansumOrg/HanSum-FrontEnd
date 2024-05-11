import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

interface FindButtonProps extends PressableProps {
  text1: string;
  text2: string;
  onPress1: () => void;
  onPress2: () => void;
}

export default function FindButton(props: FindButtonProps) {
  const { onPress1, onPress2, text1, text2 } = props;

  return (
    <View className="flex space-x-2 flex-row divide-x-2 items-center justify-center mt-2 w-full ">
      <Pressable onPress={onPress1}>
        <Text className="text-black">{text1}</Text>
      </Pressable>
      <Pressable onPress={onPress2}>
        <Text className="ml-2 text-black">{text2}</Text>
      </Pressable>
    </View>
  );
}
