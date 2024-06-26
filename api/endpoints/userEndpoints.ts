import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'react-native-dotenv';
import { setUserState } from '../slices/userSlice';
import type { RootState } from '../store';
import type { Sticker, StickerToSend } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
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
  tagTypes: ['User', 'Validate'],
  endpoints: builder => ({
    getUserInfo: builder.query<
      {
        username: string;
        name: string;
        phone: string;
        sex: string;
        birthday: string;
        nickname: string;
        mbti: string;
        userAgreement: number;
        interestedLocation: string[];
        interestedFood: string[];
        interestedHobby: string[];
        message: string;
      },
      void
    >({
      query: () => 'user',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const userState = {
          user: {
            username: data.username,
            name: data.name,
            phone: data.phone,
            sex: data.sex,
            birthday: data.birthday,
            nickname: data.nickname,
            mbti: data.mbti,
            userAgreement: data.userAgreement,
          },
          interests: {
            interestedLocation: data.interestedLocation,
            interestedFood: data.interestedFood,
            interestedHobby: data.interestedHobby,
          },
        };
        dispatch(setUserState(userState));
      },
      providesTags: ['User'],
    }),
    getSticker: builder.query<{ userId: number; stickers: Sticker[] }, void>({
      query: () => 'user/sticker',
      providesTags: ['User'],
    }),
    writeReview: builder.mutation<
      { message: string },
      {
        guesthouseId: number;
        rating: number;
      }
    >({
      query: ({ guesthouseId, rating }) => ({
        url: 'user/review',
        method: 'POST',
        body: { guesthouseId, rating },
      }),
    }),
    registerSticker: builder.mutation<{ message: string }, StickerToSend[]>({
      query: StickerToSend => ({
        url: 'user/sticker',
        method: 'POST',
        body: { StickerToSend },
      }),
    }),
    updateNickname: builder.mutation<
      { newNickname: string; message: string },
      string
    >({
      query: nickname => ({
        url: 'user/nickname',
        method: 'PUT',
        body: { nickname },
      }),
      invalidatesTags: ['User', 'Validate'],
    }),
    updateInterests: builder.mutation<
      { message: string },
      {
        interestedLocation: string[];
        interestedFood: string[];
        interestedHobby: string[];
      }
    >({
      query: ({ interestedLocation, interestedFood, interestedHobby }) => ({
        url: 'user/interest',
        method: 'PUT',
        body: { interestedLocation, interestedFood, interestedHobby },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetStickerQuery,
  useRegisterStickerMutation,
  useWriteReviewMutation,
  useUpdateNicknameMutation,
  useUpdateInterestsMutation,
} = userApi;
