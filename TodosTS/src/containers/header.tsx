'use strict';
import  {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import {app} from  '../components/Auth/firebaseApp'
import GiftedSpinner from 'react-native-gifted-spinner';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/common-styles.js';


class Header extends Component {

  userLoggedIn = (user) => {
    this.props.onLogin(user);
  };

  ComponentWillMount() {
    return;
    this.authListener();
  }

  ComponentWillUnmount = () => {
    return;
    this.authListener();
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
  }

  authListener = () => {
    this.fireBaseListener = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.userLoggedIn(user);
                console.log(user);
            } else {
                console.error("No user signed in");
            }
        });
  };

  renderIf = (condition, content) => {
        if (condition) {
            return content;
        } else {
            return null;
        }
    };

  render(){

    var {acct} = this.props;
    
    return (
        <View>
           <Text style={styles.button}>
                Test
                </Text>
            <View style={styles.header}>
                {this.renderIf(!acct.loggedIn, 
                <View >  
                    <Text style={styles.headerText} onPress={Actions.signup}>
                        Sign up
                    </Text>
                    <Text style={styles.headerText} onPress={Actions.login}>
                        Login
                    </Text>
                </View>
                )}
                <Text style={styles.headerText} onPress={Actions.todos}>
                    My Todos 123
                </Text>
                {this.renderIf(acct.loggedIn, 
                <Text style={styles.headerText} onPress={Actions.todos}>
                    My Todos 123
                </Text>
                 )}
            </View>
            <View style={styles.header_item}>
          <Text style={styles.header_text}>{this.props.text}</Text>
        </View>
        <View style={styles.header_item}>
          {this.renderIf(!this.props.acct.loaded, 
                <GiftedSpinner />
                 )}
        </View>
    </View>
     
    );
  }

  ComponentDidUnmount(){
    /*
    app.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    */
  }


};

const mapStateToProps = (state) => {
    debugger;
  return {
    userName: state.acct.userName,
    acct: state.acct,
    loaded: state.loaded
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onLogin: (acct) => {
            dispatch(TodosActions.Login(acct));
        },
        onLogout:  (acct) =>{
            dispatch(TodosActions.Logout(acct));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

//AppRegistry.registerComponent('header', () => header);