import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';

//create react component

class Weekdays extends Component {
  render(){
    return(
      <View style={styles.container}><Text>Hello World!</Text></View>
    );

  }
};

//styles for component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//show new component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});