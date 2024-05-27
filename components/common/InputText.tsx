import React from 'react';
import { View, TextInput } from 'react-native';
import { InputTextProps } from '../../screens/get-started/register/types';

export default function InputText(props: InputTextProps) {
  // logic
  const {
    name,
    isWrong,
    onChangeText,
    value,
    textContentType,
    secureTextEntry,
  } = props;
  if (!isWrong) {
    return (
      <View className=" border-b border-black ">
        <TextInput
          className="font-inter-r placeholder:font-inter-r text-black"
          placeholder={name}
          placeholderTextColor="#"
          value={value}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>
    );
  }

  return (
    <View className=" border-b border-red-1 ">
      <TextInput
        className="font-inter-r placeholder:font-inter-r text-black"
        placeholder={name}
        placeholderTextColor="#"
        value={value}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
}
