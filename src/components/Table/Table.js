import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './Table.styles';
import {Seat} from '../Seat/Seat'

const Table = () => (
  <Image
    style={styles.background}
    source={{uri: 'https://www.cardschat.com/resources/oddsCalc/img/field.png'}}>
    <View style={styles.seat}>
      <View style={{position: 'absolute', left: 450}}>
        <Seat
          displayName="Oskar"
          imgUrl="http://www.wybieg.pl/pics/u/5025_img1_40ef4f3c9dbb7f99f1b849e2d91db3c9.jpg"
        />
      </View>
      <Seat
        displayName="Johny"
        reversed={true}
        imgUrl="https://orig13.deviantart.net/014b/f/2011/107/9/b/johnny_bravo_by_theeyzmaster-d3e81im.jpg"
      />
    </View>
  </Image>
);

export default Table;