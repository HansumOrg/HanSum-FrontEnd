import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const AdBanner: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const currentIndexRef = useRef(1);
  const adCount = 4; // 광고 개수

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        currentIndexRef.current = (currentIndexRef.current + 1) % (adCount + 1);
        if (currentIndexRef.current === adCount) {
          scrollViewRef.current.scrollTo({ x: 0, animated: false });
          currentIndexRef.current = 1;
          scrollViewRef.current.scrollTo({
            x: (currentIndexRef.current * (screenWidth * 2)) / 3,
            animated: true,
          });
        } else {
          scrollViewRef.current.scrollTo({
            x: (currentIndexRef.current * (screenWidth * 2)) / 3,
            animated: true,
          });
        }
      }
    }, 3000); // 3초마다 광고 변경

    return () => clearInterval(interval);
  }, []);

  const handleScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(offsetX / ((screenWidth * 2) / 3));
    if (newIndex === adCount + 1) {
      scrollViewRef.current?.scrollTo({ x: 0, animated: false });
      currentIndexRef.current = 1;
    } else {
      currentIndexRef.current = newIndex;
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="rounded-lg mb-3 mx-0"
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      pagingEnabled
      onScrollEndDrag={handleScrollEndDrag} // 초기 위치 설정
    >
      <View
        className=" h-3/4  justify-center items-center"
        style={{ width: (screenWidth * 1) / 6 }}
      >
        <View className="rounded-r-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center" />
      </View>
      <View
        className="h-3/4 justify-center items-center"
        style={{ width: (screenWidth * 2) / 3 }}
      >
        <View className="rounded-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center">
          <Text className="text-lg font-bold">광고 3 카피</Text>
        </View>
      </View>
      <View
        className="h-3/4  justify-center items-center"
        style={{ width: (screenWidth * 2) / 3 }}
      >
        <View className="rounded-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center">
          <Text className="text-lg font-bold">광고 1</Text>
        </View>
      </View>
      <View
        className="h-3/4 justify-center items-center"
        style={{ width: (screenWidth * 2) / 3 }}
      >
        <View className="rounded-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center">
          <Text className="text-lg font-bold">광고 2</Text>
        </View>
      </View>
      <View
        className="h-3/4 justify-center items-center"
        style={{ width: (screenWidth * 2) / 3 }}
      >
        <View className="rounded-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center">
          <Text className="text-lg font-bold">광고 3</Text>
        </View>
      </View>
      <View
        className="h-3/4 justify-center items-center"
        style={{ width: (screenWidth * 2) / 3 }}
      >
        <View className="rounded-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center">
          <Text className="text-lg font-bold">광고 1 카피</Text>
        </View>
      </View>
      <View
        className="h-3/4 justify-center items-center"
        style={{ width: (screenWidth * 1) / 6 }}
      >
        <View className="rounded-l-md h-full w-[90%] bg-gray-2 flex-row justify-center items-center" />
      </View>
    </ScrollView>
  );
};

export default AdBanner;
