'use strict;'
import {React} from 'react-native';
let { AppRegistry, Component, Text} = React;

class Todos extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            todos:[
                {
                    task: 'Learn reacct Native'
                }
            ]

        };
    }

    render(){
        return {
            <Text> Hello world! </Text>
        };
    }

}

Appregistry.registerComponent('main', () => Todos);