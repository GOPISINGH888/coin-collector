import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import New from '../Screens/New';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       headerMode='none'
       initialRouteName='New'
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;