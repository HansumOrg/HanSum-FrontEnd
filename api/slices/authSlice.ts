import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../types';

const initialState: AuthState = {
  access: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccess(state, action: PayloadAction<string>) {
      state.access = action.payload;
      state.isAuthenticated = true;
    },
    clearAccess(state) {
      state.access = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAccess, clearAccess } = authSlice.actions;
export default authSlice.reducer;
