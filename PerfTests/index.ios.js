/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import styles from './src/styles/tileStyles';

const PerfTests = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
    <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
    <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
  </View>
    );

export default PerfTests;

AppRegistry.registerComponent('PerfTests', () => PerfTests);
