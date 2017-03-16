import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/header';
import login from '../components/login';
import { Actions } from 'react-native-router-flux';

class LoginContainer extends Component{
    render(){ 
        return (
        <View>
            <Header />
            <login onLogin={this.onUserLogin}/>
        </View>
        );
    }


    onUserLogin = (account) => {
        debugger;
        this.props.onLogin(account);
        Actions.todos({text: 'Hello World!'}); 
    }

}

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



const mapStateToProps = (state) => {
  return {
    todos: state.todos
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