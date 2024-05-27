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
