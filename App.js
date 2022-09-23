import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './App/modules/navigation/RootNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

  );
};