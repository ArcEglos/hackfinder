import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, TouchableHighlight, Image, WebView, Dimensions} from 'react-native'


export default function Buzz ({buzz}) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
       <TouchableHighlight style={ styles.imageContainer }>
            <Image style={ styles.image } source={require('../images/martin_pb.png')} />
       </TouchableHighlight>
       <View style={styles.postContainer}>
       <Text style={styles.postStub}>In Berlin programmieren einige Verrückte beim Hackathon 24h lang für meinen Wahlkampf. Habe mit ihnen geskypet. Danke euch und viel Energie!</Text>
       <View style={styles.postImageContainer}>
       <Image source={require('../images/hackers.png')} resizeMode="contain" style={[styles.postImage, {width:windowWidth-26, height:(windowWidth-26)/2} ]}/>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#d00',
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 3,
    marginTop: 80,
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
  postContainer: {
    flexDirection: 'column',
    overflow: 'hidden'
  },
  postImageContainer: {
    overflow: 'hidden',
    backgroundColor: 'yellow'
  },
  postImage: {
    backgroundColor: 'pink'
  },
  postStub: {
    padding: 12,
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
    paddingRight: 130

  }
})
