import React from 'react'
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Seat.styles';
import {Card} from '../card/Card'
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

const seatInfo = (displayName, cards) => (
  <View style={styles.seatInfo}>
    <View style={styles.cards}>
      {
        !!cards[0] &&
        <Card value={cards[0].value}/>
      }
      {
        !!cards[1] &&
        <Card value={cards[1].value}/>
      }
    </View>
    <View style={styles.displayName}>
      <Text>
        {displayName}
      </Text>
    </View>
  </View>
)

const Seat = ({player, reversed}) => {
  const {nickname, imgUrl} = player.profile;
  const {cards} = player;
  return (
    reversed ?
      <View style={styles.seat}>
        <Image style={styles.avatar} source={{uri: imgUrl}}/>
        {seatInfo(nickname, cards)}
      </View>
      :
      <View style={styles.seat}>
        {seatInfo(nickname, cards)}
        <Image style={styles.avatar} source={{uri: imgUrl}}/>
      </View>
  )
}

// Seat.propTypes = {
//   displayName: PropTypes.string,
//   imgUrl: PropTypes.string,
//   reversed: PropTypes.bool
// }

export default createFragmentContainer(
  Seat,
  graphql`
    fragment Seat_player on Player {
      id
      chips
      profile{
        id
        nickname
        imgUrl
      }
      cards{
        color
        value
      }
    }
  `,
);