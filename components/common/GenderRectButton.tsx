import React from 'react';
import { Text, View } from 'react-native';
import { GenderButtonProps } from '../../screens/get-started/register/types';

export default function GenderButton(props: GenderButtonProps) {
  const { text, isActivate } = props;

  return (
    <View
      className={
        isActivate
          ? 'flex rounded-xl border-2 border-primary-2 justify-center items-center h-3/5 mt-3 bg-white '
          : 'flex rounded-xl border-2 border-gray-2 justify-center items-center h-3/5 mt-3 bg-white '
      }
    >
      <Text
        className={
          isActivate
            ? 'font-inter-b text-md text-primary-2'
            : 'font-inter-b text-md text-gray-2'
        }
      >
        {text}
      </Text>
    </View>
  );
}
