import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import Table from '../../components/Table/Table'
import PokButton from '../../components/Button/Button'
import styles from './table-screen.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {environment} from '../../adapters/relay-environment'
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

class TableScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  _onLayout(event) {
    this.containerWidth = event.nativeEvent.layout.width;
  }

  render() {

    const {navigate} = this.props.navigation;
    const {table} = this.props;
    return (
      <Image
        style={[styles.background, {width: this.containerWidth}]}
        source={require('../../../assets/carpet.jpg')}>
        <View style={styles.tableScreen}>
          <View style={styles.tableTop}>
            <Icon
              name="chevron-left"
              size={25}
              style={{color: 'white'}}
              onPress={() => navigate('Tables')}
            />
          </View>
          <Table table={table} width={this.containerWidth}/>
          <View style={styles.buttons}>
            <PokButton title="Fold" type="danger" onPress={f => f}/>
            <PokButton title="Call" type="primary" onPress={f => f}/>
            <PokButton title="Bet" type="success" onPress={f => f}/>
          </View>
        </View>
      </Image>
    );
  }
}

const TableFragmentContainer = createFragmentContainer(
  TableScreen,
  graphql`
    fragment tableScreen_table on Table {
      ...Table_table
    }
  `,
);

const TablesFragmentQueryRenderer = ({navigation}) => {
  return (
    <QueryRenderer
      environment={environment}
      variables={{ID: navigation.state.params.id}}
      query={graphql`
      query tableScreenQuery($ID: String) {
        store{
          table(id: $ID){
            ...tableScreen_table
          }
        }
      }
    `}
      render={({error, props}) => {
        if (props) {
          return <TableFragmentContainer
            navigation={navigation}
            table={props.store.table}
          />;
        } else {
          return (
            <Text>Loading</Text>
          )
        }
      }}
    />
  )
};

export default TablesFragmentQueryRenderer;