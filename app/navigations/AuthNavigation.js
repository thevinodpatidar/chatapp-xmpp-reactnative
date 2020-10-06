import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../modules/Auth/screens/LoginScreen';
import SignupScreen from '../modules/Auth/screens/SignupScreen';

const AuthStack = createStackNavigator();

function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown : false}}>
      <AuthStack.Screen name="Home" component={LoginScreen} />
      <AuthStack.Screen name="Details" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;