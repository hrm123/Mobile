import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Props {

}

interface State {

}

export default class TodosTS extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    React Native with typescript 101!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    } as TextStyle
})

AppRegistry.registerComponent('TodosTS', () => TodosTS)