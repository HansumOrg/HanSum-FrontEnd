// this file contains all the types that are used in the application except for navigation types

// my-page types

export interface Reservation {
  reservation_id: number;
  user_id: number;
  guesthouse_id: number;
  checkin_date: string;
  checkout_date: string;
}

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
