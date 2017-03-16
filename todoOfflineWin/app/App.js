import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Root from "./containers/root";
import Todos from "./containers/todos";

import { Provider, connect  } from 'react-redux'
import configureStore from './configureStore'; 
import SignUp from './components/signup';
import Login from './components/login';

// creates our Redux store (elsewhere)
const store = configureStore();
const RouterWithRedux = connect()(Router);

class App extends Component{
    constructor(props){
        super(props);
        this.isLoaded = this.isLoaded.bind(this);
       this.state = {
            isLoading: true,
            store: configureStore({}, this.isLoaded),
        };
    }

    isLoaded(){
        this.setState({ isLoading: false });
    }

    render(){
        if (this.state.isLoading) return null;

        return(
            <Provider store={ store }>
                <RouterWithRedux> 
                    
                    <Scene key="root">
                        <Scene key='signup' component={SignUp} title='signup'/>
                        <Scene key='login' component={Login} title='login'/>
                        <Scene key='todos' component={Todos} title='todos'/>
                        <Scene key='landing' component={Root} title='My Todos' initial/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;