import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import GetStartedNavigator from './navigation/GetStartedNavigator';
import MainNavigator from './navigation/MainNavigator';
import ApiTestNavigator from './navigation/ApiTestNavigator';
import store from './api/store';

const App = () => {
  type Mode = 'getStarted' | 'main' | 'apiTest' | undefined;
  const [mode, setMode] = useState<Mode>(undefined);

  const handleMode = (newMode: Mode) => () => {
    setMode(newMode);
  };

  if (mode === 'getStarted') {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <GetStartedNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
  if (mode === 'main') {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
  if (mode === 'apiTest') {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <ApiTestNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
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
          <Pressable
            className="h-20 bg-purple-300 flex justify-center items-center"
            onPress={handleMode('apiTest')}
          >
            <Text className="text-2xl">apiTest</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Provider>
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
