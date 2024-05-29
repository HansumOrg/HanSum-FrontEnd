// this file contains all the types that are used in the application except for navigation types
// MultiSlider.tsx
export interface MultiSliderProps {
  min: number;
  max: number;
  steps: number;
};

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
  interest_hobby: string[];
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
