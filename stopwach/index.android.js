import  ReactNative from "react-native";
import React,{Component} from "react";
import formatTime from 'minutes-seconds-milliseconds';
const { Text, View, AppRegistry, StyleSheet, TouchableHighlight} = ReactNative;

class StopWatch extends Component{
   constructor(props){
        super(props);
        this.state =  {timeElapsed :null, running :false, startTme: null, laps : []};
        //this.onInputChange = this.onInputChange.bind(this); // needed so that this will be SearchBar Component in the call back
        

  }

  render(){
    return (<View style={Styles.container}>
              <View style={[Styles.header, this.border('yellow')]}> 
                <View style={[this.border('red'), Styles.timer]}>
                  <Text style={Styles.timerContent}>{formatTime(this.state.timeElapsed)}</Text>
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
                 {this.laps()}
              </View>
            </View>
        );
  }

  laps = () => {
      return this.state.laps.map((l,indx) => {
          return ( <View key={indx} style={Styles.lap}>
            <Text style={Styles.lapText}>Lap number : { indx + 1 }</Text>
            <Text style={Styles.lapText}>Lap time : { formatTime(l)  }</Text>
          </View> );
      });
  }

  startStopButton = () => {
    var styl = this.state.running ? Styles.stopbutton: Styles.startbutton;
    return ( <TouchableHighlight style={[Styles.button, styl]}
              underlayColor="gray" 
              onPress={() => {
                  if(this.state.running){
                    clearInterval(this.timerHandle);
                    this.setState({running: false});
                    return;
                  }

                  this.setState({startTime : new Date()});
                  this.timerHandle = setInterval( () => {
                    this.setState({timeElapsed : new Date() - this.state.startTime, running: true});
                  }, 30);
               } }>
            <Text>{this.state.running?'Stop':'Start'}
          </Text>
        </TouchableHighlight>
    );
  }

  lapButton = () => {
    return ( <TouchableHighlight style={Styles.button}
              underlayColor="gray"
              onPress={() => {
                  const lap = this.state.timeElapsed;
                  this.setState({laps: this.state.laps.concat([lap])});
                  this.setState({startTime: new Date()});
              } }><Text>Lap
        </Text></TouchableHighlight>
        );
  }

  border = (color) => {
    return {

    }
    /*
      return {
        borderColor : color,
        borderWidth : 4
      }
      */

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
      flex: 0.6,
      alignItems: 'center',
      justifyContent: 'center'
  },
  controls: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  },
  timerContent :{
      fontSize: 60
  },
  button:{
      borderWidth:2,
      borderRadius:50,
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems:'center' 

  },
  startbutton:{
    borderColor: 'green'
  },
  stopbutton:{
    borderColor: 'red'
  } ,
  lap : {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  lapText :{
    fontSize: 15
  }
});

AppRegistry.registerComponent('stopwach', () => StopWatch);