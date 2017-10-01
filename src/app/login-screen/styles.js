import { StyleSheet } from 'react-native';
import constants from '../../styles/constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    resizeMode: 'cover',
    flex: 1
  },
  buttonWrapper: {
    width: 100,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1
  }
});
