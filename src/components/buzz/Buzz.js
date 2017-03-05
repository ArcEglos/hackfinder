import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native'

export default function Buzz ({buzz}) {
  return (
    <View style={styles.container}>
       <TouchableHighlight style={ styles.imageContainer }>
            <Image style={ styles.image } source={require('./martin_pb.png')} />
       </TouchableHighlight>
      <Text style={styles.headline}>Hier spricht Martin:</Text>
      <Text style={styles.text}>{buzz.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#d00',
    backgroundColor:'#f00',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 3,
    padding: 12,
    flex: 1,
    marginTop: 80
  },
  headline: {
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    marginBottom: 8
  },
  text: {
    fontFamily: 'OpenSans-Light',
    color: '#fff',
    fontWeight: '300'
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: -65,
    right: -1,
    position: 'absolute',
    zIndex: 999
  },
  image: {
    height:126,
    width: 126,
    borderRadius: 64
  },
})
