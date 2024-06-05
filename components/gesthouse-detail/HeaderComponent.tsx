import { View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PhExport from '../../assets/icon/ph_export.svg';
import BackIcon from '../../assets/icon/detail_back.svg';
import UnfilledHeartIcon from '../../assets/icon/unfilled_heart_.svg';
import FilledHeartIcon from '../../assets/icon/filled_heart.svg';

interface HeaderProps {
  isFavorite?: boolean;
}

export default function Header(
  { isFavorite }: HeaderProps = { isFavorite: true },
) {
  const [favorite, setFavorite] = useState(isFavorite);
  const navigation = useNavigation();
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <View className="h-full w-full justify-between items-center flex-row">
      <Pressable
        className="h-full w-2/3 p-1 justify-center items-start "
        onPress={() => navigation.goBack()}
      >
        <BackIcon height="80%" width="20%" />
      </Pressable>
      <View className="h-full w-2/6 flex-row items-center justify-center gap-4">
        <PhExport width="30%" height="70%" preserveAspectRatio="none" />
        <Pressable
          className="h-4/6 w-2/5 p-1 justify-center items-end "
          onPress={toggleFavorite}
        >
          {favorite ? (
            <FilledHeartIcon
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />
          ) : (
            <UnfilledHeartIcon
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}
