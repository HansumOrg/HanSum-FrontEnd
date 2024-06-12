import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@env';
import type { RootState } from '../store';
import type { Guest } from '../types';

export const guestApi = createApi({
  reducerPath: 'guestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access } = (getState() as RootState).auth;
      if (access) {
        headers.set('access', access);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getHangoutUser: builder.query<
      {
        guesthouseId: number;
        guesthouseName: string;
        checkinDate: string;
        checkoutDate: string;
        guests: Guest[];
      },
      number
    >({
      query: reservationId => `user/guest/${reservationId}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetHangoutUserQuery } = guestApi;
