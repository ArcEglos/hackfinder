import React, {PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Buzz ({buzz}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Hier spricht Martin:</Text>
      <Text style={styles.text}>{buzz.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 4,
    padding: 12
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
  }
})
