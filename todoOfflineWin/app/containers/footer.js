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
const TodosActions =  require("../actions/todosActions");

class Footer extends Component {

    renderIf = (condition, content) => {
        if (condition) {
            return content;
        } else {
            return null;
        }
    };

    componentWillMount = () => {
        this.authListener();
    };

    componentWillUnmount = () => {
        debugger;
        //this.authListener();
        this.fireBaseListener && this.fireBaseListener();
        this.authListener = undefined;
    };

    authListener = () => {
        debugger;
        var that = this;
        this.fireBaseListener = firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    that.onUserLogIn(user);
                    console.log(user);
                } else {
                    that.onLogoutUpdateFromServer();
                }
            });
    };

    render = () => {
        var {loggedIn} = this.props.acct;
        var {isLoginAllowed, isSignupAllowed} = this.props;
        return(
        <View style={styles.footer}>
            {this.renderIf(!loggedIn && isSignupAllowed, 
            <View >  
                <Text style={styles.headerText} onPress={Actions.signup}>
                    Sign up
                </Text>
            </View>
            )}
            {this.renderIf(!loggedIn && isLoginAllowed,
            <View >  
                <Text style={styles.headerText} onPress={Actions.login}>
                    Login
                </Text>
            </View>
            )}
            {this.renderIf(loggedIn, 
            <View >
                <Text style={styles.headerText} onPress={Actions.todos}>
                    My Todos
                </Text>
            </View>
            )}
            {this.renderIf(loggedIn,
            <View >
                <Text style={styles.headerText} onPress={this.logOutUser}>
                    Sign out
                </Text>
            </View>
                )}
        </View>);
    };

    onUserLogIn = (user) => {
        this.props.onLogin( {userName: user.email, loggedIn : true, loaded : false });
    };

    logOutUser = (acct) => {
        firebase.auth().signOut()
    };

    onLogoutUpdateFromServer = () => {
        // redux action  to update state to loggedout
        this.props.onLogout( {userName: '', loggedIn : false, loaded : false });
    }

    onUserLogOut = (user) => {
        this.props.onLogout( {userName: '', loggedIn : false, loaded : false });
        Actions.landing();
    };
};

const mapStateToProps = (state) => {
  return {
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
)(Footer);
