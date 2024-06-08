import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const validateApi = createApi({
  reducerPath: 'validateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
  }),
  endpoints: builder => ({
    checkUsername: builder.query<
      { message: string; isUsernameAvailable: number },
      string
    >({
      query: username => ({
        url: 'check-username',
        params: { username },
      }),
    }),
    checkNickname: builder.query<
      { message: string; isNicknameAvailable: number },
      string
    >({
      query: nickname => ({
        url: 'check-nickname',
        params: { nickname },
      }),
    }),
  }),
});

export const { useLazyCheckUsernameQuery, useLazyCheckNicknameQuery } =
  validateApi;
