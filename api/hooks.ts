import { useDispatch, useSelector } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RootState, AppDispatch } from './store';
import {
  useJoinMutation,
  // useLoginMutation,
  // useLogoutMutation,
  // useReissueMutation,
} from './endpoints/authEndpoints';
// import { setAccessToken, clearAccessToken, setError } from './slices/authSlice';
import { isFetchBaseQueryError } from '../utils/helpers';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Custom hooks for authentication

// Hook for login
export const useJoin = () => {
  const [join, { isLoading, error }] = useJoinMutation();

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
      const result = await join(credentials).unwrap();
      return result;
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

  return { handleJoin, isLoading, error };
};

// export const useLogin = () => {
//   const dispatch = useAppDispatch();
//   const [login, { isLoading, error }] = useLoginMutation();

//   const handleLogin = async (credentials: {
//     username: string;
//     password: string;
//   }) => {
//     try {
//       const result = await login(credentials).unwrap();
//       console.log(result);
//       // const { accessToken, refreshToken } = result;

//       // // Save tokens to AsyncStorage
//       // await AsyncStorage.multiSet([
//       //   ['accessToken', accessToken],
//       //   ['refreshToken', refreshToken],
//       // ]);

//       // dispatch(setAccessToken(accessToken));
//     } catch (err) {
//       console.log(err);
//       // dispatch(setError('Login failed'));
//     }
//   };

//   return { handleLogin, isLoading, error };
// };

// Hook for logout
// export const useLogout = () => {
//   const dispatch = useAppDispatch();
//   const [logout, { isLoading, error }] = useLogoutMutation();

//   const handleLogout = async () => {
//     try {
//       await logout().unwrap();

//       // Remove tokens from AsyncStorage
//       await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);

//       dispatch(clearAccessToken());
//     } catch (err) {
//       dispatch(setError('Logout failed'));
//     }
//   };

//   return { handleLogout, isLoading, error };
// };

// Hook for reissue AccessToken
// export const useReissueAccessToken = () => {
//   const dispatch = useAppDispatch();
//   const [reissue, { isLoading, error }] = useReissueMutation();

//   const handleReissueAccessToken = async (refreshToken: string) => {
//     try {
//       const { newAccessToken, newRefreshToken } = await reissue(
//         refreshToken,
//       ).unwrap();

//       // Save tokens to AsyncStorage
//       await AsyncStorage.multiSet([
//         ['accessToken', newAccessToken],
//         ['refreshToken', newRefreshToken],
//       ]);

//       dispatch(setAccessToken(newAccessToken));
//     } catch (err) {
//       dispatch(setError('Reissue failed'));
//     }
//   };

//   return { handleReissueAccessToken, isLoading, error };
// };
