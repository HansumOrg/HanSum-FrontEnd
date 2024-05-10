import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface RectButtonProps extends PressableProps {
  text: string;
  activate: boolean;
}

export default function RectButton(props: RectButtonProps) {
  const { onPress, text, activate } = props;

  return (
    <Pressable
      className={
        activate
          ? 'bg-primary-2 h-1/2 flex justify-center items-center rounded-md'
          : 'bg-gray-300 h-1/2 flex justify-center items-center rounded-md'
      }
      onPress={activate ? onPress : undefined}
    >
      <Text className="font-inter-b text-white">{text}</Text>
    </Pressable>
  );
}
