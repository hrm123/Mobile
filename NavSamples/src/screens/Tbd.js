import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Todos from './containers/todosContainers'
export default class Tbd extends React.Component {
  render() {
    return (
      <View>
        <Todos />
      </View>
    )
  }
}
