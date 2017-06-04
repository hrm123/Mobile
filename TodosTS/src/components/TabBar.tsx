import * as React from 'react';
import { ViewStyle, View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';
import * as TodosTsTypes from '../types/todoTypes';


const TabBar : React.StatelessComponent<TodosTsTypes.TabBarModel> = props => {
    const tabBarItem1Data: TodosTsTypes.TabBarItemModel  = {todoType: props.type, title:'All', setType: () => props.setType('All')}
    const tabBarItem2Data: TodosTsTypes.TabBarItemModel = {todoType: props.type, title: 'Active', setType: () => props.setType('Active') }
    const tabBarItem3Data: TodosTsTypes.TabBarItemModel = {todoType: props.type, title: 'Complete', setType: () => props.setType('Complete') }
    return <View style={styles.container}>
        <TabBarItem {...tabBarItem1Data} />
        <TabBarItem {...tabBarItem2Data} />
        <TabBarItem  {...tabBarItem3Data} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    } as ViewStyle
});

export default TabBar;