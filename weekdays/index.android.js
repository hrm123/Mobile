import React, {Component} from 'react';
import {View, Text, AppRegistry} from 'react-native';

//create react component

class Weekdays extends Component {
  render(){
    return(
      <View><Text>Hello World!</Text></View>
    );

  }
};



//show new component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});