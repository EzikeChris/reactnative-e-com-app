import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import SecuredStack from './SecuredStack';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const auth = useSelector(state => state.auth.auth) ?? false;
  return (
    <NavigationContainer>
      {auth ? <SecuredStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
