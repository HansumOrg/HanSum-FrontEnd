// this file contains api types that are used in the application

// Join 요청이 성공한 응답
export interface JoinSuccessResponse extends SuccessResponse {
  name: string;
  userId: number;
}

// 요청이 성공한 응답
export interface SuccessResponse {
  message: string;
}

// 요청이 실패한 응답
export interface FailedResponse {
  errorMessage: string;
}

// Auth
export interface AuthState {
  access: string | null;
  isAuthenticated: boolean;
}

// Join
export interface JoinState {
  username: string | null;
  password: string | null;
  name: string | null;
  phone: string | null;
  sex: string | null;
  birthday: string | null;
  nickname: string | null;
  mbti: string | null;
  userAgreement: number | null;
}

// Validate
export interface ValidateState {
  isUsernameAvailable: number | null;
  isNicknameAvailable: number | null;
}

// User
export interface UserState {
  user: User | null;
  interests: Interests | null;
}

export interface User {
  username: string | null;
  name: string | null;
  phone: string | null;
  sex: string | null;
  birthday: string | null;
  nickname: string | null;
  mbti: string | null;
  userAgreement: number | null;
}
export interface Interests {
  interestedLocation: string[];
  interestedFood: string[];
  interestedHobby: string[];
}

export interface Sticker {
  stickerId: number;
  stickerText: string;
  stickerCount: number;
}

export interface StickerToSend {
  userId: number | null;
  stickerTexts: string[] | null;
}

// Guesthouse
export interface GuesthouseState {
  guesthouseId: number | null;
  guesthouseDetails: GuesthouseDetails | null;
  guesthouseMembers: GuesthouseMember[] | null;
}
export interface GuesthouseDetails {
  guesthouseId: number | null;
  guesthouseName: string | null;
  address: string | null;
  price: number | null;
  location: string | null;
  phone: string | null;
  rating: number | null;
  imageBase64: string | null;
  mood: string | null;
}

export interface GuesthouseInSearch extends GuesthouseDetails {
  dibs: boolean;
}

export interface GuesthouseMember {
  userId: number;
  useranme: string;
  nickname: string;
  mbti: string;
}

// Search

export interface SearchState {
  checkinDate: string | null;
  checkoutDate: string | null;
  location: string | null;
  guesthouse_name: string | null;
  mood: string;
  facility: string;
  searchResult: GuesthouseInSearch[] | null;
}

// Reservation

export interface ReservationRecord {
  reservationId: number;
  userId: number;
  guesthouseId: number;
  checkinDate: string;
  checkoutDate: string;
}

// Dibs

export interface DibsState {
  dibs: Dibs[] | null;
}

export interface Dibs {
  dibsId: number;
  guesthouseId: number;
  guesthouseName: string;
  address: string;
  imageBase64: string;
}

// Guest
export interface Guest {
  userId: number;
  username: string;
  nickname: string;
  mbti: string;
}

// Recommendation

export interface Recommendation {
  imageBase64: string;
  guesthouseName: string;
  probability: number;
  guesthouseId: number;
  rank: number;
}
