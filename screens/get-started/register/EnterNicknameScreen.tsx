import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import type { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';
import Title from '../../../components/common/Title';
import { setJoinState } from '../../../api/slices/joinSlice';
import {
  useCheckNickname,
  useAppDispatch,
  useAppSelector,
} from '../../../api/hooks';
import { isFailedResponse, isSuccessResponse } from '../../../utils/helpers';

export default function EnterNicknameScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: RegisterStackScreenProps<'EnterNickname'>) {
  const curruentState = useAppSelector(state => state.join);
  const initialData = {
    username: curruentState.username,
    password: curruentState.password,
    name: curruentState.name,
    phone: curruentState.phone,
    sex: curruentState.sex,
    birthday: curruentState.birthday,
    nickname: '',
    mbti: null,
    userAgreement: null,
  };
  const [joinData, setJoinData] = useState(initialData);
  const [isDuplicate, setIsDuplicate] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { handleCheckNickname } = useCheckNickname();

  const dispatch = useAppDispatch();

  const handleCheckNicknamePress = async () => {
    const res = await handleCheckNickname(joinData.nickname);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log('check nickname success');
      setIsDuplicate(false);
      setIsChecked(false);
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
      setIsDuplicate(true);
      setIsChecked(true);
    } else {
      console.log('잘못된 응답입니다.');
      setIsDuplicate(false);
      setIsChecked(false);
    }
  };

  const submitNickname = () => {
    dispatch(setJoinState(joinData));
    navigation.navigate('SelectMbti');
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Title text="사용하실 닉네임을 입력해주세요." />
          </View>
          <View className="flex bg-white h-1/3 ">
            <InputText
              name="닉네임"
              value={joinData.nickname}
              onChangeText={text => {
                setJoinData({ ...joinData, nickname: text });
              }}
              isWrong={isDuplicate}
            />
            {isDuplicate && isChecked ? (
              <Text className=" font-inter-r text-sss text-red-1">
                이미 존재하는 닉네임입니다. 다시 입력해주세요.
              </Text>
            ) : null}
          </View>

          <View className="bg-white h-1/3">
            {isDuplicate ? (
              <RectButton
                onPress={handleCheckNicknamePress}
                text="중복확인"
                isActivate={joinData.nickname !== ''}
              />
            ) : (
              <RectButton isActivate onPress={submitNickname} text="선택완료" />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
