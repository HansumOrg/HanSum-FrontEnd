import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const createAppSelector = createSelector.withTypes<RootState>();

// selectors for auth
export const selectAccess = (state: RootState) => state.auth.access;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

// Selectors for join
export const selectJoinState = (state: RootState) => state.join;

// Selectors for validate
export const selectIsUsernameAvailable = (state: RootState) =>
  state.validate.isUsernameAvailable;
export const selectIsNicknameAvailable = (state: RootState) =>
  state.validate.isNicknameAvailable;
export const selectValidateState = (state: RootState) => state.validate;

// Selectors for user
export const selectUserState = (state: RootState) => state.user;
export const selectUser = (state: RootState) => state.user.user;
export const selectInterests = (state: RootState) => state.user.interests;

// Selectors for guesthouse
export const selectGuesthouseState = (state: RootState) => state.guesthouse;
export const selectGuesthouseDetails = (state: RootState) =>
  state.guesthouse.guesthouseDetails;
export const selectGuesthouseDetailsText = createAppSelector(
  [selectGuesthouseDetails],
  guesthouseDetails => ({
    guesthouseId: guesthouseDetails?.guesthouseId,
    guesthouseName: guesthouseDetails?.guesthouseName,
    address: guesthouseDetails?.address,
    phone: guesthouseDetails?.phone,
    rating: guesthouseDetails?.rating,
  }),
);
export const selectGuesthouseDetailsImage = (state: RootState) =>
  state.guesthouse.guesthouseDetails?.imageBase64;

// Selectors for search
export const selectSearchState = (state: RootState) => state.search;
export const selectSearchResult = (state: RootState) =>
  state.search.searchResult;
export const selectSearchParam = createAppSelector(
  [selectSearchState],
  search => ({
    location: search.location,
    searchName: search.searchName,
    mood: search.mood,
    facility: search.facility,
  }),
);
export const selectDate = createAppSelector([selectSearchState], search => ({
  checkinDate: search.checkinDate,
  checkoutDate: search.checkoutDate,
}));
export const selectFilter = createAppSelector([selectSearchState], search => ({
  mood: search.mood,
  facility: search.facility,
}));
export const selectLocation = (state: RootState) => state.search.location;
export const selectSearchName = (state: RootState) => state.search.searchName;

// Selectors for reservation

export const selectReservationInfo = (state: RootState) => ({
  guesthouseId: state.guesthouse.guesthouseDetails?.guesthouseId,
  checkinDate: state.search.checkinDate,
  checkoutDate: state.search.checkoutDate,
});

// Selectors for dibs

export const selectDibs = (state: RootState) => state.dibs.dibs;
