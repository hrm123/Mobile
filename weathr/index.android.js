
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

export default class Weathr extends Component {
  render() {
    return (
      <MapView style={styles.map}>
        
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('weathr', () => Weathr);
