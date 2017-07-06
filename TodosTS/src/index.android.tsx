import React, { Component } from 'react'
import App from './containers/App'
import { AppRegistry } from 'react-native'

interface Props {

}

interface State {

}

export default class TodosTS extends Component<Props, State> {
    render() {
        return (
            <App />
        )
    }
}

AppRegistry.registerComponent('TodosTS', () => TodosTS)