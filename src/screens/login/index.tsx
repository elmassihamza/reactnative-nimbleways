import React, {useContext} from 'react';
import assets from '../../assets';
import {Button, Layout, TextInput} from '../../components';
import {DataContext} from '../../contexts/dataContext';

const Login = ({navigation}) => {
  const {setIsConnected} = useContext(DataContext)!;
  return (
    <Layout>
      <assets.Logo />
      <TextInput placeholder="Email" />
      <TextInput placeholder="passowrd" />
      <Button
        title="Se connecter"
        onPress={() => {
          setIsConnected(true);
        }}
      />
    </Layout>
  );
};

export default Login;
