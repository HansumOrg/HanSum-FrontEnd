import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'react-native-dotenv';
import type { RootState } from '../store';
import type { Recommendation } from '../types';

export const recommendationApi = createApi({
  reducerPath: 'recommendationApi',
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
    getRecommendation: builder.query<
      { recommendations: Recommendation[] },
      string
    >({
      query: mbti => ({
        url: 'guesthouses/recommendation',
        method: 'GET',
        params: { mbti },
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useGetRecommendationQuery } = recommendationApi;
