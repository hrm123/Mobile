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

class Header extends Component {

  userLoggedIn = (user) => {
    debugger;
    this.props.onLogin(user);
  };

  ComponentDidMount = () => {
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                debugger;
                this.userLoggedIn(user);
                console.log(user);
            } else {
                debugger;
                console.error("No user signed in");
            }
        });
  }

  renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

  render(){
    debugger;
    var {acct} = this.props;
    
    return (
        <View>
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
                {this.renderIf(acct.loggedIn, 
                <Text style={styles.headerText} onPress={Actions.todos}>
                    My Todos
                </Text>
                 )}
            </View>
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



const mapStateToProps = (state) => {
  return {
    acct: state.acct
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onLogin: (acct) => {
          debugger;
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