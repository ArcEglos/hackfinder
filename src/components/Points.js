import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

export default function Points ({amount, textStyle}) {
  return (
    <View style={styles.container}>
      <Text style={textStyle}>200</Text>
      <Icon type='font-awesome' name='trophy' iconStyle={textStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
