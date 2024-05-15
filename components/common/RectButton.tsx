import React from 'react';
import { Text, Pressable } from 'react-native';
import { RectButtonProps } from '../../screens/get-started/register/types';

export default function RectButton(props: RectButtonProps) {
  const { onPress, text, isActivate } = props;

  return (
    <Pressable
      className={
        isActivate
          ? 'bg-primary-2 h-1/2 flex justify-center items-center rounded-md'
          : 'bg-gray-300 h-1/2 flex justify-center items-center rounded-md'
      }
      onPress={isActivate ? onPress : undefined}
    >
      <Text
        className={
          isActivate
            ? 'font-inter-b text-md text-white'
            : 'font-inter-b text-md text-black'
        }
      >
        {text}
      </Text>
    </Pressable>
  );
}
