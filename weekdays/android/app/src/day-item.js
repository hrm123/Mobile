import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';

//create react component

class DayItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Text style={styles.day}>{this.props.DayName}</Text>
        );

    }
};

//styles for component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: 'blue'
  }
});

//show new component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});

//make available elsewhere
export default DayItem;