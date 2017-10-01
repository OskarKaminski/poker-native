import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Seat.styles';
import {Card} from '../card/Card'

const seatInfo = (displayName) => (
  <View style={styles.seatInfo}>
    <View style={styles.cards}>
      <Card value="A"/>
      <Card value="K"/>
    </View>
    <View style={styles.displayName}>
      <Text>
        {displayName}
      </Text>
    </View>
  </View>
)

export const Seat = ({displayName, imgUrl, reversed}) => (
      reversed ?
        <View style={styles.seat}>
          <Image style={styles.avatar} source={{uri: imgUrl}}/>
          {seatInfo(displayName)}
        </View>
        :
        <View style={styles.seat}>
          {seatInfo(displayName)}
          <Image style={styles.avatar} source={{uri: imgUrl}}/>
        </View>
)

Seat.propTypes = {
  displayName: PropTypes.string,
  imgUrl: PropTypes.string,
  reversed: PropTypes.bool
}