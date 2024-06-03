import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const joinApi = createApi({
  reducerPath: 'joinApi',
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
    join: builder.mutation<
      { name: string; message: string; userId: number },
      {
        username: string;
        password: string;
        name: string;
        phone: string;
        sex: string;
        birthday: string;
        nickname: string;
        mbti: string;
        userAgreement: number;
      }
    >({
      query: credentials => ({
        url: 'join',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response: FetchBaseQueryError) => response,
    }),
  }),
});

export const {
  useLazyCheckUsernameQuery,
  useLazyCheckNicknameQuery,
  useJoinMutation,
} = joinApi;
