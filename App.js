import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/app/login-screen/login-screen';
import TablesScreen from './src/app/tables-screen/tables-screen';
import TableScreen from './src/app/table-screen/table-screen';

const App = StackNavigator({
    Login: { screen: LoginScreen },
    Tables: { screen: TablesScreen },
    Table: { screen: TableScreen }
  },
  {
    initialRouteName: 'Tables',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

AppRegistry.registerComponent('App', () => App);

export default App;