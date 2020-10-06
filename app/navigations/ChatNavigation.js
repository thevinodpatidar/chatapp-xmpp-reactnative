import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";

import ProfileScreen from '../modules/Profile/ProfileScreen';
import ChatScreen from '../modules/Chat/ChatScreen';

const Tab = createBottomTabNavigator();

function ChatNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5ce27f',
        inactiveTintColor: '#b1b1b1',
        style: {
          borderRadius: 0,
          backgroundColor : '#ffffff',
          borderTopColor : '#ffffff'
        },
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default ChatNavigation;