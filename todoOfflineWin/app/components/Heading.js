import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText} onPress={Actions.signup}>
            Sign up
        </Text>
        <Text style={styles.headerText} onPress={Actions.login}>
            Login
        </Text>
    </View>
);

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

export default Heading;