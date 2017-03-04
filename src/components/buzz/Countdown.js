import React, {PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Countdown ({to}) {
  let diff = Math.max(to - Date.now())
  let hours = Math.floor(diff / 3600000)
  diff -= hours * 3600000
  let minutes = Math.floor(diff / 60000)
  diff -= minutes * 60000
  let seconds = Math.round(diff / 1000)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hours}:{minutes}:{seconds}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300'
  }
})
