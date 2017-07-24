/**
 * Created by Ramm on 7/23/2017.
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { MainNavigation } from '../screens/navigation';

/*
// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = MainNavigation.router.getActionForPathAndParams('App');
const tempNavState = MainNavigation.router.getStateForAction(firstAction);
const secondAction = MainNavigation.router.getActionForPathAndParams('Login');
const initialNavState = MainNavigation.router.getStateForAction(
    secondAction,
    tempNavState
);
*/

const initialNavState=MainNavigation.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'App',
        }),
    ],
}))

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = MainNavigation.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = MainNavigation.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = MainNavigation.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    nav,
    auth,
});

export default AppReducer;