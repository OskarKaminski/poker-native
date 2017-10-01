import React from 'react';
import {View, Button} from 'react-native'
import PropTypes from 'prop-types';
import styles from './Button.styles'

const PokButton = ({onPress, title, type}) => (
  <View style={[styles.maxWidth, styles[type || 'primary']]}>
    <Button
      onPress={onPress}
      color='white'
      title={title}
    />
  </View>
)
PokButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['success', 'primary', 'danger'])
}

export default PokButton;