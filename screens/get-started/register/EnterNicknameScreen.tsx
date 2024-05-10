import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import type { RegisterStackScreenProps } from '../../../navigation/types';
import InputText from '../../../components/common/InputText';
import RectButton from '../../../components/common/RectButton';

export default function EnterNicknameScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RegisterStackScreenProps<'EnterNickname'>) {
  const [nickName, setNickName] = React.useState('');
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <View className="h-2/5">
          <View className=" bg-white h-1/3 justify-center">
            <Text>사용하실 닉네임을 입력해주세요.</Text>
          </View>
          <View className="flex bg-white h-1/3 ">
            <InputText
              name="닉네임"
              value={nickName}
              onChangeText={text => setNickName(text)}
            />
          </View>
          <View className="bg-white h-1/3">
            <RectButton
              activate
              onPress={() => navigation.navigate('SelectMbti')}
              text="선택완료"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
