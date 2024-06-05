import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers, { getState }) => {
      const { access } = (getState() as RootState).auth;
      if (access) {
        headers.set('access', access);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<
      { access: string; refresh: string; message: string },
      { username: string; password: string }
    >({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (
        response: { message: string },
        meta: FetchBaseQueryMeta,
      ) => {
        const access = meta.response?.headers.get('access') ?? '';
        const refresh = meta.response?.headers.get('refresh') ?? '';
        return { access, refresh, ...response };
      },
      transformErrorResponse: (response: FetchBaseQueryError) => response,
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
    refresh: builder.mutation<
      { newAccess: string; newRefresh: string; message: string },
      string
    >({
      query: refreshToken => ({
        url: 'refresh',
        method: 'POST',
        headers: {
          refresh: refreshToken,
        },
      }),
      transformResponse: (
        response: { message: string },
        meta: FetchBaseQueryMeta,
      ) => {
        const newAccess = meta.response?.headers.get('access') ?? '';
        const newRefresh = meta.response?.headers.get('refresh') ?? '';
        return { newAccess, newRefresh, ...response };
      },
      transformErrorResponse: (response: FetchBaseQueryError) => response,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshMutation } =
  authApi;
