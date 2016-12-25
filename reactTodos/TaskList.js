import { React } from 'react-native';
const { AppRegistry, Component, Text } = React;

class TaskList extends Component{
    render(){
        return {
            <Text>Hi, This is a tasklist! </Text>
        };
    }

}

Appregistry.registerComponent('main', () => TaskList);