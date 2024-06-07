import { Text, View } from 'react-native';
import { CheckboxItemProps } from '../../types';
import UiCheckbox from './Checkbox';

// TODO: 이 부분은 components/common/CheckboxItem.tsx로 분리해야함 잊지 말 것.
export default function CheckboxItem(props: CheckboxItemProps) {
  const {
    label,
    isRequired,
    description = '',
    isChecked,
    onValueChange,
  } = props;

  return (
    <View className="flex-row h-1/6 w-full items-center justify-between">
      <View className="flex-col">
        <View className="flex-row">
          <Text className="text-black text-md underline">{label}</Text>
          <Text className="text-gray-400 text-s">
            {isRequired ? '필수' : '선택'}
          </Text>
        </View>
        {description && (
          <Text className="text-gray-400 text-ss">{description}</Text>
        )}
      </View>
      <UiCheckbox isChecked={isChecked} onValueChangeHandler={onValueChange} />
    </View>
  );
}
