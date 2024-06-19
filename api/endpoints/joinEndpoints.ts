import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'react-native-dotenv';

export const joinApi = createApi({
  reducerPath: 'joinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Validate'],
  endpoints: builder => ({
    join: builder.mutation<
      { userName: string; message: string; userId: number },
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
      invalidatesTags: ['Validate'],
    }),
  }),
});

export const { useJoinMutation } = joinApi;
