import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import BackIcon from '../../../../assets/images/icon_goback.svg';
import { userData } from '../../../../data.json';

interface User {
  user_id: number;
  login_id: string;
  password: string;
  username: string;
  phone: string;
  sex: string;
  birthday: string;
  nickname: string;
  mbti: string;
  user_agreement: number;
  interested_location: string[];
  interest_hobby: string[];
  interested_food: string[];
}

interface NicknameProps {
  nickname: string;
  user: User[];
  userId: number;
}

function CheckNickname(props: NicknameProps) {
  const { nickname, user, userId } = props;
  let check = 0;
  if (user.some(data => data.nickname === nickname) || nickname === '') {
    check = 2;
  }
  if (check !== 2) {
    user[userId - 1].nickname = nickname;
    check = 1;
  }
  return check;
}

export default function ChangeNicknameScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: EditProfileStackScreenProps<'ChangeNickname'>) {
  const userId = 1;
  const [changeState, setChangeState] = useState(0); // 닉네임 중복확인 상태 0=미확인, 1=확인, 2=불가
  const [ChangeNickname, setChangeNickname] = useState(''); // 변경할 닉네임

  const handleInputUpdate = (text: string) => {
    setChangeNickname(text);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-full items-center">
          <View className="flex flex-col w-full h-1/4 ">
            <View className="flex w-full h-1/3 justify-center ">
              <Pressable onPress={() => navigation.goBack()}>
                <BackIcon
                  style={{ transform: [{ scaleX: -1 }] }}
                  width={38}
                  height={32}
                />
              </Pressable>
            </View>
            <View className="flex w-full h-1/4 justify-center my-1 px-2 ">
              <Text className="font-inter-b text-2xl py-1 text-black ">
                수정하실 닉네임을 입력해주세요.
              </Text>
            </View>
            <View className="flex w-full h-1/3 justify-center items-center">
              <View className="flex px-3 w-full h-5/6">
                <TextInput
                  className="font-inter-r text-md"
                  placeholder="닉네임"
                  onChangeText={text => handleInputUpdate(text)}
                />
                {changeState === 2 ? (
                  <View className="flex flex-col">
                    <View className="border-b border-failed/100" />
                    <Text className="font-inter-r text-sm text-failed">
                      이미 존재하거나 유효하지 않는 닉네임입니다.
                    </Text>
                  </View>
                ) : (
                  <View className="flex flex-col">
                    <View className="border-b" />
                    {changeState === 1 ? (
                      <Text className="font-inter-r text-sm text-black">
                        닉네임을 성공적으로 변경했습니다.
                      </Text>
                    ) : null}
                  </View>
                )}
              </View>
            </View>
          </View>
          <View className="flex w-full px-2 h-1/6">
            {changeState !== 2 ? (
              <View className="flex w-full h-2/5 rounded-lg bg-primary-2 justify-center items-center">
                <Pressable
                  onPress={() =>
                    setChangeState(
                      CheckNickname({
                        nickname: ChangeNickname,
                        user: userData,
                        userId,
                      }),
                    )
                  }
                >
                  <Text className="font-inter-sb text-xl text-white">
                    중복 확인
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View className="flex w-full h-2/5 rounded-lg bg-gray-3 justify-center items-center">
                <Pressable
                  onPress={() =>
                    setChangeState(
                      CheckNickname({
                        nickname: ChangeNickname,
                        user: userData,
                        userId,
                      }),
                    )
                  }
                >
                  <Text className="font-inter-sb text-xl text-black">
                    중복 확인
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
