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
  useCheckUsername,
  useCheckNickname,
  useJoin,
  useAppSelector,
} from '../../api/hooks';
import { JoinSuccessResponse } from '../../api/types';
import { isFailedResponse, isSuccessResponse } from '../../utils/helpers';

export default function JoinScreen() {
  const initialData = {
    username: '',
    password: '',
    name: '',
    phone: '',
    sex: '',
    birthday: '',
    nickname: '',
    mbti: '',
    userAgreement: 0,
  };

  const [joinData, setJoinData] = useState(initialData);

  const { handleJoin, isJoinLoading, joinError } = useJoin();
  const { handleCheckUsername, isUsernameLoading, usernameError } =
    useCheckUsername();
  const { handleCheckNickname, isNicknameLoading, nicknameError } =
    useCheckNickname();
  const isUsernameAvailable = useAppSelector(
    state => state.join.isUsernameAvailable,
  );
  const isNicknameAvailable = useAppSelector(
    state => state.join.isNicknameAvailable,
  );

  const createUsernamAvailableText = () => {
    if (isUsernameAvailable === 0) return '사용불가';
    if (isUsernameAvailable === 1) return '사용가능';
    return '';
  };
  const createNicknameAvailableText = () => {
    if (isNicknameAvailable === 0) return '사용불가';
    if (isNicknameAvailable === 1) return '사용가능';
    return '';
  };

  const handleJoinPress = async () => {
    const res = await handleJoin(joinData);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      const successRes = res as JoinSuccessResponse;
      console.log(successRes.name);
      console.log(successRes.userId);
      console.log('success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  const handleCheckUsernamePress = async () => {
    const res = await handleCheckUsername(joinData.username);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('check username success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  const handleCheckNicknamePress = async () => {
    const res = await handleCheckNickname(joinData.nickname);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('check nickname success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="default" />
        <View className="flex flex-row justify-between bg-white">
          <TextInput
            className="h-10 flex-1"
            onChangeText={text => setJoinData({ ...joinData, username: text })}
            placeholder="username"
            value={joinData.username}
          />
          <Pressable
            className="h-10 w-36 bg-blue-300 flex justify-center items-center rounded-2xl"
            onPress={handleCheckUsernamePress}
          >
            <Text>username 중복검사</Text>
          </Pressable>
        </View>
        {isUsernameAvailable !== null && (
          <View className="h-10 bg-white">
            <Text>{createUsernamAvailableText()}</Text>
          </View>
        )}
        <TextInput
          className="h-10 flex-1 bg-white"
          onChangeText={text => setJoinData({ ...joinData, password: text })}
          placeholder="password"
          value={joinData.password}
        />
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, name: text })}
          placeholder="name"
          value={joinData.name}
        />
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, phone: text })}
          placeholder="phone"
          value={joinData.phone}
        />
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, sex: text })}
          placeholder="sex"
          value={joinData.sex}
        />
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, birthday: text })}
          placeholder="birthday"
          value={joinData.birthday}
        />
        <View className="flex flex-row justify-between bg-white">
          <TextInput
            className="h-10 bg-white flex-1"
            onChangeText={text => setJoinData({ ...joinData, nickname: text })}
            placeholder="nickname"
            value={joinData.nickname}
          />
          <Pressable
            className="h-10 w-36 bg-blue-300 flex justify-center items-center rounded-2xl"
            onPress={handleCheckNicknamePress}
          >
            <Text>nickname 중복검사</Text>
          </Pressable>
        </View>
        {isNicknameAvailable !== null && (
          <View className="h-10 bg-white">
            <Text>{createNicknameAvailableText()}</Text>
          </View>
        )}
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, mbti: text })}
          placeholder="mbti"
          value={joinData.mbti}
        />
        <View className="h-10 bg-white flex justify-center items-center mb-20">
          <Pressable
            className={`h-10 w-64 flex justify-center items-center rounded-full ${
              joinData.userAgreement === 0 ? 'bg-red-300' : 'bg-blue-300'
            }`}
            onPress={() =>
              setJoinData({
                ...joinData,
                userAgreement: joinData.userAgreement ? 0 : 1,
              })
            }
          >
            <Text>
              useAgreement
              {joinData.userAgreement === 0 ? ' 비동의' : ' 동의'}
            </Text>
          </Pressable>
        </View>
        <Pressable
          className="h-10 bg-green-300 flex justify-center items-center"
          onPress={handleJoinPress}
        >
          <Text className="text-2xl">확인</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
