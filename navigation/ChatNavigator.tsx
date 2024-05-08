import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatStackParamList } from './types';
import ChatListScreen from '../screens/main/chat/ChatListScreen';
import ChatPageScreen from '../screens/main/chat/ChatPageScreen';

export default function ChatNavigator() {
  const ChatStack = createStackNavigator<ChatStackParamList>();

  return (
    <ChatStack.Navigator initialRouteName="ChatList">
      <ChatStack.Screen name="ChatList" component={ChatListScreen} />
      <ChatStack.Screen name="ChatPage" component={ChatPageScreen} />
    </ChatStack.Navigator>
  );
}
