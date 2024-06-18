import { Dimensions, View, Text } from 'react-native';
import GuestReview from '../../common/GuestReview';

const screenHeight = Dimensions.get('window').height;
export default function GuestReviewCard({
  name,
  mbti,
  onReviewChange,
}: {
  name: string;
  mbti: string;
  onReviewChange: (nickname: string, selectedReviews: string[]) => void;
}): JSX.Element {
  return (
    <View
      className="px-4 w-full justify-start items-center m-2"
      style={{ height: (screenHeight * 2) / 5 }}
    >
      <View className="mt-4 flex-row h-[10%] w-full">
        <Text className="text-md font-inter-r text-black">{name}-</Text>
        <Text className="text-md font-inter-r text-black">{mbti}</Text>
      </View>
      <GuestReview onReviewChange={onReviewChange} nickname={name} />
    </View>
  );
}
