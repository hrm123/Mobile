import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import Footer from './footer';
import Login from '../components/login';
import firebase from 'firebase';
import { connect } from 'react-redux';
import styles from '../styles/common-styles.js';
const TodosActions =  require("../actions/todosActions");

class LoginContainer extends Component{
    render = () => { 
        return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
            <Login onLogin={this.onUserLogin}/>
            </View>
            <Footer isLoginAllowed={false} isSignupAllowed={true}/>
        </View>
        );
    };


    onUserLogin = (account) => {
        Actions.todos();
        //debugger;
        //this.props.onLogin(account);
        //Actions.todos({text: 'Hello World!'}); 
    };

}

/*
const styles = StyleSheet.create({
    header: {
        marginTop: 80
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175,47,47,0.25)',
        fontWeight: '100'
    }
});
*/


const mapStateToProps = (state) => {
  return {
    acct: state.acct
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onLogin: (account) => {
            dispatch(TodosActions.Login(account));
        },
        onLogout:  (account) =>{
            dispatch(TodosActions.Logout(account));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);