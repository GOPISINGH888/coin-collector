import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Buy from '../Screens/Buy';
import Payment from '../Screens/Payment';
import Cards from '../Screens/Cards';
import Paypal from '../Screens/Paypal';
import Test from '../Screens/Test';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Payment">
      <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Paypal" component={Paypal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
