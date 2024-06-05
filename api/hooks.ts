import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RootState, AppDispatch } from './store';
import {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
} from './endpoints/authEndpoints';
import {
  useLazyCheckUsernameQuery,
  useLazyCheckNicknameQuery,
  useJoinMutation,
} from './endpoints/joinEndpoints';
import { setAccess, clearAccess, setError } from './slices/authSlice';
import {
  setIsUsernameAvailable,
  setIsNicknameAvailable,
} from './slices/joinSlice';
import { isFetchBaseQueryError } from '../utils/helpers';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Custom hooks for authentication

// Hook for join
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

export const useJoin = () => {
  const [join, { isLoading, error }] = useJoinMutation();
  const [isJoinLoading, joinError] = [isLoading, error];

  const handleJoin = async (credentials: {
    username: string;
    password: string;
    name: string;
    phone: string;
    sex: string;
    birthday: string;
    nickname: string;
    mbti: string;
    userAgreement: number;
  }) => {
    try {
      return await join(credentials).unwrap();
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
      dispatch(setError('Login failed'));
    }
    return null;
  };

  return { handleLogin, isLoginLoading, loginError };
};

// Hook for logout
export const useLogout = () => {
  const dispatch = useAppDispatch();
  const access = useSelector((state: RootState) => state.auth.access);
  const [logout, { isLoading, error }] = useLogoutMutation();
  const [isLogoutLoading, logoutError] = [isLoading, error];

  const handleLogout = async () => {
    // Logout is always possible even if there is no access token
    // Remove tokens from AsyncStorage
    await AsyncStorage.multiRemove(['access', 'refresh']);
    try {
      if (access) {
        const { message } = await logout().unwrap();
        dispatch(clearAccess());
        return { message };
      }
      dispatch(setError('Logout Request failed: no access token'));
    } catch (err) {
      dispatch(clearAccess());
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
      dispatch(setError('Logout Request failed'));
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
      dispatch(setError('Refresh failed: no refresh token'));
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
      dispatch(setError('Refresh failed'));
    }
    return null;
  };

  return { handleRefresh, isRefreshLoading, refreshError };
};
