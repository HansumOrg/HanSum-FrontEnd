import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

function MbtiCheck({ mbti }: { mbti: string }) {
  const [color, setColor] = useState('green');

  useEffect(() => {
    if (
      mbti === 'INTJ' ||
      mbti === 'INTP' ||
      mbti === 'ENTJ' ||
      mbti === 'ENTP'
    ) {
      setColor('pink');
    } else if (
      mbti === 'INFJ' ||
      mbti === 'INFP' ||
      mbti === 'ENFJ' ||
      mbti === 'ENFP'
    ) {
      setColor('green');
    } else if (
      mbti === 'ISTJ' ||
      mbti === 'ISFJ' ||
      mbti === 'ESTJ' ||
      mbti === 'ESFJ'
    ) {
      setColor('blue');
    } else {
      setColor('yellow');
    }
  }, [mbti]);
  return (
    <View
      className={`flex border-2 border-mbti-${color}/100 w-2/5 h-auto rounded-2xl items-center`}
    >
      <Text className="font-inter-sb text-sm text-black">{mbti}</Text>
    </View>
  );
}
export default MbtiCheck;
