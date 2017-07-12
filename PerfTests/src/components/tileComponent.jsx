import { View, Text } from 'react-native';
import React, { PropTypes } from 'react';
import styles from '../styles/tileStyles';

const TileComponent = ({ tileTitle, isContainer }) => (
  <View style={isContainer ? styles.tileContainer : styles.tile}>
    <Text>{tileTitle}</Text>
  </View>
    );

TileComponent.defaultProps = {
  isContainer: false,
  tileTile: 'tile1',
};

TileComponent.propTypes = {
  tileTitle: PropTypes.string.isRequired,
  isContainer: PropTypes.bool,
};
export default TileComponent;
