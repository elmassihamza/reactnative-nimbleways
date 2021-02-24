import Login from '../login';
import Home from './index';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from '../../components';
import assets from '../../assets';
import {TouchableOpacity} from 'react-native';

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
      headerTitleStyle: {
        alignSelf: 'center',
      },
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 20}}>
          <assets.Home />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 20}}>
          <assets.Home />
        </TouchableOpacity>
      ),
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Home2" component={Home} />
  </Stack.Navigator>
);

export default HomeStack;
