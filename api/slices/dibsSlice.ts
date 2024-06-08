import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DibsState } from '../types';

const initialState: DibsState = {
  dibs: null,
};

const DibsSlice = createSlice({
  name: 'Dibs',
  initialState,
  reducers: {
    setDibState(state, action: PayloadAction<DibsState>) {
      state.dibs = action.payload.dibs;
    },
    clearDibState(state) {
      state.dibs = null;
    },
  },
});

export const { setDibState, clearDibState } = DibsSlice.actions;
export default DibsSlice.reducer;
