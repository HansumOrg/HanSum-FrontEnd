import { PressableProps, TextInputProps } from 'react-native';

export interface CheckNicknameResponse {
  nickname: string;
  is_available: boolean;
  message: string;
  status: string;
}

export interface CheckNicknameProps {
  nickName: string;
  onCheck: (isAvailable: boolean) => void;
}

export interface CheckDuplicateProps {
  loginId: string;
  onCheck: (isAvailable: boolean) => void;
}

export interface CheckDuplicateResponse {
  login_id: string;
  is_available: boolean;
  message: string;
  status: string;
}

export interface CheckboxItemProps {
  label: string;
  isRequired: boolean;
  description?: string;
  isChecked: boolean;
  onValueChange: (newValue: boolean) => void;
}

export interface TitleProps {
  text: string;
}

export interface RectButtonProps extends PressableProps {
  text: string;
  isActivate: boolean;
}
export interface RadioButtonsItem {
  key: string;
  label: string;
  value: string;
  size: number;
}
export interface RadioButtonsProps {
  options: RadioButtonsItem[];
  activeItem: string;
  onSelectItem: (selectedItem: string) => void;
  text1: string;
  text2: string;
  mbti1: string;
  mbti2: string;
}
export interface InputTextProps extends TextInputProps {
  name: string;
  isWrong?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  textContentType?: TextInputProps['textContentType'];
  isSecureTextEntry?: boolean | undefined;
}

export interface GenderButtonProps {
  text: string;
  isActivate: boolean;
}

export interface FindButtonProps extends PressableProps {
  text1: string;
  text2: string;
  onPress1: () => void;
  onPress2: () => void;
}

export interface UiCheckboxProps {
  isChecked: boolean;
  onValueChangeHandler?: (isChecked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}
