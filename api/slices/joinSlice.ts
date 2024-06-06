import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { JoinState } from '../types';

const initialState: JoinState = {
  username: null,
  password: null,
  name: null,
  phone: null,
  sex: null,
  birthday: null,
  nickname: null,
  mbti: null,
  userAgreement: null,
};

const JoinSlice = createSlice({
  name: 'Join',
  initialState,
  reducers: {
    setJoinState(state, action: PayloadAction<JoinState>) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.sex = action.payload.sex;
      state.birthday = action.payload.birthday;
      state.nickname = action.payload.nickname;
      state.mbti = action.payload.mbti;
      state.userAgreement = action.payload.userAgreement;
    },
    clearJoinState(state) {
      state.username = null;
      state.password = null;
      state.name = null;
      state.phone = null;
      state.sex = null;
      state.birthday = null;
      state.nickname = null;
      state.mbti = null;
      state.userAgreement = null;
    },
  },
});

export const { setJoinState, clearJoinState } = JoinSlice.actions;
export default JoinSlice.reducer;
