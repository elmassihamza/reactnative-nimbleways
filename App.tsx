/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import assets from './src/assets';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './src/themes/default';
import Layout from './src/components/Layout';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [value, setValue] = useState('ddsdfsfdsfdfsdfd');
  const handleChange = (val) => {
    if (value.length < 10) {
      setTimeout(() => {
        setValue(val);
      }, 1000);
    }
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Layout>
            <assets.Logo />
          </Layout>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
