import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../modules/Chat/components/Chat';
import ChatNavigation from './ChatNavigation';

const AppStack = createStackNavigator();

const AppNavigation  = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown : false}}>
      <AppStack.Screen name="ChatList" component={ChatNavigation} />
      <AppStack.Screen name="Chat" component={Chat} />
    </AppStack.Navigator>
  );
}

export default AppNavigation;