import React from 'react';
import { View, Pressable } from 'react-native';
import Check from '../icon/Check';
import { UiCheckboxProps } from '../../screens/get-started/register/types';

const UiCheckbox = (props: UiCheckboxProps) => {
  const { isChecked, onValueChangeHandler, children, className } = props;

  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler(!isChecked);
    }
  };

  // 스타일은 className을 통해 관리됩니다
  return (
    <View
      className={`flex flex-row rounded-md items-center border-solid border-2 border-black ${
        className ?? ''
      }`}
    >
      <Pressable
        onPress={onPressedHandler}
        className={`checkbox ${isChecked ? 'checked' : ''} ${
          isChecked ? 'checkedAndDisabled' : ''
        }`}
      >
        {isChecked && <Check size={16} color="#39C3C5" />}
        {!isChecked && <Check size={16} color="#FFFFFF" />}
      </Pressable>
      {children && <View className="label">{children}</View>}
    </View>
  );
};

export default UiCheckbox;
