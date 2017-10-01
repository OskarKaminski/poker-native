import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    justifyContent: 'space-between',
    borderWidth: 2,
    margin: 5,
    transform: [{skewX: '-5deg'}]
  },
  displayedData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10
  },
  stakesText: {
    fontSize: 16
  },
  tableName: {
    fontSize: 20,
    fontWeight: '900',
    maxWidth: 150
  }
});