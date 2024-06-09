import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GuesthouseInSearch } from '../types';
import type { RootState } from '../store';
import { setSearchResult } from '../slices/searchSlice';

export const searchApi = createApi({
  reducerPath: 'searchApi',
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
    search: builder.query<
      {
        guesthouses: GuesthouseInSearch[];
      },
      {
        location: string | null;
        searchName: string | null;
        mood: string | null;
        facility: string[] | null;
      }
    >({
      query: ({ location, searchName, mood, facility }) => ({
        url: 'guesthouses/search',
        method: 'GET',
        params: {
          location,
          searchName,
          mood,
          facility,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setSearchResult(data.guesthouses));
      },
    }),
  }),
});
export const { useLazySearchQuery } = searchApi;