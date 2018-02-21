import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GetStarted from './screens/GetStarted/GetStarted';

export default StackNavigator({
  getStarted: GetStarted
});
