import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Table.styles';
import {Seat} from '../Seat/Seat'
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

const Table = ({table}) => (
  <Image
    style={styles.background}
    source={{uri: 'https://www.cardschat.com/resources/oddsCalc/img/field.png'}}>
      {/*<View style={{position: 'absolute', left: 450}}>*/}
        {/*<Seat*/}
          {/*displayName={table.name}*/}
          {/*imgUrl="http://www.wybieg.pl/pics/u/5025_img1_40ef4f3c9dbb7f99f1b849e2d91db3c9.jpg"*/}
        {/*/>*/}
      {/*</View>*/}
      {
        table.players.map((player, key) => (
          <View
            style={[styles.seat, styles['seat'+(key+1)]]}
            key={player.id}
          >
            <Seat
              displayName={player.profile.nickname}
              reversed={!(key % 2)}
              imgUrl={player.profile.imgUrl}
            />
          </View>
        ))
      }
  </Image>
);

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
    }
  `,
);