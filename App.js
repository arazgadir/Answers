import React from 'react';
import { SafeAreView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './App/modules/navigation/RootNavigation';

export const App = () => {
  return (
    <SafeAreView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreView>

  );
};