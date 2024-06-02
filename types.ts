// this file contains all the types that are used in the application except for navigation types

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
}
