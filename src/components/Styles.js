import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  statusBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20
  },
  navBarContainer:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  navBarButton:{
      width: 50,
      color:'#b80000',
      textAlign:'center'
  },
  navBarTitle:{
      color:'#b80000',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
  },
  fullContainer:{
          flex:1
      },
  content:{
      backgroundColor:'#ebeef0',
      flex:1
  }

})
