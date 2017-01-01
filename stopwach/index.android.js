import  ReactNative from "react-native";
import React,{Component} from "react";
const { Text, View, AppRegistry} = ReactNative;

class StopWatch extends Component{
   constructor(props){
        super(props);

  }
  render(){
    return (<View><Text>00:00:00</Text>
        {this.startStopButton()}
        {this.lapButton()} 
     </View> );
  }


  startStopButton = () => {
    return ( <View>
         <Text>Start
        </Text></View>
    );
  }

  lapButton = () => {
    return ( <View><Text>Lap
        </Text></View>
        );
  }
  
};

AppRegistry.registerComponent('stopwach', () => StopWatch);