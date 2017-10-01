import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import styles from './TablesListItem.style'

export const TablesListItem = (props) => (
    <TouchableHighlight
      style={styles.item}
      onPress={props.onPress}
      underlayColor="black"
    >
      <View style={styles.displayedData}>
        <Text style={styles.tableName}>
          {props.name.toUpperCase()}
          </Text>
        <View style={styles.stake}>
          <Text style={styles.stakesText}>
            Stakes
          </Text>
          <Text style={styles.stakesText}>
            {'$'+props.stake+'/$'+props.stake*2}
            </Text>
          </View>
      </View>
    </TouchableHighlight>
)

TablesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  stake: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
}