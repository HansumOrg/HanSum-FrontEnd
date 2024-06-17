import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { InterestProps } from '../../types';
import { isSuccessResponse, isFailedResponse } from '../../utils/helpers';

function deleteInterest(props: InterestProps) {
  const {
    interestData,
    setInterestData,
    interests,
    userinterest,
    index,
    type,
  } = props;

  let updatedUserInterest = userinterest.filter(
    interest => interest !== interests[index],
  );

  if (updatedUserInterest.length === 0) {
    updatedUserInterest = [''];
  }

  switch (type) {
    case 0:
      setInterestData({
        ...interestData,
        interestedLocation: updatedUserInterest,
      });
      break;
    case 1:
      setInterestData({
        ...interestData,
        interestedHobby: updatedUserInterest,
      });
      console.log('updatedUserInterest:', updatedUserInterest);
      break;
    case 2:
      setInterestData({
        ...interestData,
        interestedFood: updatedUserInterest,
      });
      break;
    default:
      break;
  }
}

function pushInterest(props: InterestProps) {
  const {
    interestData,
    setInterestData,
    interests,
    userinterest,
    index,
    type,
  } = props;

  let updatedUserInterest = userinterest[0] === '' ? [] : userinterest;

  if (updatedUserInterest.length < 3) {
    updatedUserInterest = [...updatedUserInterest, interests[index]];
  }

  switch (type) {
    case 0:
      setInterestData({
        ...interestData,
        interestedLocation: updatedUserInterest,
      });
      break;
    case 1:
      setInterestData({
        ...interestData,
        interestedHobby: updatedUserInterest,
      });
      break;
    case 2:
      setInterestData({
        ...interestData,
        interestedFood: updatedUserInterest,
      });
      break;
    default:
      break;
  }
}

const InterestList: React.FC<InterestProps> = ({
  handleUpdateInterests,
  interestData,
  setInterestData,
  interests,
  userinterest,
  index,
  type,
}) => {
  const handlePress = () => {
    if (userinterest.includes(interests[index])) {
      deleteInterest({
        interestData,
        setInterestData,
        interests,
        userinterest,
        index,
        type,
      });
    } else {
      pushInterest({
        interestData,
        setInterestData,
        interests,
        userinterest,
        index,
        type,
      });
    }
  };

  const handleChangePress = async () => {
    handlePress();
    // const res = await handleUpdateInterests(interestData);
    // if (isSuccessResponse(res)) {
    //   console.log('Update successful:', res);
    // } else if (isFailedResponse(res)) {
    //   console.log('Update failed:', res);
    // } else {
    //   console.log('Unexpected response:', res);
    // }
  };

  const borderColor = userinterest.includes(interests[index])
    ? 'border-primary-2/100'
    : 'border-point/100';
  const textColor = userinterest.includes(interests[index])
    ? 'text-primary-2'
    : 'text-point';

  return (
    <Pressable key={index} onPress={handleChangePress}>
      <View
        className={`flex border-2 mr-2 mb-1 ${borderColor} w-auto h-auto rounded-2xl items-center`}
      >
        <Text className={`font-inter-r px-2 py-1 text-s ${textColor}`}>
          {interests[index]}
        </Text>
      </View>
    </Pressable>
  );
};

export default InterestList;
