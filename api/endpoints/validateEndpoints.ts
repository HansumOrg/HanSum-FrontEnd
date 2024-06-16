import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'react-native-dotenv';

export const validateApi = createApi({
  reducerPath: 'validateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Validate'],
  endpoints: builder => ({
    checkUsername: builder.query<
      { message: string; isUsernameAvailable: number },
      string
    >({
      query: username => ({
        url: 'check-username',
        params: { username },
      }),
      providesTags: ['Validate'],
    }),
    checkNickname: builder.query<
      { message: string; isNicknameAvailable: number },
      string
    >({
      query: nickname => ({
        url: 'check-nickname',
        params: { nickname },
      }),
      providesTags: ['Validate'],
    }),
  }),
});

export const { useLazyCheckUsernameQuery, useLazyCheckNicknameQuery } =
  validateApi;
