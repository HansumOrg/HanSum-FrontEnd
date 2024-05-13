import React from 'react';
import { View, Text, Pressable } from 'react-native';

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
        return 'w-full h-full';
      case 3:
      case 4:
        return 'w-1/3 h-1/3';
      case 2:
      case 5:
        return 'w-2/3 h-2/3';
      default:
        return 'w-2/3 h-2/3';
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
  // TODO: 선이 제대로 적용되지 않는 이슈 및 가운데 텍스트가 들어가는 이튜 해경해야함

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
                className="flex flex-row items-center rounded-full justify-center h-full w-1/6"
                onPress={() => onSelectItem(option.value)}
              >
                <View
                  className={` bg-white items-center justify-center border-2 rounded-full border-primary-2 ${getOptionStyle(
                    options.length,
                    option.key,
                  )}`}
                >
                  {isActive ? (
                    <View className="bg-primary-2 rounded-full w-5/6 h-5/6  " />
                  ) : (
                    getTextStyle(options.length, option.key || '', mbti1, mbti2)
                  )}
                </View>
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
