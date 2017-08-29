import {
    DrawerNavigator,
    StackNavigator,
    TabNavigator,
    TabBarTop,
    TabBarBottom,
    NavigationActions,
      addNavigationHelpers
  } from 'react-navigation'

const BottomTabs = TabNavigator({
    FirstTab: {
      screen: FirstTab
    },
    SecondTab: {
      screen: SecondTab,
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
  });
