import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './router';

export default (App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Routes />
  </NavigationContainer>
));
