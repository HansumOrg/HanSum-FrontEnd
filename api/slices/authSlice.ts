import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  access: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  access: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccess(state, action: PayloadAction<string>) {
      state.access = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    clearAccess(state) {
      state.access = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setAccess, clearAccess, setError } = authSlice.actions;
export default authSlice.reducer;
