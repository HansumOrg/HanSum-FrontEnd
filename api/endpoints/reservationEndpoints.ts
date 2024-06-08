import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReservationRecord } from '../types';
import type { RootState } from '../store';

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
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
    reservate: builder.mutation<
      { message: string },
      {
        guesthouseId: number;
        checkinDate: string;
        checkoutDate: string;
      }
    >({
      query: ({ guesthouseId, checkinDate, checkoutDate }) => ({
        url: `reservation/${guesthouseId}`,
        method: 'POST',
        body: { checkinDate, checkoutDate },
      }),
    }),
    getReservationStatus: builder.query<
      {
        reservationRecords: ReservationRecord[];
      },
      void
    >({
      query: () => 'user/reservation-record',
    }),
  }),
});

export const { useReservateMutation, useGetReservationStatusQuery } =
  reservationApi;
