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
}

export default function RadioButtons(props: RadioButtonsProps) {
  const { options, activeItem, onSelectItem } = props;
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
        return 'w-2/3 h-2/3'; // 기본적으로 w-2/3 h-2/3 스타일을 반환합니다.
    }
  }

  return (
    <View className="flex  h-full w-full justify-center items-center z-0">
      <View className="flex bo flex-row h-1/2  w-full justify-between items-center relative z-10">
        {options.map(option => {
          const isActive = activeItem === option.value;
          return (
            <Pressable
              className="flex flex-row items-center rounded-full justify-center h-full w-1/6  "
              key={option.key}
              onPress={() => onSelectItem(option.value)}
            >
              <View
                className={`items-center justify-center border-2 rounded-full border-primary-2 ${getOptionStyle(
                  options.length,
                  option.key,
                )}`}
              >
                {isActive ? (
                  <View className="bg-primary-2  rounded-full w-5/6 h-5/6" />
                ) : null}
              </View>
              <Text className="text-neutral-950 dark:text-neutral-50">
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
