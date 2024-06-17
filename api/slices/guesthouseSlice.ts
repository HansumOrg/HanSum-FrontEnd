import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  GuesthouseState,
  GuesthouseDetails,
  GuesthouseMember,
} from '../types';

const initialState: GuesthouseState = {
  guesthouseId: null,
  guesthouseDetails: null,
  guesthouseMembers: null,
};

const guesthouseSlice = createSlice({
  name: 'Guesthouse',
  initialState,
  reducers: {
    setGuesthouseState(state, action: PayloadAction<GuesthouseState>) {
      state.guesthouseDetails = action.payload.guesthouseDetails;
      state.guesthouseMembers = action.payload.guesthouseMembers;
    },
    clearGuesthouseState(state) {
      state.guesthouseDetails = null;
      state.guesthouseMembers = null;
    },
    setGuesthouseId(state, action: PayloadAction<number>) {
      state.guesthouseId = action.payload;
    },
    setGuesthouseDetails(state, action: PayloadAction<GuesthouseDetails>) {
      state.guesthouseDetails = action.payload;
    },
    setGuesthouseMembers(state, action: PayloadAction<GuesthouseMember[]>) {
      state.guesthouseMembers = action.payload;
    },
  },
});

export const {
  setGuesthouseState,
  clearGuesthouseState,
  setGuesthouseId,
  setGuesthouseDetails,
  setGuesthouseMembers,
} = guesthouseSlice.actions;
export default guesthouseSlice.reducer;
