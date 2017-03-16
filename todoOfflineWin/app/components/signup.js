'use strict';
import  {
  AppRegistry,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import ButtonWidget from '../components/buttonWidget';
import Header from '../components/header';

import Login from './login';
import {app} from  './Auth/firebaseApp'

/*
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBa2YaOyiL8ksvMcF10zCM4B1dwdwj0rE0",
    authDomain: "offlinetodos.firebaseapp.com",
    databaseURL: "https://offlinetodos.firebaseio.com",
    storageBucket: "offlinetodos.appspot.com",
    messagingSenderId: "617493806104"
  };
  let app = firebase.initializeApp(config);
*/

//let app = new Firebase("https://offlinetodos.firebaseio.com");

import styles from '../styles/common-styles.js';

class Signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  signup(){

    this.setState({
      loaded: false
    });
    debugger;

    app.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    this.setState({
        email: '',
        password: '',
        loaded: true
      });


  }

  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Signup" loaded={this.state.loaded} />
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
            text="Signup"
            onpress={this.signup.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <ButtonWidget
            text="Got an Account?"
            onpress={this.goToLogin.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }
}

//AppRegistry.registerComponent('signup', () => signup);

export default Signup;