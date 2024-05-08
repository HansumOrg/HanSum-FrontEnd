import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native';
import GetStartedNavigator from './navigation/GetStartedNavigator';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  type Mode = 'getStarted' | 'main' | 'develop';
  const [mode, setMode] = useState<Mode>('develop');

  const handleMode = (newMode: Mode) => () => {
    setMode(newMode);
  };

  if (mode === 'getStarted') {
    return (
      <NavigationContainer>
        <GetStartedNavigator />
      </NavigationContainer>
    );
  }
  if (mode === 'main') {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-slate-800">
        <Pressable
          className="h-20 bg-blue-300 flex justify-center items-center"
          onPress={handleMode('getStarted')}
        >
          <Text className="text-2xl">getStarted</Text>
        </Pressable>
        <Pressable
          className="h-20 bg-red-300 flex justify-center items-center"
          onPress={handleMode('main')}
        >
          <Text className="text-2xl">main</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// const App = () => {

//   const [isAutenticated, setIsAutenticated] = useState(false);
//     // 다음은 논리적인 구조입니다.
//     // App 코드는 가장 마지막에 수정해주세요.
//     <NavigationContainer>
//       {isAutenticated ? <GetStartedNavigator /> : <MainNavigator />}
//     </NavigationContainer>
// }

export default App;
