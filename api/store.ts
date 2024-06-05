import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { authApi } from './endpoints/authEndpoints';

// Optional: Setup listeners for refetchOnFocus/refetchOnReconnect behaviors

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    // Add other reducers here
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
