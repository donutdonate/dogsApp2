import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './TabNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
