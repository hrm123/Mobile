import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';
import DayItem from './android/app/src/day-item';
const DaysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//create react component

class Weekdays extends Component {
  render(){
    return(
      <View style={styles.container}>
        {DaysOfWeek.map( (dn) => {
          return <DayItem DayName={dn}></DayItem>;
        })}
        
      </View>
    );

  }
};

//styles for component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical alignment when 'column' flex dirn - flex-end => move to bottom; flex-start => move it to top
    alignItems: 'center', //horizontal alignment when 'column' flex dirn - flex-end => move to right; flex-start => move it to left
    flexDirection: 'column', // if it is 'row' then justifyContent and alignitems meaning changes
  }
});

//show new component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});