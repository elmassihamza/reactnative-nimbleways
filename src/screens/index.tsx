import React, {useContext} from 'react';
import {DataContext} from '../contexts/dataContext';
import HomeStack from './home/home-stack';
import LoginStack from './login/login-stack';

const Entry = () => {
  const {isConnected} = useContext(DataContext)!;
  return (
    <>
      {isConnected && <HomeStack />}
      {!isConnected && <LoginStack />}
    </>
  );
};
export default Entry;
