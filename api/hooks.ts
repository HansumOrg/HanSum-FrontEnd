import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RootState, AppDispatch } from './store';
import {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
} from './endpoints/authEndpoints';
import { useJoinMutation } from './endpoints/joinEndpoints';
import {
  useLazyCheckUsernameQuery,
  useLazyCheckNicknameQuery,
} from './endpoints/validateEndpoints';
import { setAccess, clearAccess } from './slices/authSlice';
import {
  setIsUsernameAvailable,
  setIsNicknameAvailable,
  clearValidateState,
} from './slices/validateSlice';
import { clearJoinState } from './slices/joinSlice';
import {
  useUpdateNicknameMutation,
  useUpdateInterestsMutation,
  useWriteReviewMutation,
  useRegisterStickerMutation,
} from './endpoints/userEndpoints';
import { clearUserState, setUserInfo, setInterests } from './slices/userSlice';
import { clearGuesthouseState } from './slices/guesthouseSlice';
import { clearSearchState } from './slices/searchSlice';
import { useLazySearchQuery } from './endpoints/searchEndpoints';
import { clearDibState } from './slices/dibsSlice';
import {
  useRegisterDibsMutation,
  useDeleteDibsMutation,
} from './endpoints/dibsEndpoints';
import { useReservateMutation } from './endpoints/reservationEndpoints';
import { isErrorWithMessage, isFetchBaseQueryError } from '../utils/helpers';
import {
  selectAccess,
  selectValidateState,
  selectUser,
  selectInterests,
  selectJoinState,
  selectReservationInfo,
} from './selectors';
import type { SearchParam, StickerToSend } from './types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// clear data in Redux store
export const clearData = (dispatch: AppDispatch) => {
  dispatch(clearAccess());
  dispatch(clearValidateState());
  dispatch(clearJoinState());
  dispatch(clearUserState());
  dispatch(clearDibState());
  dispatch(clearGuesthouseState());
  dispatch(clearSearchState());
};

