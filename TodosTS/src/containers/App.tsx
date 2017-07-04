import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Todos from './todos'

import { Provider, connect  } from 'react-redux'
import configureStore from '../configureStore'

// creates our Redux store (elsewhere)
const store = configureStore()
const RouterWithRedux = connect()(Router)

export interface IAppProps {

}

class App extends Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props)
        this.isLoaded = this.isLoaded.bind(this)
       this.state = {
            isLoading: true,
            store: configureStore(this.isLoaded)
        }
    }

    isLoaded() {
        this.setState({ isLoading: false })
    }

    render() {
        if (this.state.isLoading) return null

        return(
            <Provider store={ store }>
                <RouterWithRedux>
                    <Scene key='root'>
                        <Scene key='todos' component={Todos} title='todos' hideNavBar={true} initial/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}

export default App