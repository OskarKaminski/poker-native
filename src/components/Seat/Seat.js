import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Seat.styles';
import {Card} from '../card/Card'

export const Seat = (props) => (
  <View style={styles.seat}>
    <Image style={styles.avatar} source={{uri: props.imgUrl}}/>
    <View style={styles.seatInfo}>
      <View style={styles.cards}>
        <Card value="A"/>
        <Card value="K"/>
      </View>
      <View style={styles.displayName}>
        <Text>
          {props.displayName}
        </Text>
      </View>
    </View>
  </View>
)

Seat.propTypes = {
  displayName: PropTypes.string,
  imgUrl: PropTypes.string
}