import React from 'react';
import { SafeAreaView, Text, StatusBar, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="h-screen bg-slate-500 flex justify-center items-center">
        <Text className="text-5xl text-white">Init!</Text>
      </View>
    </SafeAreaView>
  );
}
