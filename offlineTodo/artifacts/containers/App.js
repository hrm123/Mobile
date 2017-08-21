import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import Todos from './todos'
import * as TodoContainer from './todos';
import { Provider, connect } from 'react-redux';
import configureStore from '../configureStore';
// creates our Redux store (elsewhere)
const store = configureStore();
const RouterWithRedux = connect()(Router);
class App extends Component {
    constructor(props) {
        super(props);
        this.isLoaded = this.isLoaded.bind(this);
        this.state = {
            isLoading: true,
            store: configureStore(this.isLoaded)
        };
    }
    isLoaded() {
        this.setState({ isLoading: false });
    }
    render() {
        if (this.state.isLoading)
            return null;
        return (React.createElement(Provider, { store: store },
            React.createElement(RouterWithRedux, null,
                React.createElement(Scene, { key: 'root' },
                    React.createElement(Scene, { key: 'todos', component: TodoContainer.TodosAppConnected, title: 'todos', hideNavBar: true, initial: true })))));
    }
}
export default App;
//# sourceMappingURL=App.js.map