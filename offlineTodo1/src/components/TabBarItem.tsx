import * as React from 'react';
import * as TodosTsTypes from '../types/todoTypes';
import {ViewStyle, Text, TouchableHighlight, StyleSheet } from 'react-native';

const TabBarItem : React.StatelessComponent<TodosTsTypes.TabBarItemModel> = 
    (props: TodosTsTypes.TabBarItemModel) => {
    return <TouchableHighlight
        underlayColor='#efefef'
        onPress={props.setType}
        style={[
        styles.item, props.selected ? styles.selected : null,
        props.border ? styles.border : null,
        props.todoType === props.title ? styles.selected : null ]}
    >
        <Text style={[ styles.itemText, props.todoType === props.title ? styles.bold : null ]}>
            {props.title}
        </Text>
    </TouchableHighlight>
        
    }


const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }as ViewStyle,
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    }as ViewStyle,
    itemText: {
        color: '#777777',
        fontSize: 16
    }as ViewStyle,
    selected: {
        backgroundColor: '#ffffff'
    }as ViewStyle,
    bold: {
        fontWeight: 'bold'
    }as ViewStyle
});

export default TabBarItem;