'use strict';
import  {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import {app} from  './Auth/firebaseApp'
import GiftedSpinner from 'react-native-gifted-spinner';

class Header extends Component {

  render(){
    return (
      <View style={styles.header}>
        <View style={styles.header_item}>
          <Text style={styles.header_text}>{this.props.text}</Text>
        </View>
        <View style={styles.header_item}>
        {  !this.props.loaded &&
            <GiftedSpinner />
        }
        </View>
      </View>
    );
  }

  ComponentDidUnmount(){
    /*
    app.auth().signOut().then(function() {
      debugger;
      // Sign-out successful.
    }).catch(function(error) {
      debugger;
      // An error happened.
    });
    */
  }


};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1
  },
  header_item: {
    paddingLeft: 10,
    paddingRight: 10
  },
  header_text: {
    color: '#000',
    fontSize: 18
  }
});

export default Header;
//AppRegistry.registerComponent('header', () => header);