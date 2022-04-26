import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import BreedDetail from './screens/BreedDetail'
import BreedsList from './screens/BreedsList'
import Favourites from './screens/Favourites'

const Stack = createStackNavigator();
function MyStack() {
return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BreedsList" component={BreedsList}/>
    <Stack.Screen name="BreedDetail" component={BreedDetail}/>
  </Stack.Navigator>
)
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Home' component={MyStack}/>
    <Tab.Screen name='Favourites' component={Favourites}/>
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
