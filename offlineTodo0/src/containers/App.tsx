import React, { Component } from 'react'
// import { Router, Scene } from 'react-native-router-flux'
// import Todos from './todos'
import * as TodoContainer from './TaskFilter'
import { Provider, connect  } from 'react-redux'
import configureStore from '../configureStore'

// creates our Redux store (elsewhere)
const store = configureStore()
// const RouterWithRedux = connect()(Router)

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
        if (this.state.isLoading) return undefined

        return(
            <Provider store={ store }>
            </Provider>
        )
    }
}

export default App