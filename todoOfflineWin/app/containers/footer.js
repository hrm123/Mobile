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

class Footer extends Component {

    renderIf = (condition, content) => {
        if (condition) {
            return content;
        } else {
            return null;
        }
    };

    ComponentWillMount = () => {
        this.authListener();
    }

    ComponentWillUnmount = () => {
        debugger;
        //this.authListener();
        this.fireBaseListener && this.fireBaseListener();
        this.authListener = undefined;
    }

    authListener = () => {
        debugger;
        this.fireBaseListener = firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    debugger;
                    this.userLoggedIn(user);
                    console.log(user);
                } else {
                    debugger;
                    console.error("No user signed in");
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
                <Text style={styles.headerText} onPress={Actions.logout}>
                    Sign out
                </Text>
            </View>
                )}
        </View>);
    };
}

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
