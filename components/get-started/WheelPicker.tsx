import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';

interface Props {
  items: string[];
  onItemChange: (item: string) => void;
  itemHeight: number;
  initValue?: string;
  itemdoc?: string;
}

const WheelPicker: React.FC<Props> = ({
  items,
  onItemChange,
  itemHeight,
  initValue,
  itemdoc,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const initValueIndex = initValue ? items.indexOf(initValue) : -1;
  const [selectedIndex, setSelectedIndex] = useState(
    initValueIndex >= 0 ? initValueIndex : 0,
  );

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    const inputRange = [
      (index - 2) * itemHeight,
      (index - 1) * itemHeight,
      index * itemHeight,
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    return (
      <Animated.View
        className="items-center justify-center "
        key={item}
        style={{
          height: itemHeight,
          transform: [{ scale }],
        }}
      >
        <Text
          className="text-md font-inter-r text-black shrink"
          numberOfLines={1}
        >
          {item}
          {itemdoc}
        </Text>
      </Animated.View>
    );
  };

  const modifiedItems = ['', ...items, ''];

  const momentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const { y } = event.nativeEvent.contentOffset;
    const index = Math.round(y / itemHeight);
    setSelectedIndex(index);
  };

  useEffect(() => {
    onItemChange(items[selectedIndex]);
  }, [selectedIndex, onItemChange, items]);

  return (
    <View style={{ height: itemHeight * 3 }}>
      <Animated.FlatList
        data={modifiedItems}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={momentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        initialScrollIndex={initValueIndex >= 0 ? initValueIndex : 0}
      />
    </View>
  );
};

export default WheelPicker;
