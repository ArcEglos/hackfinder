import {StyleSheet, Dimensions, Platform} from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  statusBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    backgroundColor: '#b80000'
  },
  fullContainer:{
flex:1
      },


})
