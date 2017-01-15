import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import Heading from './Heading';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            todos: [],
            type: 'All'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <Heading />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "#f5f5f5"
    },
    content :{
        flex: 1,
        paddingTop: 60
    }
});

export default App;