import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import {app} from  '../components/Auth/firebaseApp'

class Root extends Component{

     renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }
    render(){ 

        var user = app.auth().currentUser;
        debugger;
        if (user) {
        // User is signed in.
        } else {
        // No user is signed in.
        }
        return (
        <View>
            <Header />
            <View style={styles.header}>
                {this.renderIf(!user, 
                <View >  
                    <Text style={styles.headerText} onPress={Actions.signup}>
                        Sign up
                    </Text>
                    <Text style={styles.headerText} onPress={Actions.login}>
                        Login
                    </Text>
                </View>
                )}
                {this.renderIf(user, 
                <Text style={styles.headerText} onPress={Actions.todos}>
                    My Todos
                </Text>
                 )}
            </View>
        </View>
        );
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

export default Root;