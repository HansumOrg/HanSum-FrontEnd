import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import type { Recommendation } from '../types';

export const recommendationApi = createApi({
  reducerPath: 'recommendationApi',
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
    getRecommendation: builder.query<
      { recommendations: Recommendation[] },
      string
    >({
      query: mbti => ({
        url: 'guesthouses/recommendation',
        method: 'GET',
        params: { mbti },
      }),
    }),
  }),
});

export const { useGetRecommendationQuery } = recommendationApi;
