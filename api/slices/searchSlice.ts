import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../types';

const initialState: SearchState = {
  checkinDate: null,
  checkoutDate: null,
  location: null,
  searchName: null,
  mood: null,
  facility: null,
  searchResult: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearchState(state) {
      state.checkinDate = null;
      state.checkoutDate = null;
      state.location = null;
      state.searchName = null;
      state.mood = null;
      state.facility = null;
      state.searchResult = null;
    },
    setSearchResult(state, action: PayloadAction<SearchState['searchResult']>) {
      state.searchResult = action.payload;
    },
    setDate(
      state,
      action: PayloadAction<{ checkinDate: string; checkoutDate: string }>,
    ) {
      state.checkinDate = action.payload.checkinDate;
      state.checkoutDate = action.payload.checkoutDate;
    },
    setFilter(
      state,
      action: PayloadAction<{
        mood: string;
        facility: string[];
      }>,
    ) {
      state.mood = action.payload.mood;
      state.facility = action.payload.facility;
    },
    setSearchName(state, action: PayloadAction<string>) {
      state.searchName = action.payload;
      state.location = null;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
      state.searchName = null;
    },
  },
});

export const {
  clearSearchState,
  setSearchResult,
  setDate,
  setFilter,
  setSearchName,
  setLocation,
} = searchSlice.actions;
export default searchSlice.reducer;
