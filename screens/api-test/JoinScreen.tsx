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
import { useJoin } from '../../api/hooks';
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

  const { handleJoin, isLoading, error } = useJoin();

  const [joinData, setJoinData] = useState(initialData);

  const handleJoinPress = async () => {
    const res = await handleJoin(joinData);
    if (isSuccessResponse(res)) {
      const successRes = res as JoinSuccessResponse;
      console.log(successRes.name);
      console.log(successRes.userId);
      console.log('success');
    } else if (isFailedResponse(res)) {
      // 에러문
      console.log(res);
    } else console.log('잘못된 응답입니다.');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="default" />
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, username: text })}
          placeholder="username"
          value={joinData.username}
        />
        <TextInput
          className="h-10 bg-white"
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
        <TextInput
          className="h-10 bg-white"
          onChangeText={text => setJoinData({ ...joinData, nickname: text })}
          placeholder="nickname"
          value={joinData.nickname}
        />
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
