import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Root from "./containers/root";
import { Provider, connect  } from 'react-redux'
import configureStore from './configureStore'; 
// creates our Redux store (elsewhere)
const store = configureStore();
const RouterWithRedux = connect()(Router);

class App extends Component{
    constructor(props){
        super(props);
        /*
        this.state = {
            inputValue: "",
            todos: [],
            type: 'All'
        }
        */
    }
    
    render(){
        return(
            <Provider store={ store }>
                <RouterWithRedux> 
                    <Scene key='landing' component={Root} title='todos'/>
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;