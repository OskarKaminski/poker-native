import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Table.styles';
import Seat from '../Seat/Seat'
import {
  graphql,
  createFragmentContainer
} from 'react-relay';
import Viewer from '../../adapters/Viewer';

const Table = ({table, width}) => {
  return(
    <Image
      style={[styles.background, {width}]}
      source={require('../../../assets/table.png')}>
      {
        table.players.map((player, key) => {
          const seatPosition = player.profile.id === Viewer.graphID ?
            styles.seatViewer : styles['seat' + (key + 1)];
          return(
            <View
              style={[styles.seat, seatPosition]}
              key={player.id}
            >
              <Seat
                player={player}
                reversed={!(key % 2)}
              />
            </View>
          )
        })
      }
    </Image>
  );
}

// Table.propTypes = {
//   table: PropTypes.object
// }

export default createFragmentContainer(
  Table,
  graphql`
      fragment Table_table on Table {
          name
          players{
              id
              profile{
                  id
              }
              ...Seat_player
          }
      }
  `,
);