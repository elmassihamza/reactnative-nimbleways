import Login from '../login';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator
    initialRouteName={'Login'}
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default LoginStack;
