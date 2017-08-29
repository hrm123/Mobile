'use strict'
import React, {
  StyleSheet, ViewStyle
} from 'react-native'

export const styles = StyleSheet.create<any>({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
        } as React.ViewStyle,
  body: {
    flex: 9,
    backgroundColor: '#F5FCFF'
  } as React.ViewStyle,
   footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between'
  } as React.ViewStyle,
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 2,
    backgroundColor: 'powderblue'
  } as React.ViewStyle,
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    } as ViewStyle,
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    } as ViewStyle
})