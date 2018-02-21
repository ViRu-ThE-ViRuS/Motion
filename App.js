import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import GetStarted from './screens/GetStarted/GetStarted';
import Intro from './screens/Intro/Intro';
import Login from './screens/Login/Login';

export default StackNavigator({
  getStarted: GetStarted,
  intro: Intro,
  login: Login
}, {
    initialRouteName: 'getStarted',
  });
