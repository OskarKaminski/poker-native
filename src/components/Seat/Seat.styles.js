import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  seat: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  displayName: {
    borderWidth: 1,
    width: 100,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 60
  },
  cards: {
    flexDirection: 'row'
  },
  seatInfo: {
    alignItems: 'center'
  }
});
