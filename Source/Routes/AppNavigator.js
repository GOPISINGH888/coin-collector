import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Buy from '../Screens/Buy';
import Payment from '../Screens/Payment';
import Cards from '../Screens/Cards';
import Paypal from '../Screens/Paypal';
import DrawerNavigation from './DrawerNavigation';
import FrontPage from '../Screens/FrontPage';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import VerificationCode from '../Screens/VerificationCode';
import HomeScreen from '../Screens/HomeScreen';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Paypal" component={Paypal} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
