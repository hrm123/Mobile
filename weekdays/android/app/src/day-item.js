import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';

//create react component

class DayItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Text style={this.styles()}>{this.props.DayName}</Text>
        );

    }
    styles(){ // dynamic styles
        return({
            color: this.color(),
            //fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        });
    }

    color(){
        var opacity = 1/this.props.DaysUntil;
        return 'rgba(0,0,0, ' + opacity + ')';
    }

    fontWeight(){
        var weight = 7- this.props.DaysUntil;
        return weight*100; // font weight always needs to be multiple of 100
    }

    fontSize(){
        var size = 60 - this.props.DaysUntil*6;
        return size;
    }

    lineHeight(){
        var ht  = 70 - this.props.DaysUntil*4;
        return ht;
    }
};

/*
//styles for component - static
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: 'blue'
  }
});
*/

//show new component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});

//make available elsewhere
export default DayItem;