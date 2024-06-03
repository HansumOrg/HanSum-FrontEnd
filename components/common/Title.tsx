import React from 'react';
import { Text } from 'react-native';
import { TitleProps } from '../../types';

export default function Title({ text }: TitleProps) {
  return <Text className="font-inter-b text-lg text-black">{text}</Text>;
}
