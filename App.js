import 'react-native-gesture-handler';
import * as React from 'react';
// import { Provider } from "react-redux";
// import store from "./store";
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './app/navigations/AppNavigation';
// import AuthNavigation from './app/navigations/AuthNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}