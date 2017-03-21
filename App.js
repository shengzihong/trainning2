import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import AppView from './views/appView';
import NumberPad from './views/numberPad';
import Loading from './views/loading';
import CodeInput from './views/codeInput';
import Login from './views/login';


const trainning2 = TabNavigator({
  AppView:   { screen: AppView   },
  NumberPad: { screen: NumberPad },
  Loading:   { screen: Loading   },
  CodeInput: { screen: CodeInput },
  Login:     { screen: Login     },
});

AppRegistry.registerComponent('trainning2', () => trainning2);