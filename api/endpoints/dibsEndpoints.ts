import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'react-native-dotenv';
import type { RootState } from '../store';
import type { Dibs } from '../types';
import { setDibState } from '../slices/dibsSlice';

export const dibsApi = createApi({
  reducerPath: 'dibsApi',
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
  tagTypes: ['Dibs', 'User'],
  endpoints: builder => ({
    getDibs: builder.query<{ dibs: Dibs[] }, void>({
      query: () => 'user/dibs',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const dibsState = {
          dibs: data.dibs,
        };
        dispatch(setDibState(dibsState));
      },
      providesTags: ['Dibs', 'User'],
    }),
    registerDibs: builder.mutation<{ message: string }, number>({
      query: guesthouseId => ({
        url: 'user/dibs',
        method: 'POST',
        body: { guesthouseId },
      }),
      invalidatesTags: ['Dibs'],
    }),
    deleteDibs: builder.mutation<{ message: string }, number>({
      query: guesthouseId => ({
        url: 'user/dibs',
        method: 'DELETE',
        body: { guesthouseId },
      }),
      invalidatesTags: ['Dibs'],
    }),
  }),
});

export const {
  useGetDibsQuery,
  useRegisterDibsMutation,
  useDeleteDibsMutation,
} = dibsApi;
export default dibsApi;
