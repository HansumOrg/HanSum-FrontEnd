import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { authApi } from './endpoints/authEndpoints';
import joinRedcuer from './slices/joinSlice';
import { joinApi } from './endpoints/joinEndpoints';
import validateReducer from './slices/validateSlice';
import { validateApi } from './endpoints/validateEndpoints';
import userReducer from './slices/userSlice';
import { userApi } from './endpoints/userEndpoints';
import guesthouseReducer from './slices/guesthouseSlice';
import { guesthouseApi } from './endpoints/guesthouseEndpoints';
import searchReducer from './slices/searchSlice';
import { searchApi } from './endpoints/searchEndpoints';
import { reservationApi } from './endpoints/reservationEndpoints';
import dibsReducer from './slices/dibsSlice';
import { dibsApi } from './endpoints/dibsEndpoints';
import { guestApi } from './endpoints/guestEndpoints';
import { recommendationApi } from './endpoints/recommendationEndpoints';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [joinApi.reducerPath]: joinApi.reducer,
    [validateApi.reducerPath]: validateApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [guesthouseApi.reducerPath]: guesthouseApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [dibsApi.reducerPath]: dibsApi.reducer,
    [guestApi.reducerPath]: guestApi.reducer,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
    auth: authReducer,
    join: joinRedcuer,
    validate: validateReducer,
    user: userReducer,
    guesthouse: guesthouseReducer,
    search: searchReducer,
    dibs: dibsReducer,
    // Add other reducers here
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      joinApi.middleware,
      validateApi.middleware,
      userApi.middleware,
      guesthouseApi.middleware,
      searchApi.middleware,
      reservationApi.middleware,
      dibsApi.middleware,
      guestApi.middleware,
      recommendationApi.middleware,
    ),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