// Hooks for validate
// Hook for check username
export const useCheckUsername = () => {
  const dispatch = useAppDispatch();
  const [checkUsername, { isLoading, error }] = useLazyCheckUsernameQuery();
  const [isUsernameLoading, usernameError] = [isLoading, error];

  const handleCheckUsername = async (username: string) => {
    try {
      const { message, isUsernameAvailable } = await checkUsername(
        username,
      ).unwrap();

      dispatch(setIsUsernameAvailable(isUsernameAvailable));
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          return err.data;
        }
        if (err.status === 409) {
          // 409 Conflict
          const data = err.data as {
            errorMessage: string;
            isUsernameAvailable: number;
          };
          if (
            data.errorMessage === 'Username is already in use.' &&
            data.isUsernameAvailable === 0
          ) {
            dispatch(setIsUsernameAvailable(data.isUsernameAvailable));
            return { errorMessage: data.errorMessage };
          }
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleCheckUsername, isUsernameLoading, usernameError };
};

// Hook for check nickname
export const useCheckNickname = () => {
  const dispatch = useAppDispatch();
  const [checkNickname, { isLoading, error }] = useLazyCheckNicknameQuery();
  const [isNicknameLoading, nicknameError] = [isLoading, error];

  const handleCheckNickname = async (nickname: string) => {
    try {
      const { message, isNicknameAvailable } = await checkNickname(
        nickname,
      ).unwrap();

      dispatch(setIsNicknameAvailable(isNicknameAvailable));
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          return err.data;
        }
        if (err.status === 409) {
          // 409 Conflict
          const data = err.data as {
            errorMessage: string;
            isNicknameAvailable: number;
          };
          if (
            data.errorMessage === 'Nickname is already in use.' &&
            data.isNicknameAvailable === 0
          ) {
            dispatch(setIsNicknameAvailable(data.isNicknameAvailable));
            return { errorMessage: data.errorMessage };
          }
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleCheckNickname, isNicknameLoading, nicknameError };
};

// Hooks for join
// Hook for join
export const useJoin = () => {
  const dispatch = useAppDispatch();
  const joinState = useAppSelector(selectJoinState);

  const { isUsernameAvailable, isNicknameAvailable } =
    useAppSelector(selectValidateState);
  const [join, { isLoading, error }] = useJoinMutation();
  const [isJoinLoading, joinError] = [isLoading, error];

  const handleJoin = async () => {
    const {
      username,
      password,
      name,
      phone,
      sex,
      birthday,
      nickname,
      mbti,
      userAgreement,
    } = joinState;

    if (
      !username ||
      !password ||
      !name ||
      !phone ||
      !sex ||
      !birthday ||
      !nickname ||
      !mbti ||
      !userAgreement
    ) {
      throw Error('User Register information is incomplete');
    }

    const credentials = {
      username,
      password,
      name,
      phone,
      sex,
      birthday,
      nickname,
      mbti,
      userAgreement,
    };
    try {
      if (isUsernameAvailable === 0) {
        return { errorMessage: 'Username is already in use.' };
      }
      if (isNicknameAvailable === 0) {
        return { errorMessage: 'Nickname is already in use.' };
      }
      const { message, userName, userId } = await join(credentials).unwrap();

      // Clear data that is no longer needed
      dispatch(clearValidateState());
      dispatch(clearJoinState());

      return { message, userName, userId };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          return err.data;
        }
        if (err.status === 409) {
          // 409 Conflict
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleJoin, isJoinLoading, joinError };
};

// Hooks for authentication
// Hook for login
export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const [isLoginLoading, loginError] = [isLoading, error];

  const handleLogin = async (credentials: {
    username: string;
    password: string;
  }) => {
    try {
      const { access, refresh, message } = await login(credentials).unwrap();

      // Save tokens to AsyncStorage
      await AsyncStorage.multiSet([
        ['access', access],
        ['refresh', refresh],
      ]);

      dispatch(setAccess(access));
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 401) {
          // 401 Unauthorized
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleLogin, isLoginLoading, loginError };
};

// Hook for logout
export const useLogout = () => {
  const dispatch = useAppDispatch();
  const access = useAppSelector(selectAccess);
  const [logout, { isLoading, error }] = useLogoutMutation();
  const [isLogoutLoading, logoutError] = [isLoading, error];

  const handleLogout = async () => {
    // 로그인 창으로 이동
    // Logout is always possible even if there is no access token
    // Remove tokens from AsyncStorage
    await AsyncStorage.multiRemove(['access', 'refresh']);
    try {
      if (access) {
        const { message } = await logout().unwrap();
        // Clear data in Redux store
        clearData(dispatch);
        return { message };
      }
    } catch (err) {
      clearData(dispatch);
      if (isFetchBaseQueryError(err)) {
        if (err.status === 401) {
          // 401 Unauthorized
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleLogout, isLogoutLoading, logoutError };
};

// Hook for refresh Access
export const useRefresh = () => {
  const dispatch = useAppDispatch();
  const [refresh, { isLoading, error }] = useRefreshMutation();
  const [isRefreshLoading, refreshError] = [isLoading, error];
  const handleRefresh = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refresh');
      if (refreshToken) {
        const { newAccess, newRefresh, message } = await refresh(
          refreshToken,
        ).unwrap();

        // Save tokens to AsyncStorage
        await AsyncStorage.multiSet([
          ['access', newAccess],
          ['refresh', newRefresh],
        ]);

        dispatch(setAccess(newAccess));
        return { message };
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 401) {
          // 로그인 창으로 이동
          // 401 Unauthorized
          // Remove tokens from AsyncStorage
          await AsyncStorage.multiRemove(['access', 'refresh']);
          // Clear data in Redux store
          clearData(dispatch);

          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleRefresh, isRefreshLoading, refreshError };
};

// Hooks for user
// Hook for write review

export const useWriteReview = () => {
  const [writeReview, { isLoading, error }] = useWriteReviewMutation();
  const [isWriteReviewLoading, writeReviewError] = [isLoading, error];

  const handleWriteReview = async (guesthouseId: number, rating: number) => {
    try {
      const { message } = await writeReview({ guesthouseId, rating }).unwrap();
      // "message": "Review created successfully"

      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "Rating must be between 0 and 5 and in increments of 0.5"
          // "errorMessage": "guesthouseId is required"
          // "errorMessage": "rating is required"
          // "errorMessage": "Invalid guesthouse ID: {guesthouseId}"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleWriteReview, isWriteReviewLoading, writeReviewError };
};

// Hook for register sticker
export const useRegisterSticker = () => {
  const [registerSticker, { isLoading, error }] = useRegisterStickerMutation();
  const [isRegistStickerLoading, registerStickerError] = [isLoading, error];

  const handleRegistSticker = async (stickers: StickerToSend[]) => {
    try {
      const { message } = await registerSticker(stickers).unwrap();
      // "message": "Sticker sent successfully"
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "Recipient not found"
          // "errorMessage": "Invalid request format"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleRegistSticker, isRegistStickerLoading, registerStickerError };
};

// Hook for update nickname
export const useUpdateNickname = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [updateNickname, { isLoading, error }] = useUpdateNicknameMutation();
  const [isUpdateNicknameLoading, updateNicknameError] = [isLoading, error];

  const handleUpdateNickname = async (nickname: string) => {
    try {
      if (!user) {
        throw Error('User information not found in Redux store');
      }
      const { newNickname, message } = await updateNickname(nickname).unwrap();
      // "nickname": "newNickname",
      // "message": "Nickname updated successfully"
      const newUserInfo = { ...user, nickname: newNickname };
      dispatch(setUserInfo(newUserInfo));
      return { newNickname, message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "Nickname cannot be null or empty"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 409) {
          // 409 Conflict
          // "errorMessage": "Nickname is already in use"
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          // "errorMessage": "Server error."
          return err.data;
        }
      }
      if (isErrorWithMessage(err)) {
        return { errorMessage: err.message };
      }
    }
    return null;
  };

  return { handleUpdateNickname, isUpdateNicknameLoading, updateNicknameError };
};

// Hook for update interests
export const useUpdateInterests = () => {
  const dispatch = useAppDispatch();
  const oldInterests = useAppSelector(selectInterests);

  const [updateInterests, { isLoading, error }] = useUpdateInterestsMutation();
  const [isUpdateInterestsLoading, updateInterestsError] = [isLoading, error];

  const handleUpdateInterests = async (interests: {
    interestedLocation: string[];
    interestedFood: string[];
    interestedHobby: string[];
  }) => {
    try {
      if (!oldInterests) {
        throw Error('Interests information not found in Redux store');
      }
      dispatch(setInterests(interests));
      const { message } = await updateInterests(interests).unwrap();
      // "message": "Interests updated successfully"
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return {
    handleUpdateInterests,
    isUpdateInterestsLoading,
    updateInterestsError,
  };
};
// Hooks for search
// Hook for search
export const useSearch = () => {
  const [search, { isLoading, error }] = useLazySearchQuery();
  const [isSearchLoading, searchError] = [isLoading, error];

  const handleSearch = async (searchParam: SearchParam) => {
    if (!searchParam) {
      throw Error('Search information not found in Redux store');
    }
    if (searchParam.location && searchParam.guesthouseName) {
      throw Error('location and searchName cannot be used together');
    }

    try {
      const { guesthouses } = await search(searchParam).unwrap();
      return { guesthouses };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "guesthouse_name or location must be provided"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 404) {
          // 404 Not Found
          // "errorMessage": "No guesthouse founded"
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleSearch, isSearchLoading, searchError };
};

// Hooks for reservation
// Hook for reservation
export const useReservate = () => {
  const [reservate, { isLoading, error }] = useReservateMutation();
  const reservationInfo = useAppSelector(selectReservationInfo);
  const [isReservateLoading, reservateError] = [isLoading, error];

  const handleReservate = async () => {
    try {
      if (!reservationInfo) {
        throw Error('Reservation information not found in Redux store');
      }
      const { guesthouseId, checkinDate, checkoutDate } = reservationInfo;
      if (!guesthouseId || !checkinDate || !checkoutDate) {
        throw Error('Reservation information is incomplete');
      }
      const confirmedInfo = {
        guesthouseId,
        checkinDate,
        checkoutDate,
      };

      const { message } = await reservate(confirmedInfo).unwrap();
      // "message": "Reservation created successfully"
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "ID must be a number"
          // "errorMessage": "checkin date is required"
          // "errorMessage": "checkout date is required"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 404) {
          // 404 Not Found
          // "errorMessage": "Invalid guesthouse ID: {guesthouseId}"
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          // "errorMessage": "Server error."
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleReservate, isReservateLoading, reservateError };
};

// Hooks for dibs
// Hook for register dibs
export const useRegisterDibs = () => {
  const [registerDibs, { isLoading, error }] = useRegisterDibsMutation();
  const [isRegisterDibsLoading, registerDibsError] = [isLoading, error];

  const handleRegisterDibs = async (guesthouseId: number) => {
    try {
      const { message } = await registerDibs(guesthouseId).unwrap();
      // "message": "guesthouse successfully added to dibs"
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "Guesthouse not found"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 409) {
          // 409 Conflict
          // "errorMessage": "Dibs already exists for this user and guesthouse"
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          // "errorMessage": "Server error."
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleRegisterDibs, isRegisterDibsLoading, registerDibsError };
};

// Hook for delete dibs
export const useDeleteDibs = () => {
  const [deleteDibs, { isLoading, error }] = useDeleteDibsMutation();
  const [isDeleteDibsLoading, deleteDibsError] = [isLoading, error];

  const handleDeleteDibs = async (guesthouseId: number) => {
    try {
      const { message } = await deleteDibs(guesthouseId).unwrap();
      // "message": "guesthouse successfully removed from dibs"
      return { message };
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        if (err.status === 400) {
          // 400 Bad Request
          // "errorMessage": "Dibs not found for this user and guesthouse"
          return err.data;
        }
        if (err.status === 401) {
          // 401 Unauthorized / access 토큰 재발급 필요
          return err.data;
        }
        if (err.status === 500) {
          // 500 Internal Server Error
          // "errorMessage": "Server error."
          return err.data;
        }
      }
    }
    return null;
  };

  return { handleDeleteDibs, isDeleteDibsLoading, deleteDibsError };
};
