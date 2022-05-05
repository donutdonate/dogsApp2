import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import BreedDetail from '../screens/BreedDetail';
import BreedsList from '../screens/BreedsList';

const Stack = createStackNavigator();
export default function BreedStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BreedsList" component={BreedsList} />
      <Stack.Screen name="BreedDetail" component={BreedDetail} />
    </Stack.Navigator>
  );
}
