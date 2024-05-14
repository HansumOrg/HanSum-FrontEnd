import React from 'react';
import { Text, View } from 'react-native';

interface GenderButtonProps {
  text: string;
  activate: boolean;
}

export default function GenderButton(props: GenderButtonProps) {
  const { text, activate } = props;

  return (
    <View
      className={
        activate
          ? 'flex rounded-xl border-2 border-primary-2 justify-center items-center h-3/5 mt-3 bg-white '
          : 'flex rounded-xl border-2 border-gray-2 justify-center items-center h-3/5 mt-3 bg-white '
      }
    >
      <Text
        className={
          activate
            ? 'font-inter-b text-md text-primary-2'
            : 'font-inter-b text-md text-gray-2'
        }
      >
        {text}
      </Text>
    </View>
  );
}
