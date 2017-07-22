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
import Loading from './src/screens/components/loading'
import MainNav from './src/screens/navigation'

export default class NavSamples extends Component {
  state = {
    isLoading: false
  }

  render() {
    if(this.state.isLoading) {
      return <Loading />
    }
    return (
      <View style={{flex: 1}}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={{ height: Constants.statusBarHeight, backgroundColor: 'rgba(0,0,0,0.2)' }} />}
        <MainNav />
      </View>
    )
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

AppRegistry.registerComponent('NavSamples', () => NavSamples);
