import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TablesListItem} from '../../components/TablesListItem/TablesListItem'

export default class TablesScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  state = {
    value: ''
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Image
        style={styles.background}
        source={{uri: 'https://www.excalibur.com/content/dam/MGM/excalibur/casino/poker/excalibur-casino-poker-chips.tif'}}>
        <View style={styles.container}>
          <TablesListItem
            name='Newbie Court'
            onPress={() => navigate('Table')}
            stake={100}
          />
          <TablesListItem
            name='Advanced ring'
            onPress={() => navigate('Table')}
            stake={500}
          />
        </View>
      </Image>
    );
  }
}
