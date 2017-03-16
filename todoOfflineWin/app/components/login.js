'use strict';
import  {
  AppRegistry,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import React, { Component } from 'react';
import ButtonWidget from './buttonWidget';
import Header from './header';

import Signup from './signup';
import Account from './Auth/account';

import styles from '../styles/common-styles.js';
import {app} from  './Auth/firebaseApp'

export default class login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />

          <ButtonWidget
            text="Login"
            onpress={this.login.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <ButtonWidget
            text="New here?"
            onpress={this.goToSignup.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }

  login(){
    var that = this;
    this.setState({
      loaded: false
    });
    app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        that.setState({
            loaded: true
        });
        debugger;

        console.log('Login Failed. Please try again');
        return;
    });
    if(this.props.onLogin)
    {
      this.props.onLogin( {email: this.state.email, name: this.state.email} );
    }

  }

  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }

}

//AppRegistry.registerComponent('login', () => login);