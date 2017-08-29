import {
  StackNavigator, TabBarBottom, TabNavigator,
  addNavigationHelpers
  } from 'react-navigation'
  import React from 'react'
  import {  connect  } from 'react-redux'
  import FirstTab from './Containers/MainTab'
  import SecondTab from './Containers/DeleteTab'
  import ThirdTab from './Containers/DoneTab'

  const defaultTabs = {
    labelStyle: {
      fontFamily: 'nemoy-medium',
      fontSize: 16
    },
    indicatorStyle: {
      borderColor: 'lightgray',
      borderWidth: 2
    },
    style: {
      backgroundColor: 'black'
    },
    tabStyle: {
      padding: 0
    }
  }

const BottomTabs = TabNavigator({
    FirstTab: {
      screen: FirstTab
    },
    SecondTab: {
      screen: SecondTab
    },
    ThirdTab: {
      screen: ThirdTab
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      ...defaultTabs
    }
  })

const MainNavigation = StackNavigator({
  App: {
    screen: BottomTabs
    }}, {
      initialRouteName: 'App',
      mode: 'card',
      headerMode: 'none'
    })


const AppWithNavigationState = ({ dispatch, nav }) => {
    let navHlprs = addNavigationHelpers({ dispatch, state: nav });
    return (
        <MainNavigation navigation={navHlprs} screenProps={ {'uuid': nav.uuid} }/>
    )
}

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState);