// this file contains all the types that are used in the application except for navigation types

import { PressableProps, TextInputProps } from 'react-native';
import { MainTabScreenProps, MyPageStackScreenProps } from './navigation/types';

// GetStarted types
export interface RegisterProps {
  username: string;
  password: string;
  name: string;
  phone: string;
  sex: string;
  birthday: string;
  nickname: string;
  mbti: string;
  userAgreement: number;
}

// SearchResultScreen.tsx
export interface SearchResultScreenProps {
  location: string;
  checkinDate: string;
  checkoutDate: string;
  guesthouses: Guesthouse[];
}

// SearchScreen.tsx
export interface CalendarProps {
  reservationStartDate: Date | null;
  reservationEndDate: Date | null;
  setReservationStartDate: (date: Date | null) => void;
  setReservationEndDate: (date: Date | null) => void;
}

export interface CalendarSeletedDaysProps {
  reservationStartDate: Date | null;
  reservationEndDate: Date | null;
  setReservationStartDate: (date: Date | null) => void;
  setReservationEndDate: (date: Date | null) => void;
  date: Date;
  today: Date;
}

// MultiSlider.tsx
export interface MultiSliderProps {
  min: number;
  max: number;
  minStep: number;
  setMinStep: (value: number) => void;
  maxStep: number;
  setMaxStep: (value: number) => void;
}

export interface SearchResultProps {
  location: string | null;
  checkin_date: string | null;
  checkout_date: string | null;
  guesthouse_name: string | null;
  mood: string | null;
  facility: string | null;
  min_price: number | null;
  max_price: number | null;
}

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
  interested_hobby: string[];
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
  MainTabScreenProps<'Recommendations'> & {
    recommendation: Recommendation[];
  };
export interface Recommendation {
  imageBase64: string;
  guesthouseName: string;
  probability: number;
  guesthouseId: number;
  rank: number;
}

// my-page types

export interface Reservation {
  reservationId: number;
  userId: number;
  guesthouseId: number;
  checkinDate: string;
  checkoutDate: string;
}

export interface Guesthouse {
  guesthouseId: number;
  guesthouseName: string;
  address: string;
  location: string;
  price: number;
  phone: string;
  rating: number;
  imageBase64: string;
  mood: string;
}

export interface ReservationBoxProps extends MyPageStackScreenProps<'MyPage'> {
  reservation: Reservation;
}

export interface MyPageStateType {
  user_id: number;
  username: string;
  mbti: string;
  interested_location: string[];
  interested_hobby: string[];
  interested_food: string[];
  sticker: Sticker[];
}

// edit-page types

export interface NicknameProps {
  // ChangeNicknameScreen.tsx
  context: {
    myPageState: MyPageStateType;
    setMyPageState: React.Dispatch<React.SetStateAction<MyPageStateType>>;
  };
  nickname: string;
  user: User[];
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
  context: {
    myPageState: MyPageStateType;
    setMyPageState: React.Dispatch<React.SetStateAction<MyPageStateType>>;
  };
  interests: string[];
  userinterest: string[];
  index: number;
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
  login_id: string | undefined;
  is_available: boolean | undefined;
  message: string | undefined;
  status: string | undefined;
}
// guesthouse-details types

export interface ReservationRecord {
  // ReservationItem.tsx
  guesthouse_name: string | undefined;
  guesthouse_address: string | undefined;
  guesthouse_phone: string | undefined;
  checkin_date: string;
  checkout_date: string;
  nights: number | undefined;
}

export interface GuestInfo {
  nickname: string | undefined;
  name: string | undefined;
  mbti: string | undefined;
}

// RecommendationScreen types
export interface BasicReservationRecord {
  reservationId: number;
  userId: number;
  guesthouseId: number;
  checkinDate: string;
  checkoutDate: string;
}
