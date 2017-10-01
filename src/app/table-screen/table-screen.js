import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Button} from 'react-native';
import Table from '../../components/Table/Table'
import styles from './table-screen.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TableScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.tableScreen}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 5, marginTop: 5}}>
          <Icon
            name="chevron-left"
            size={25}
            onPress={() => navigate('Tables')}
          />
        </View>
        <Table/>
        <View><Button title="Fold" onPress={f => f}/></View>
      </View>
    );
  }
}
