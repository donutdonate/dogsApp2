import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Favourites from '../screens/Favourites';
import BreedStack from './BreedStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.TAB_ACTIBE,
        tabBarInactiveTintColor: colors.TAB_INACTIVE,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={BreedStack} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
}
