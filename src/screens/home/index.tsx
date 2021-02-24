import React from 'react';
import {Button, Layout} from '../../components';
import {Text} from 'react-native';

const Home = ({navigation}) => (
  <Layout>
    <Text>This is Home page</Text>
    <Button
      onPress={() => {
        navigation.navigate('Home2');
      }}
      title="navigate"
    />
  </Layout>
);

export default Home;
