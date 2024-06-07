import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MyPageStateType, InterestProps } from '../../types';

function deleteInterest(props: InterestProps) {
  const { context, interests, userinterest, index, type } = props;
  if (userinterest.length > 0) {
    switch (type) {
      case 0:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_location: userinterest.filter(
            interest => interest !== interests[index],
          ),
        }));
        break;
      case 1:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_hobby: userinterest.filter(
            interest => interest !== interests[index],
          ),
        }));
        break;
      case 2:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_food: userinterest.filter(
            interest => interest !== interests[index],
          ),
        }));
        break;
      default:
        break;
    }
  }
}

function pushInterest(props: InterestProps) {
  const { context, interests, userinterest, index, type } = props;
  if (userinterest.length < 3) {
    switch (type) {
      case 0:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_location: [
            ...prevState.interested_location,
            interests[index],
          ],
        }));
        break;
      case 1:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_hobby: [...prevState.interested_hobby, interests[index]],
        }));
        break;
      case 2:
        context.setMyPageState((prevState: MyPageStateType) => ({
          ...prevState,
          interested_food: [...prevState.interested_food, interests[index]],
        }));
        break;
      default:
        break;
    }
  }
}

function interestList(props: InterestProps) {
  const { context, interests, userinterest, index, type } = props;

  const handlePress = () => {
    // onPress 이벤트가 있을 때 추가와 삭제를 수행
    if (userinterest.includes(interests[index])) {
      deleteInterest({
        context,
        interests,
        userinterest,
        index,
        type,
      });
    } else {
      pushInterest({
        context,
        interests,
        userinterest,
        index,
        type,
      });
    }
  };

  const borderColor = userinterest.includes(interests[index])
    ? 'border-primary-2/100'
    : 'border-point/100';
  const textColor = userinterest.includes(interests[index])
    ? 'text-primary-2'
    : 'text-point';

  return (
    <Pressable key={index} onPress={handlePress}>
      <View
        className={`flex border-2 mr-2 mb-1 ${borderColor} w-auto h-auto rounded-2xl items-center`}
      >
        <Text className={`font-inter-r px-2 py-1 text-s ${textColor}`}>
          {interests[index]}
        </Text>
      </View>
    </Pressable>
  );
}
export default interestList;
