import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import StickerList from '../../../../components/edit-page/StickerList';
import { useMyPageContext } from '../../../../components/my-page/MyPageContext';

export default function ViewReceivedStickerScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: EditProfileStackScreenProps<'ViewReceivedSticker'>) {
  const context = useMyPageContext();
  const mentList = [
    '항상 웃음을 잃지 않아요',
    '대화가 즐거웠어요',
    '배려심이 깊어요',
    '조용하고 편안한 동반자였어요',
    '에너지가 넘치고 활기차요',
    '공간을 조금 더 정리해주세요',
    '다른 게스트를 조금만 더 배려해주세요',
    '소음 관리에 조금 더 신경 써주세요',
  ];
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen w-screen bg-white flex items-center">
        <View className="flex w-11/12 h-full items-center">
          <View className="flex flex-col w-full h-auto py-4">
            <Text className="font-inter-b px-2 text-md text-black">
              받은 스티커
            </Text>
          </View>
          <View className="flex flex-col h-full w-full items-center">
            {mentList.map((_, index) => {
              // user_id와 sticker_text가 일치하는 sticker_count를 찾아서 count에 저장
              const count =
                context.myPageState.sticker.find(
                  sticker => sticker.sticker_text === mentList[index],
                )?.sticker_count ?? 0;
              return StickerList({ mentList, index, count });
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
