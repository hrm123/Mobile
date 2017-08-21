import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';
const TabBar = props => {
    const tabBarItem1Data = { todoType: props.type, title: 'All', setType: () => props.setType('All') };
    const tabBarItem2Data = { todoType: props.type, title: 'Active', setType: () => props.setType('Active') };
    const tabBarItem3Data = { todoType: props.type, title: 'Complete', setType: () => props.setType('Complete') };
    return React.createElement(View, { style: styles.container },
        React.createElement(TabBarItem, Object.assign({}, tabBarItem1Data)),
        React.createElement(TabBarItem, Object.assign({}, tabBarItem2Data)),
        React.createElement(TabBarItem, Object.assign({}, tabBarItem3Data)));
};
const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
});
export default TabBar;
//# sourceMappingURL=TabBar.js.map