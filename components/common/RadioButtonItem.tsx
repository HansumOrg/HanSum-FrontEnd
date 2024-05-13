import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';

interface RadioButtonsItem {
  key: string;
  label: string;
  value: string;
  size: number;
}

interface RadioButtonsProps {
  options: RadioButtonsItem[];
  activeItem: string;
  onSelectItem: (selectedItem: string) => void;
  text1: string;
  text2: string;
  mbti1: string;
  mbti2: string;
}

export default function RadioButtons(props: RadioButtonsProps) {
  const { options, activeItem, onSelectItem, text1, text2, mbti1, mbti2 } =
    props;
  function getOptionStyle(length: number, index: string): string {
    const idx = parseInt(index, 10);
    switch (idx) {
      case 1:
      case 6:
        return 'w-16 h-16';
      case 3:
      case 4:
        return 'w-8 h-8';
      case 2:
      case 5:
        return 'w-12 h-12';
      default:
        return 'w-full h-full';
    }
  }

  function getTextStyle(
    length: number,
    index: string,
    Mbti1: string,
    Mbti2: string,
  ): JSX.Element {
    const idx = parseInt(index, 10);
    switch (idx) {
      case 1:
        return (
          <Text className=" text-primary-2 font-inter-b text-2xl">{Mbti1}</Text>
        );
      case 6:
        return (
          <Text className=" text-primary-2 font-inter-b text-2xl">{Mbti2}</Text>
        );
      default:
        return <Text />; // 빈 텍스트 반환
    }
  }

  return (
    <View className="flex h-full w-full justify-center items-center ">
      <View className="flex flex-row h-1/2 w-full justify-between items-center">
        <View className="w-full absolute h-1  bg-primary-2" />
        {options.map(option => {
          const isActive = activeItem === option.value;
          return (
            <React.Fragment key={option.key}>
              {/* Add line before button except for the first one */}
              <Pressable
                className={` bg-white items-center justify-center border-2 rounded-full border-primary-2 ${getOptionStyle(
                  options.length,
                  option.key,
                )}`}
                onPress={() => onSelectItem(option.value)}
              >
                {isActive ? (
                  <View className="bg-primary-2 rounded-full w-5/6 h-5/6  " />
                ) : (
                  getTextStyle(options.length, option.key || '', mbti1, mbti2)
                )}
              </Pressable>
            </React.Fragment>
          );
        })}
      </View>
      <View className="flex-row w-full justify-between mt-1">
        <Text className="font-inter-b text-16 text-black ">{text1}</Text>
        <Text className="font-inter-b text-16 text-black">{text2}</Text>
      </View>
    </View>
  );
}
