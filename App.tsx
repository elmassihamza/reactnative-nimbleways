/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './src/themes/default';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/login';
import Home from './src/screens/home';
import {ContextProvider} from './src/contexts/dataContext';
import Entry from './src/screens';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar barStyle="dark-content" />
        <ContextProvider>
          <NavigationContainer>
            <Entry />
          </NavigationContainer>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
