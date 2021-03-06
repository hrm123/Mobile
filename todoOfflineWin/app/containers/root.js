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
import {app} from  '../components/Auth/firebaseApp'
import styles from '../styles/common-styles.js';

class Root extends Component{

     renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

    
    render = () => { 

        var user = app.auth().currentUser;
        
        return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
            </View>
            <Footer isLoginAllowed={true} isSignupAllowed={true}/>
        </View>
        );
    }
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
export default Root;