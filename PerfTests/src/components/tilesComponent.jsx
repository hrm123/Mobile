import { View, Text } from 'react-native';
import React, { PropTypes } from 'react';
import styles from '../styles/tileStyles';

const TilesComponent = ({ title, isActive }) => (
  <View style={isActive ? styles.tileContainer : styles.tile}>
    <Text>{title}</Text>
  </View>
    );

TilesComponent.defaultProps = {
  isActive: false,
  tileTile: 'tile1',
};

TilesComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
export default TilesComponent;