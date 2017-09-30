import React from 'react';
import { Platform, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/app/login/login';

const App = StackNavigator({
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

AppRegistry.registerComponent('App', () => App);

export default App;