import React from 'react'
import {
  Platform,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  TabBarTop,
  TabBarBottom,
  NavigationActions,
    addNavigationHelpers
} from 'react-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import styles from '../styles/navStyles'

import Login from './Login'
import SignupStart from './SignupStart'
import SignupFinish from './SignupFinish'
import ChatsPage from './ChatsPage'
import Chat from './Chat'
import Profile from './Profile'
import EventsPage from './EventsPage'
import EventDetails from './EventDetails'
import EventMessages from './EventMessages'
import EventOther from './EventOther'
import EventsFilter from './EventsFilter'
import Tbd from './Tbd'
import FirstTab from './FirstTab'
import SecondTab from './SecondTab'
import ThirdTab from './ThirdTab'
import MyProfile from './MyProfile'

const defaultTabs = {
  labelStyle: {
    fontFamily: 'nemoy-medium',
    fontSize: 16
  },
  indicatorStyle: {
    borderColor: 'lightgray',
    borderWidth: 2,
  },
  style: {
    backgroundColor: 'black'
  },
  tabStyle: {
    padding: 0,
  }
};

const defaultHeader = {
  headerStyle: {
    backgroundColor: 'black',
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'nemoy-medium',
    fontSize: 20,
    marginLeft: Platform.OS === 'ios' ? -10 : 10
  },
  headerTintColor: 'white',
  headerBackTitle: null
};

const EventsWithFilterStack = StackNavigator({
  EventsPage: {
    screen: EventsPage,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('EventsFilter')} >
            <Ionicons name='md-switch' size={28} color={'white'}/>
        </TouchableOpacity>
      )
    })
  },
  EventsFilter: {
    screen: EventsFilter,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='md-close' size={28} color={'white'}/>
        </TouchableOpacity>
      )
    })
  }
},{
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: 'EventsPage',
  navigationOptions: {
    ...defaultHeader
  }
});

const HomeTabs = TabNavigator({
  ChatsTab: {
    screen: ChatsPage,
    navigationOptions: {
      tabBarLabel: 'Chats',
    }
  },
  EventsTab: {
    screen: EventsWithFilterStack,
    navigationOptions: {
      tabBarLabel: 'Events'
    }
  },
},
{
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  tabBarOptions: {
    ...defaultTabs
  }
});

const EventTabs = TabNavigator({
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      tabBarLabel: 'Details'
    }
  },
  EventMessages: {
    screen: EventMessages,
    navigationOptions: {
      tabBarLabel: 'Messages'
    }
  },
  EventOther: {
    screen: EventOther,
    navigationOptions: {
      tabBarLabel: 'Other'
    }
  }
},
{
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  tabBarOptions: {
    ...defaultTabs
  }
});

