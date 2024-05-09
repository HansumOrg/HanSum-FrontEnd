import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

interface RectButtonProps extends PressableProps {
  text: string;
}

export default function RectButton(props: RectButtonProps) {
  //logic
  const { onPress, text } = props;

  return (
    <Pressable
      className="bg-primary-2 h-1/2 flex justify-center items-center rounded-md"
      onPress={onPress}
    >
      <Text className="font-inter-b text-white">{text}</Text>
    </Pressable>
  );
}
