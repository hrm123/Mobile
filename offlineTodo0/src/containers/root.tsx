import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {styles} from '../styles/common-styles.js';

export interface IRootProps{

}

class Root extends Component<IRootProps, any> {

     renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

    
    public render(){ 

        return (
        <View style={styles.container}>
            <View style={styles.body}>
            </View>
        </View>
        );
    }
}

export default Root;