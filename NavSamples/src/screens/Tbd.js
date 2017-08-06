import React from 'react'
import {
  Text,
  View
} from 'react-native'
import TodosAppConnected from './containers/todosContainers'
// import configureStore from '../reducers/configureStore'
import styles from '../styles/todosStyles'
// const store = configureStore()

export default class Tbd extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <TodosAppConnected />
      </View>
    )
  }
}
