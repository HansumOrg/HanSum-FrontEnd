import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { InterestProps } from '../../types';

function deleteInterest(props: InterestProps) {
  const { interests, userinterest, index, user, type } = props;
  if (userinterest.length > 0) {
    switch (type) {
      case 0:
        user.interested_location = userinterest.filter(
          interest => interest !== interests[index],
        );
        break;
      case 1:
        user.interest_hobby = userinterest.filter(
          interest => interest !== interests[index],
        );
        break;
      case 2:
        user.interested_food = userinterest.filter(
          interest => interest !== interests[index],
        );
        break;
      default:
        break;
    }
  }
}

function pushInterest(props: InterestProps) {
  const { interests, userinterest, index, user, type } = props;
  if (userinterest.length < 3) {
    switch (type) {
      case 0:
        user.interested_location.push(interests[index]);
        break;
      case 1:
        user.interest_hobby.push(interests[index]);
        break;
      case 2:
        user.interested_food.push(interests[index]);
        break;
      default:
        break;
    }
  }
}

function interestList(props: InterestProps) {
  const { interests, userinterest, index, user, type, setUserData } = props;

  const handlePress = () => {
    // onPress 이벤트가 있을 때 추가와 삭제를 수행
    if (userinterest.includes(interests[index])) {
      const newUserInterest = deleteInterest({
        interests,
        userinterest,
        index,
        user,
        type,
        setUserData,
      });
      setUserData(prevState => ({
        ...prevState,
        userinterest: newUserInterest,
      }));
    } else {
      const newUserInterest = pushInterest({
        interests,
        userinterest,
        index,
        user,
        type,
        setUserData,
      });
      setUserData(prevState => ({
        ...prevState,
        userinterest: newUserInterest,
      }));
    }
  };

  const borderColor = userinterest.includes(interests[index])
    ? 'border-primary-2/100'
    : 'border-point/100';
  const textColor = userinterest.includes(interests[index])
    ? 'text-primary-2'
    : 'text-point';

  return (
    <Pressable onPress={handlePress}>
      <View
        key={index}
        className={`flex border-2 mr-2 mb-1 ${borderColor} w-auto h-auto rounded-2xl items-center`}
      >
        <Text className={`font-inter-r px-2 py-1 text-md ${textColor}`}>
          {interests[index]}
        </Text>
      </View>
    </Pressable>
  );
}
export default interestList;
