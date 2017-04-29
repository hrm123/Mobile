/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJ5EDKB48_E3HzQd8t8qlgyqLpMrEpHTk",
    authDomain: "mytasks-2df8e.firebaseapp.com",
    databaseURL: "https://mytasks-2df8e.firebaseio.com",
    projectId: "mytasks-2df8e",
    storageBucket: "mytasks-2df8e.appspot.com",
    messagingSenderId: "294474878483"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

import App from './app/App';

const MyTasks = () => <App />

AppRegistry.registerComponent('MyTasks', () => MyTasks);

/*
export default class MyTasks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyTasks', () => MyTasks);
*/