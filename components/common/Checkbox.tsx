import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Check from '../icon/Check';

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

const UiCheckbox = (props: Props) => {
  const { isChecked, disabled, onValueChangeHandler, children, className } =
    props;

  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler(!isChecked);
    }
  };

  const styles = StyleSheet.create({
    checkbox: {
      height: 24,
      width: 24,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#C2C2C2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checked: {
      backgroundColor: '#39C3C5',
      borderColor: '#39C3C5',
    },
    disabled: {
      borderColor: '#C2C2C2',
      backgroundColor: '#C2C2C2',
    },
    checkedAndDisabled: {
      backgroundColor: '#C6F3F3',
      borderColor: '#C6F3F3',
    },
    label: {
      marginLeft: 8,
    },
  });

  return (
    <View className={`flex flex-row ${className}`}>
      <Pressable
        disabled={disabled}
        onPress={onPressedHandler}
        style={[
          styles.checkbox,
          isChecked && styles.checked,
          disabled && styles.disabled,
          isChecked && disabled && styles.checkedAndDisabled,
        ]}
      >
        {isChecked && (
          <Check size={16} color={disabled ? '#C2C2C2' : '#FFFFFF'} />
        )}
      </Pressable>
      {children && <View style={styles.label}>{children}</View>}
    </View>
  );
};

export default UiCheckbox;
