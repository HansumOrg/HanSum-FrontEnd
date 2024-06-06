import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import {
  setGuesthouseDetails,
  setGuesthouseMembers,
} from '../slices/guesthouseSlice';
import type { GuesthouseMember } from '../types';

export const guesthouseApi = createApi({
  reducerPath: 'guesthouseApi',
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
    getGuesthouseDetails: builder.query<
      {
        guesthouseId: number;
        guesthouseName: string;
        address: string;
        price: number;
        location: string;
        phone: string;
        rating: number;
        imageBase64: string;
        mood: string;
      },
      number
    >({
      query: (guesthouseId: number) => ({
        url: `guesthouse/${guesthouseId}`,
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const guesthouseDetails = {
          guesthouseId: data.guesthouseId,
          guesthouseName: data.guesthouseName,
          address: data.address,
          price: data.price,
          location: data.location,
          phone: data.phone,
          rating: data.rating,
          imageBase64: data.imageBase64,
          mood: data.mood,
        };
        dispatch(setGuesthouseDetails(guesthouseDetails));
      },
    }),
    getGuesthouseMembers: builder.query<
      {
        guesthouseId: number;
        guesthouseName: string;
        members: GuesthouseMember[];
      },
      number
    >({
      query: (guesthouseId: number) => ({
        url: `guesthouse/${guesthouseId}/members`,
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setGuesthouseMembers(data.members));
      },
    }),
  }),
});

export const { useGetGuesthouseDetailsQuery, useGetGuesthouseMembersQuery } =
  guesthouseApi;
