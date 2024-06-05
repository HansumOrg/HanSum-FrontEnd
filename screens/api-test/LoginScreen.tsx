/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import {
  useAppSelector,
  useLogin,
  useLogout,
  useRefresh,
} from '../../api/hooks';
import { isFailedResponse, isSuccessResponse } from '../../utils/helpers';

export default function LoginScreen() {
  const initialData = {
    username: '',
    password: '',
  };

  const { handleLogin, isLoginLoading, loginError } = useLogin();
  const { handleLogout, isLogoutLoading, logoutError } = useLogout();
  const { handleRefresh, isRefreshLoading, refreshError } = useRefresh();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const access = useAppSelector(state => state.auth.access);
  const error = useAppSelector(state => state.auth.error);

  const [loginData, setLoginData] = useState(initialData);

  const handleLoginPress = async () => {
    const res = await handleLogin(loginData);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('login success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  const handleLogoutPress = async () => {
    const res = await handleLogout();
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('logout success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  const handleRefreshPress = async () => {
    const res = await handleRefresh();
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('refresh success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="default" />
        {error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
        {isAuthenticated ? (
          <View>
            <View>
              <Text>Access</Text>
              <Text>{access}</Text>
            </View>
            <Pressable
              className="h-10 bg-purple-300 flex justify-center items-center"
              onPress={handleLogoutPress}
            >
              <Text className="text-2xl">로그아웃</Text>
            </Pressable>
            <Pressable
              className="h-10 bg-yellow-300 flex justify-center items-center"
              onPress={handleRefreshPress}
            >
              <Text className="text-2xl">Acess 토큰 재발급</Text>
            </Pressable>
          </View>
        ) : (
          <View>
            <TextInput
              className="h-10 bg-white"
              onChangeText={text =>
                setLoginData({ ...loginData, username: text })
              }
              placeholder="username"
              value={loginData.username}
            />
            <TextInput
              className="h-10 bg-white"
              onChangeText={text =>
                setLoginData({ ...loginData, password: text })
              }
              placeholder="password"
              value={loginData.password}
            />
            <Pressable
              className="h-10 bg-green-300 flex justify-center items-center"
              onPress={handleLoginPress}
            >
              <Text className="text-2xl">확인</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
