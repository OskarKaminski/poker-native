import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';
import styles from './styles';
import {TablesListItem} from '../../components/TablesListItem/TablesListItem'
import {environment} from '../../adapters/relay-environment'
import JoinTableMutation from '../../mutations/JoinTableMutation'
import Viewer from '../../adapters/Viewer';

class TablesScreen extends React.Component {
  _onLayout(event) {
    this.containerWidth = event.nativeEvent.layout.width;
  }

  joinTable = (tableId) => {
    JoinTableMutation(Viewer.graphID, tableId);
    const {navigate} = this.props.navigation;
    navigate('Table', {id: tableId})
  }

  render() {
    const {tables} = this.props.store;
    return (
      <Image
        style={[styles.background, {width: this.containerWidth}]}
        source={require('../../../assets/chips.jpg')}>
        <View style={styles.container}>
          {
            tables.map((table, key) => (
              <TablesListItem
                name={table.name}
                onPress={() => this.joinTable(table.id)}
                stake={+table.stake}
                key={table.id}
              />
            ))
          }
        </View>
      </Image>
    );
  }
}

const TablesFragmentContainer = createFragmentContainer(
  TablesScreen,
  graphql`
    fragment tablesScreen_store on Store {
      tables{
        id
        name
        stake
      }
    }
  `,
);

const TablesFragmentQueryRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query tablesScreenQuery {
        store{
          ...tablesScreen_store
        }
      }
    `}
      render={({error, props}) => {
        if (props) {
          return <TablesFragmentContainer
            navigation={navigation}
            store={props.store}
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