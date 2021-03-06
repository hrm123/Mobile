import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Root from "./containers/root";
import Todos from "./containers/todos";

import { Provider, connect  } from 'react-redux'
import configureStore from './configureStore'; 
import Signup from './components/signup';
import Login from './containers/loginContainer';
const TodosActions =  require("./actions/todosActions");
// creates our Redux store (elsewhere)
const store = configureStore();
const RouterWithRedux = connect()(Router);

/*
// setup Firebase listeners
setTimeout(function(){
	store.dispatch( TodosActions.startListeningToAuth() );
});
*/



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
                <RouterWithRedux showNavigationBar={false}> 
                    
                    <Scene key="root">
                        <Scene key='signup' component={Signup} title='signup' hideNavBar={true}/>
                        <Scene key='login' component={Login} title='login' hideNavBar={true}/>
                        <Scene key='todos' component={Todos} title='todos' hideNavBar={true}/>
                        <Scene key='landing' component={Root} title='My Todos' initial hideNavBar={true}/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;