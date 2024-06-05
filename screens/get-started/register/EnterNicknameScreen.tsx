import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import type { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';
import Title from '../../../components/common/Title';
import DuplicateNicName from '../../../components/api/DuplicateNicName';

export default function EnterNicknameScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: RegisterStackScreenProps<'EnterNickname'>) {
  const [nickName, setNickName] = React.useState('');
  const [isDuplicate, setIsDuplicate] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);

  const nickNameSubmit = async () => {
    try {
      console.log('checkDuplicate');
      await DuplicateNicName({
        nickName,
        onCheck: isAvailable => {
          setIsDuplicate(!isAvailable);
          console.log(
            isAvailable ? '사용 가능한 ID입니다.' : '이미 사용 중인 ID입니다.',
          );
        },
      });
      setIsChecked(true);
    } catch (error) {
      console.error('중복 확인 중 에러 발생:', error);
      setIsDuplicate(true); // 오류가 발생한 경우 중복으로 간주
    }
  };
  const handleNickNameTest = () => {
    nickNameSubmit().catch(error =>
      console.error('중복 확인 중 에러 발생:', error),
    );
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
              value={nickName}
              onChangeText={text => setNickName(text)}
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
                onPress={handleNickNameTest}
                text="중복확인"
                isActivate={nickName !== ''}
              />
            ) : (
              <RectButton
                isActivate
                onPress={() => navigation.navigate('SelectMbti')}
                text="선택완료"
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
