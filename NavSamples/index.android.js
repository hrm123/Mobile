/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Loading from './src/screens/components/loading'
// import MainNav from './src/screens/navigation'
import MainNavWithState from './src/screens/navigation'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk"
var EnvironmentDetails = require("./environment");

var configureStore = function( onComplete){
    let store1  = createStore(AppReducer,{}, applyMiddleware(thunk, createLogger()));
    onComplete();
    return store1;
};

export default class NavSamples extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
        // this.onComplete = this.onComplete.bind(this);
    };

    onComplete = () => {
        this.setState({isLoading: false});
    };

    componentDidMount() {
        this.store = configureStore(this.onComplete);
    }
    render() {
        if(this.state.isLoading) {
          return <Loading />
        };

        return (
          <View style={{flex: 1}}>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            {Platform.OS === 'android' && <View style={{ height: StatusBar.currentHeight, backgroundColor: 'rgba(0,0,0,0.2)' }} />}
            <Provider store={this.store}>
              <MainNavWithState />
            </Provider>
          </View>
        );
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavSamples', () => NavSamples);
