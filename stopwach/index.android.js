import  ReactNative from "react-native";
import React,{Component} from "react";
const { Text, View, AppRegistry, StyleSheet, TouchableHighlight} = ReactNative;

class StopWatch extends Component{
   constructor(props){
        super(props);

  }
  render(){
    return (<View style={Styles.container}>
              <View style={[Styles.header, this.border('yellow')]}> 
                <View style={[this.border('red'), Styles.timer]}>
                  <Text>00:00:00</Text>
                </View>
                <View style={[this.border('green'), Styles.controls]}>
                  <View>
                    {this.startStopButton()}
                  </View>
                  <View>
                    {this.lapButton()}
                  </View>
                </View>
              </View>
              <View style={[Styles.footer,this.border('blue')]}>
                <Text>List of laps</Text>
              </View>
            </View>
        );
  }


  startStopButton = () => {
    return ( <TouchableHighlight 
              underlayColor="gray" 
              onPress={() => { console.log(" Start pressed") } }>
            <Text>Start
          </Text>
        </TouchableHighlight>
    );
  }

  lapButton = () => {
    return ( <TouchableHighlight 
              underlayColor="gray"
              onPress={() => {console.log(" Lap   pressed")} }><Text>Lap
        </Text></TouchableHighlight>
        );
  }

  border = (color) => {
      return {
        borderColor : color,
        borderWidth : 4
      }

  }
  
};

//styles for component - static
const Styles = StyleSheet.create({
  container: {
    flex: 1, // fill entire screen
    alignItems: 'stretch'
  },
  header: { 
    flex: 1 // fill parent equally as other children

  },
  footer: { 
      flex: 1 // fill parent equally as other children

  },
  timer: {
      flex: 0.6
  },
  controls: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwach', () => StopWatch);