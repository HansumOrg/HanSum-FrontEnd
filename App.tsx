import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import GetStartedNavigator from './navigation/GetStartedNavigator';
import MainNavigator from './navigation/MainNavigator';
import ApiTestNavigator from './navigation/ApiTestNavigator';
import store from './api/store';
// import { useAppSelector } from './api/hooks';
// import { selectIsAuthenticated } from './api/selectors';

// 다음은 테스트용 앱입니다.

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

// 다음은 실제 앱입니다.

// const Main = () => {
//   const isAuthenticated = useAppSelector(selectIsAuthenticated);

//   return (
//     <NavigationContainer>
//       {isAuthenticated ? <MainNavigator /> : <GetStartedNavigator />}
//     </NavigationContainer>
//   );
// };

// const App = () => {
//   <Provider store={store}>
//     <Main />
//   </Provider>;
// };

export default App;
