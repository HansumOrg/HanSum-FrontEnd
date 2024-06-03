import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JoinState {
  isUsernameAvailable: number | null;
  isNicknameAvailable: number | null;
  error: string | null;
}

const initialState: JoinState = {
  isUsernameAvailable: null,
  isNicknameAvailable: null,
  error: null,
};

const joinSlice = createSlice({
  name: 'join',
  initialState,
  reducers: {
    setIsUsernameAvailable(state, action: PayloadAction<number>) {
      state.isUsernameAvailable = action.payload;
      state.error = null;
    },
    setIsNicknameAvailable(state, action: PayloadAction<number>) {
      state.isNicknameAvailable = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setIsUsernameAvailable, setIsNicknameAvailable, setError } =
  joinSlice.actions;
export default joinSlice.reducer;
