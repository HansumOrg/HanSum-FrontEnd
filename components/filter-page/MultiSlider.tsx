import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { MultiSliderProps } from '../../types';

const WIDTH = Dimensions.get('window').width * 0.75;

function MultiSlider({ min, max, steps }: MultiSliderProps) {
  const sliderWidth = 40;
  const [translateX1, setTranslateX1] = useState(0);
  const [translateX2, setTranslateX2] = useState(WIDTH - sliderWidth);
  const [minStep, setMinStep] = useState(1);
  const [maxStep, setMaxStep] = useState(steps);

  const handleGestureEvent1 = ({
    nativeEvent,
  }: {
    nativeEvent: { translationX: number };
  }) => {
    let newTranslateX = nativeEvent.translationX;
    if (newTranslateX < 0) {
      newTranslateX = 0;
    } else if (newTranslateX > WIDTH - sliderWidth) {
      newTranslateX = WIDTH - sliderWidth;
    } else if (newTranslateX > translateX2) {
      newTranslateX = translateX2;
    }
    setTranslateX1(newTranslateX);

    const newValue =
      Math.round((newTranslateX / (WIDTH - sliderWidth)) * (max - min)) + min;
    setMinStep(newValue);
  };

  const handleGestureEvent2 = ({
    nativeEvent,
  }: {
    nativeEvent: { translationX: number };
  }) => {
    let newTranslateX = nativeEvent.translationX;
    if (newTranslateX < translateX1) {
      newTranslateX = translateX1;
    } else if (newTranslateX > WIDTH - sliderWidth) {
      newTranslateX = WIDTH - sliderWidth;
    }
    setTranslateX2(newTranslateX);

    const newValue =
      Math.round((newTranslateX / (WIDTH - sliderWidth)) * (max - min)) + min;
    setMaxStep(newValue);
  };

  return (
    <View className="flex w-full h-full justify-center items-center">
      <View className="relative w-[75vw] h-10 justify-center">
        <View className="w-full h-1 bg-gray-2/100 flex-row">
          <View
            style={{ width: translateX2 - translateX1, left: translateX1 }}
            className="h-full bg-primary-2"
          />
        </View>
        <PanGestureHandler onGestureEvent={handleGestureEvent1}>
          <View
            className="absolute w-10 h-10 z-10 bg-white border border-gray-2/100 shadow-lg shadow-black/60 rounded-full"
            style={{ transform: [{ translateX: translateX1 }] }}
          />
        </PanGestureHandler>
        <PanGestureHandler onGestureEvent={handleGestureEvent2}>
          <View
            className="absolute w-10 h-10 z-20 bg-white border shadow-lg shadow-black/60 border-gray-2/100 rounded-full"
            style={{ transform: [{ translateX: translateX2 }] }}
          />
        </PanGestureHandler>
      </View>
      <View className="flex flex-row mx-1 w-[75vw] h-1/3 justify-between items-center">
        <View className="flex justify-center">
          <Text className="font-inter-r text-md text-primary-2">
            {minStep}만원
          </Text>
        </View>
        <View className="flex justify-center flex-row">
          <Text className="font-inter-r text-md text-primary-2">
            {maxStep}만원
          </Text>
          {maxStep === steps && (
            <Text className="font-inter-r text-md text-primary-2"> 이상</Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default MultiSlider;
