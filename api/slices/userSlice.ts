import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserState, User, Interests } from '../types';

const initialState: UserState = {
  user: null,
  interests: null,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
      state.interests = action.payload.interests;
    },
    clearUserState(state) {
      state.user = null;
      state.interests = null;
    },
    setUserInfo(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setInterests(state, action: PayloadAction<Interests>) {
      state.interests = action.payload;
    },
  },
});

export const { setUserState, clearUserState, setUserInfo, setInterests } =
  UserSlice.actions;
export default UserSlice.reducer;
