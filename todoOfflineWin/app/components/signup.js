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

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBa2YaOyiL8ksvMcF10zCM4B1dwdwj0rE0",
    authDomain: "offlinetodos.firebaseapp.com",
    databaseURL: "https://offlinetodos.firebaseio.com",
    storageBucket: "offlinetodos.appspot.com",
    messagingSenderId: "617493806104"
  };
  let app = firebase.initializeApp(config);

const SignUp1 = ({ border, title, selected, setType, type }) => (
    <View>
        <header />
        <Text >
            signup
        </Text>
    </View>
);



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

    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {

      if(error){
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }

      }else{
        alert('Your account was created!');
      }

      this.setState({
        email: '',
        password: '',
        loaded: true
      });

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