const HomeStackSummary = StackNavigator({
  SummaryStack: {
    screen: HomeTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'YAA',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
          <FontAwesome name='navicon' size={28} color={'white'} />
        </TouchableOpacity>
      )
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.person.firstName}`
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.person.firstName} ${navigation.state.params.person.lastName}`
    })
  },
  EventTabs: {
    screen: EventTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.event.title}`
    })
  }
},{
  headerMode: 'screen',
  initialRouteName: 'SummaryStack',
  navigationOptions: {
    ...defaultHeader
  }
});

const TbdStack = StackNavigator({
  Tbd: {
    screen: Tbd,
    navigationOptions: ({ navigation }) => ({
      title: 'TBD',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
          <FontAwesome name='navicon' size={28} color={'white'} />
        </TouchableOpacity>
      )
    })
  }
},{
  headerMode: 'screen',
  navigationOptions: {
    ...defaultHeader
  }
});

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

const BottomTabsStack = StackNavigator({
  BottomTabsLanding: {
    screen: BottomTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'BOTTOM TABS',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
          <FontAwesome name='navicon' size={28} color={'white'} />
        </TouchableOpacity>
      )
    })
  }
},{
  headerMode: 'screen',
  navigationOptions: {
    ...defaultHeader
  }
});

const MyProfileStack = StackNavigator({
  MyProfile: {
    screen: MyProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'My Profile',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
          <Ionicons name='md-menu' size={28} color={'white'} style={{paddingLeft: 12}}/>
        </TouchableOpacity>
      )
    })
  }
},{
  headerMode: 'screen',
  navigationOptions: {
    ...defaultHeader
  }
});

const SignupStack = StackNavigator({
  SignupStart: {
    screen: SignupStart,
    navigationOptions: ({ navigation }) => ({
      title: 'Getting started',
      ...defaultHeader,
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            let resetAction = NavigationActions.reset({
              index: 0,
              actions: [ NavigationActions.navigate({ routeName: 'Login' }) ],
              key: null
            });
            navigation.dispatch(resetAction)
          }} >
          <Ionicons name='ios-arrow-back' size={28} color={'white'} style={{paddingHorizontal: 15}} />
        </TouchableOpacity>
      )
    })
  },
  SignupFinish: {
    screen: SignupFinish,
    navigationOptions: {
      title: 'Welcome!',
      ...defaultHeader
    }
  }
},{
  mode: 'card',
  headerMode: 'screen',
  transitionConfig: () => ({ screenInterpolator: () => null })
});

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: HomeStackSummary,
  },
  Tbd: {
    screen: TbdStack,
  },
  BottomTabs: {
    screen: BottomTabsStack,
  },
  MyProfile: {
    screen: MyProfileStack,
  }
},
{
  initialRouteName: 'Home',
  contentComponent: ({navigation}) =>
    <View style={styles.drawer}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
            <FontAwesome name='bank' size={28} color={'white'} />
        </View>

        <ScrollView>
          <TouchableOpacity
             onPress={() => (navigation.state.index === 0 && navigation.state.routes[0].routes[0].index === 0) ?
               navigation.navigate('DrawerClose') : navigation.dispatch(
                 NavigationActions.navigate({
                   routeName: 'Home',
                   params: {},
                   action: NavigationActions.navigate({ routeName: 'ChatsTab' })
                 })
               ) }
              style={[styles.drawerItem, (navigation.state.index === 0 && navigation.state.routes[0].routes[0].index === 0) ? {backgroundColor: 'black'} : null]}>
            <Text style={styles.drawerText}>Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => (navigation.state.index === 0 && navigation.state.routes[0].routes[0].index === 1) ?
              navigation.navigate('DrawerClose') : navigation.dispatch(
                NavigationActions.navigate({
                  routeName: 'Home',
                  params: {},
                  action: NavigationActions.navigate({ routeName: 'EventsTab' })
                })
              ) }
            style={[styles.drawerItem, (navigation.state.index === 0 && navigation.state.routes[0].routes[0].index === 1) ? {backgroundColor: 'black'} : null]}>
            <Text style={styles.drawerText}>Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.state.index === 1 ? navigation.navigate('DrawerClose') : navigation.navigate('Tbd')}
            style={[styles.drawerItem, navigation.state.index === 1 ? {backgroundColor: 'black'} : null]}>
            <Text style={styles.drawerText}>TBD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.state.index === 2 ? navigation.navigate('DrawerClose') : navigation.navigate('BottomTabs')}
            style={[styles.drawerItem, navigation.state.index === 2 ? {backgroundColor: 'black'} : null]}>
            <Text style={styles.drawerText}>Bottom Tabs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.state.index === 3 ? navigation.navigate('DrawerClose') : navigation.navigate('MyProfile')}
            style={[styles.drawerItem, navigation.state.index === 3 ? {backgroundColor: 'black'} : null]}>
            <Text style={styles.drawerText}>My Profile</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Login'})
            ],
            key: null
          });
          navigation.dispatch(resetAction)
        }}>
        <Text style={styles.drawerText}>Logout</Text>
        <Ionicons
          name='md-exit'
          size={22}
          color='white'
        />
      </TouchableOpacity>

    </View>
});

export const MainNavigation = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: SignupStack,
    navigationOptions: {
      header: null
    }
  },
  App: {
    screen: DrawerNavigation
  }
},{
  initialRouteName: 'Login',
  mode: 'card',
  headerMode: 'none',
});

const AppWithNavigationState = ({ dispatch, nav }) => {
  let navHlprs = addNavigationHelpers({ dispatch, state: nav });
    return (
    <MainNavigation navigation={navHlprs} screenProps={ {'uuid': nav.uuid} }/>
    );
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);