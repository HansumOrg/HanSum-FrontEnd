import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { RegisterStackScreenProps } from '../../../navigation/types';
import RectButton from '../../../components/common/RectButton';
import UiCheckbox from '../../../components/common/Checkbox';

export default function AgreeTosScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}: RegisterStackScreenProps<'AgreeTos'>) {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen px-6 pt-6 bg-white">
        <Text>이용약관에 동의해주세요</Text>
        <View className=" h-4/5 bg-blue-300 items-center justify-stert pt-4 ">
          <View className="h-36 bg-gray-2 w-36" />
          <View className=" bg-white items-center mt-6">
            <Text>“한 숨”을 통해</Text>
            <Text> 새로운 사람들과 소중한 만남을 시작해보세!!</Text>
            <UiCheckbox isChecked={checked} onValueChangeHandler={setChecked} />
          </View>
        </View>

        <View className="h-1/5  flex">
          <View className="h-2/3 mt-2">
            <RectButton
              className="bg-gray-400"
              activate
              onPress={() => {}}
              text="시작하기"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
