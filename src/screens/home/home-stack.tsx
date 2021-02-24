import Login from '../login';
import Home from './index';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={'Login'}
    screenOptions={{
      cardStyle: {backgroundColor: '#fff'},
      headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
    }}>
    <Stack.Screen name="home" component={Home} />
  </Stack.Navigator>
);

export default HomeStack;
