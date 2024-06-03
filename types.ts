// this file contains all the types that are used in the application except for navigation types

import { PressableProps, TextInputProps } from 'react-native';
import { MainTabScreenProps } from './navigation/types';

// common

export interface User {
  user_id: number;
  login_id: string;
  password: string;
  username: string;
  phone: string;
  sex: string;
  birthday: string;
  nickname: string;
  mbti: string;
  user_agreement: number;
  interested_location: string[];
  interest_hobby: string[];
  interested_food: string[];
}

export interface CheckboxItemProps {
  // CheckboxItem.tsx
  label: string;
  isRequired: boolean;
  description?: string;
  isChecked: boolean;
  onValueChange: (newValue: boolean) => void;
}

export interface TitleProps {
  // Title.tsx
  text: string;
}

export interface RectButtonProps extends PressableProps {
  // RectButton.tsx
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
  // RadioButtonItem.tsx
  options: RadioButtonsItem[];
  activeItem: string;
  onSelectItem: (selectedItem: string) => void;
  text1: string;
  text2: string;
  mbti1: string;
  mbti2: string;
}
export interface InputTextProps extends TextInputProps {
  // InputText.tsx
  name: string;
  isWrong?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  textContentType?: TextInputProps['textContentType'];
  isSecureTextEntry?: boolean | undefined;
}

export interface GenderButtonProps {
  // GenderRectButton.tsx
  text: string;
  isActivate: boolean;
}

export interface FindButtonProps extends PressableProps {
  // FindButton.tsx
  text1: string;
  text2: string;
  onPress1: () => void;
  onPress2: () => void;
}

export interface UiCheckboxProps {
  // Checkbox.tsx
  isChecked: boolean;
  onValueChangeHandler?: (isChecked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export type GuesthouseRecommListPropsWithNavigation =
  MainTabScreenProps<'Recommendations'>;

export interface GuesthouseRecommListProps {
  // GuesthouseRecommList.tsx
  guesthouse_name: string;
  image: string;
  probability: number;
  guesthouseId: number;
  rank: number;
}

// my-page types

export interface Reservation {
  reservation_id: number;
  user_id: number;
  guesthouse_id: number;
  checkin_date: string;
  checkout_date: string;
}

export interface Guesthouse {
  guesthouse_id: number;
  guesthouse_name: string;
  address: string;
  location: string;
  price: number;
  phone: string;
  rating: number;
  imageUrl: string;
  mood: string;
}

export interface ReservationBoxProps {
  reservation: Reservation;
  guesthouse: Guesthouse;
}

// edit-page types

export interface NicknameProps {
  // ChangeNicknameScreen.tsx
  nickname: string;
  user: User[];
  userId: number;
}

export interface Sticker {
  sticker_id: number;
  user_id: number;
  sticker_text: string;
  sticker_count: number;
}

export interface EditPageStickerListProps {
  // EditProfileScreen.tsx
  sticker: Sticker;
  index: number;
}

export interface ViewReceivedStickerProps {
  // ViewReceivedStickerScreen.tsx
  count: number;
  mentList: string[];
  index: number;
}

export interface MbtiCheckProps {
  // MbtiCheck.tsx
  mbti: string;
  userId: number;
}

export interface InterestProps {
  // AddInterestScreen.tsx
  interests: string[];
  userinterest: string[];
  index: number;
  user: User;
  type: number; // 0: 여행지, 1: 취미, 2: 음식
  setUserData: React.Dispatch<React.SetStateAction<User[]>>;
}

// components/api types 이건 제가 만든 임시라 삭제 하시면 됩니다.
export interface CheckNicknameResponse {
  // DuplicateNicName.tsx
  nickname: string;
  is_available: boolean;
  message: string;
  status: string;
}

export interface CheckNicknameProps {
  // DuplicateNicName.tsx
  nickName: string;
  onCheck: (isAvailable: boolean) => void;
}

export interface CheckDuplicateProps {
  // DuplicateId.tsx
  loginId: string;
  onCheck: (isAvailable: boolean) => void;
}

export interface CheckDuplicateResponse {
  // DuplicateId.tsx
  login_id: string;
  is_available: boolean;
  message: string;
  status: string;
}
// guesthouse-details types

export interface ReservationRecord {
  // ReservationItem.tsx
  guesthouse_name: string;
  guesthouse_address: string;
  guesthouse_phone: string;
  checkin_date: string;
  checkout_date: string;
  nights: number;
}

export interface GuestInfo {
  nickname: string;
  name: string;
  mbti: string;
}
