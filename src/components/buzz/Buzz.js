import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native'

export default function Buzz ({buzz}) {
  return (
    <View style={styles.container}>
       <TouchableHighlight style={ styles.imageContainer }>
            <Image style={ styles.image } source={{ uri: 'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg' }} />
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
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    marginBottom: 8
  },
  text: {
    color: '#fff',
    fontWeight: '300'
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: '#f00',
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
