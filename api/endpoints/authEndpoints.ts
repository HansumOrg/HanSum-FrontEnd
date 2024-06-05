import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as RootState).auth;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    join: builder.mutation<
      void,
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
      // transformResponse: response => response.data,
      transformErrorResponse: (response: FetchBaseQueryError) => response,
    }),
    login: builder.mutation<
      { accessToken: string; refreshToken: string },
      { username: string; password: string }
    >({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
    reissue: builder.mutation<
      { newAccessToken: string; newRefreshToken: string },
      string
    >({
      query: refreshToken => ({
        url: 'reissue',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }),
    }),
  }),
});

export const {
  useJoinMutation,
  useLoginMutation,
  useLogoutMutation,
  useReissueMutation,
} = authApi;
