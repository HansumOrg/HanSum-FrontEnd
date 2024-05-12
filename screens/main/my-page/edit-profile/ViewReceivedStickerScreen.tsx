import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { EditProfileStackScreenProps } from '../../../../navigation/types';
import BackIcon from '../../../../assets/images/icon_goback.svg';
import data from '../../../../data.json';
import PersonIcon from '../../../../assets/images/icon_person.svg';

interface Sticker {
  sticker_id: number;
  user_id: number;
  sticker_text: string;
  sticker_count: number;
}

interface StickerProps {
  count: number;
  mentList: string[];
  index: number;
}

function stickerList(props: StickerProps) {
  // 모든 스티커 리스트를 출력
  const { count, mentList, index } = props;
  return (
    <View className="flex pb-4 flex-row w-full px-1 h-auto " key={index}>
      <View className="flex flex-row w-full justify-between">
        {index <= 4 ? (
          <View className="flex border-2 mr-1 border-primary-2/100 w-auto h-auto rounded-2xl items-center">
            <Text className="font-inter-r px-2 py-1 text-md text-primary-2">
              {mentList[index]}
            </Text>
          </View>
        ) : (
          <View className="flex border-2 mr-1 border-point/100 w-auto h-auto rounded-2xl items-center">
            <Text className="font-inter-r px-2 py-1 text-md text-point">
              ⚠ {mentList[index]}
            </Text>
          </View>
        )}
        <View className="flex flex-row items-center">
          <PersonIcon width={18} height={24} />
          <Text className="font-inter-sb mx-1 text-md text-black">{count}</Text>
        </View>
      </View>
    </View>
  );
}

export default function ViewReceivedStickerScreen({
  // route와 navigation 사용 안할 시 제거해주세요.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  navigation,
}: EditProfileStackScreenProps<'ViewReceivedSticker'>) {
  const userId = 1;
  const stickerData: Sticker[] = data.sticker;
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
          <View className="flex flex-col w-full h-1/6 ">
            <View className="flex w-full h-1/2 justify-center">
              <Pressable onPress={() => navigation.goBack()}>
                <BackIcon
                  style={{ transform: [{ scaleX: -1 }] }}
                  width={38}
                  height={32}
                />
              </Pressable>
            </View>
            <View className="flex w-full h-1/2 justify-center">
              <Text className="font-inter-b px-2 text-xl text-black">
                받은 스티커
              </Text>
            </View>
          </View>
          <View className="flex flex-col h-full w-full items-center">
            {mentList.map((_, index) => {
              // user_id와 sticker_text가 일치하는 sticker_count를 찾아서 count에 저장
              const count =
                stickerData.find(
                  sticker =>
                    sticker.user_id === userId &&
                    sticker.sticker_text === mentList[index],
                )?.sticker_count ?? 0;
              return stickerList({ mentList, index, count });
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
