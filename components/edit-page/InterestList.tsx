import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MyPageStateType, InterestProps } from '../../types';
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
  if (userinterest[0] !== '') {
    switch (type) {
      case 0: {
        const updatedUserInterest = userinterest.filter(
          interest => interest !== interests[index],
        );
        console.log('updatedUserInterest', updatedUserInterest);
        setInterestData({
          ...interestData,
          interestedLocation: updatedUserInterest,
        });
        break;
      }
      case 1:
        setInterestData({
          ...interestData,
          interestedHobby: userinterest.filter(
            interest => interest !== interests[index],
          ),
        });
        break;
      case 2:
        setInterestData({
          ...interestData,
          interestedFood: userinterest.filter(
            interest => interest !== interests[index],
          ),
        });
        break;
      default:
        break;
    }
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
  if (userinterest.length < 3) {
    switch (type) {
      case 0:
        setInterestData({
          ...interestData,
          interestedLocation: [...userinterest, interests[index]],
        });
        break;
      case 1:
        setInterestData({
          ...interestData,
          interestedHobby: [...userinterest, interests[index]],
        });
        break;
      case 2:
        setInterestData({
          ...interestData,
          interestedFood: [...userinterest, interests[index]],
        });
        break;
      default:
        break;
    }
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
  // useEffect(() => {
  //   console.log('interestData updated:', interestData);
  // }, [interestData]);

  const handlePress = () => {
    // onPress 이벤트가 있을 때 추가와 삭제를 수행
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
    console.log("interestData", interestData);
    const res = await handleUpdateInterests(interestData);
    if (isSuccessResponse(res)) {
      // 요청 성공시 발생하는 응답
      console.log(res);
      console.log('success');
    } else if (isFailedResponse(res)) {
      // 요청 실패시 발생하는 응답
      console.log(res);
    } else console.log('잘못된 응답입니다.');
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
