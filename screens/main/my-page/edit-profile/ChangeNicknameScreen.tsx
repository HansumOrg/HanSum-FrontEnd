import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { useCheckNickname, useUpdateNickname } from '../../../../api/hooks';
import { isSuccessResponse, isFailedResponse } from '../../../../utils/helpers';

export default function ChangeNicknameScreen() {
  const { handleCheckNickname } = useCheckNickname();
  const { handleUpdateNickname } = useUpdateNickname();
  const [changeState, setChangeState] = useState(0); // 닉네임 중복확인 상태 0=미확인, 1=확인, 2=불가
  const [changeNickname, setChangeNickname] = useState(''); // 변경할 닉네임

  const handleCheckNicknamePress = async () => {
    const res = await handleCheckNickname(changeNickname);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('check nickname success');
      setChangeState(1);
      const changRes = await handleUpdateNickname(changeNickname);
      if (isSuccessResponse(changRes)) {
        console.log('update nickname success');
      } else if (isFailedResponse(changRes)) {
        console.log(changRes);
      } else {
        console.log('잘못된 응답입니다.');
      }
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
      setChangeState(2);
    } else {
      console.log('잘못된 응답입니다.');
      setChangeState(2);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-full items-center">
          <View className="flex flex-col w-full h-1/5 justify-center">
            <View className="flex w-wrap h-auto justify-center my-1 px-2 ">
              <Text className="font-inter-b text-xl py-1 text-black ">
                수정하실 닉네임을 입력해주세요.
              </Text>
            </View>
            <View className="flex w-full h-1/3 justify-center items-center">
              <View className="flex px-3 w-full h-5/6">
                <TextInput
                  className="font-inter-r text-s"
                  placeholder="닉네임"
                  onChangeText={text => setChangeNickname(text)}
                />
                {changeState === 2 ? (
                  <View className="flex flex-col">
                    <View className="border-b border-failed/100" />
                    <Text className="font-inter-r text-ss text-failed">
                      이미 존재하거나 유효하지 않는 닉네임입니다.
                    </Text>
                  </View>
                ) : (
                  <View className="flex flex-col">
                    <View className="border-b" />
                    {changeState === 1 ? (
                      <Text className="font-inter-r text-ss text-black">
                        닉네임을 성공적으로 변경했습니다.
                      </Text>
                    ) : null}
                  </View>
                )}
              </View>
            </View>
          </View>
          <View className="flex w-full p-2 h-1/6 ">
            {changeState !== 2 ? (
              <View className="flex w-full h-2/5 rounded-lg bg-primary-2 justify-center items-center">
                <Pressable onPress={handleCheckNicknamePress}>
                  <Text className="font-inter-sb text-md text-white">
                    변경하기
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View className="flex w-full h-2/5 rounded-lg bg-gray-3 justify-center items-center">
                <Pressable onPress={handleCheckNicknamePress}>
                  <Text className="font-inter-sb text-md text-black">
                    변경하기
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
