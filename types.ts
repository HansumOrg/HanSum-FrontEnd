// this file contains all the types that are used in the application except for navigation types

// SearchScreen.tsx
export interface CalendarProps {
  reservationStartDate: Date | null;
  reservationEndDate: Date | null;
  setReservationStartDate: (date: Date | null) => void;
  setReservationEndDate: (date: Date | null) => void;
  date: Date;
  today: Date;
}
