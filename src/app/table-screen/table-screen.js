import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import Table from '../../components/Table/Table'
import PokButton from '../../components/Button/Button'
import styles from './table-screen.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TableScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Image
        style={styles.background}
        source={{uri: 'http://urbanetrunkk.com/wp-content/themes/redcarpet/images/red-velvet-texture-background-hd.jpg'}}>
        <View style={styles.tableScreen}>
          <View style={styles.tableTop}>
            <Icon
              name="chevron-left"
              size={25}
              style={{color: 'white'}}
              onPress={() => navigate('Tables')}
            />
          </View>
          <Table/>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <PokButton title="Fold" type="danger" onPress={f => f}/>
            <PokButton title="Call" type="primary" onPress={f => f}/>
            <PokButton title="Bet" type="success" onPress={f => f}/>
          </View>
        </View>
      </Image>
    );
  }
}
