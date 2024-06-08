import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ValidateState } from '../types';

const initialState: ValidateState = {
  isUsernameAvailable: null,
  isNicknameAvailable: null,
};

const ValidateSlice = createSlice({
  name: 'Validate',
  initialState,
  reducers: {
    setIsUsernameAvailable(state, action: PayloadAction<number>) {
      state.isUsernameAvailable = action.payload;
    },
    setIsNicknameAvailable(state, action: PayloadAction<number>) {
      state.isNicknameAvailable = action.payload;
    },
    clearValidateState(state) {
      state.isUsernameAvailable = null;
      state.isNicknameAvailable = null;
    },
  },
});

export const {
  setIsUsernameAvailable,
  setIsNicknameAvailable,
  clearValidateState,
} = ValidateSlice.actions;
export default ValidateSlice.reducer;
