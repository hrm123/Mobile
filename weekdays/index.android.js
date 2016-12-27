import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';
import DayItem from './android/app/src/day-item';
import Moment from 'moment';

const DaysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//create react component

class Weekdays extends Component {
  render(){
    return(
      <View style={styles.container}>
        {this.days()}
      </View>
    );

  }

  days(){
      var daysItems = [];
      for(i=0;i<7;i++){
        var day = Moment().add(i,'days').format('dddd');
        daysItems.push(<DayItem key={day} DayName={day} DaysUntil={i}></DayItem>);
      }
      return daysItems;
      /*
      DaysOfWeek.map( 
        (dn) => {
          return <DayItem key={dn} DayName={dn}></DayItem>;
        }
        )
        */
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