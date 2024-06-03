import { configureStore } from '@reduxjs/toolkit';
import joinReducer from './slices/joinSlice';
import { joinApi } from './endpoints/joinEndpoints';
import authReducer from './slices/authSlice';
import { authApi } from './endpoints/authEndpoints';

const store = configureStore({
  reducer: {
    [joinApi.reducerPath]: joinApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    join: joinReducer,
    auth: authReducer,
    // Add other reducers here
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(joinApi.middleware, authApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
