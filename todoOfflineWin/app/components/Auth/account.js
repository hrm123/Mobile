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
import ButtonWidget from '../buttonWidget';

import Signup from '../signup';
import Login from '../login';
import {app} from  './firebaseApp'

import styles from '../../styles/common-styles.js';

export default class Account extends Component {

  constructor(props){

    super(props);
    this.state = {
      loaded: false,
    }

  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      this.setState({
        user: user_data,
        loaded: true
      });
    });

  }

  render(){

    return (
      <View style={styles.container}> 
        <View style={styles.body}>
        {
          this.state.user &&
            <View style={styles.body}>
              <View style={page_styles.email_container}>
                <Text style={page_styles.email_text}>{this.state.user.password.email}</Text>
              </View>
              <Image
                style={styles.image}
                source={{uri: this.state.user.password.profileImageURL}}
              />
              <Button
                  text="Logout"
                  onpress={this.logout.bind(this)}
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }

  logout(){

    AsyncStorage.removeItem('user_data').then(() => {    
      app.unauth();
      this.props.navigator.push({
        component: Login
      });
    });

  }

}

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});