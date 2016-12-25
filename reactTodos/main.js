'use strict;'
import {React} from 'react-native';
let { AppRegistry, Component, Text} = React;
import TaskList from './TaskList';

class Todos extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            todos:[
                {
                    task: 'Learn React Native'
                }
            ]

        };
    }

    render(){
        return {
            <TaskList/>
        };
    }

}

Appregistry.registerComponent('main', () => Todos);