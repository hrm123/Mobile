import {View, Text } from 'react-native';
import React from 'react';

const Tile = ({tileTitle, isContainer}) => {
    return (
        <View>
            <Text>{tileTitle}</Text>
        </View>
    );
};

export default Tile;