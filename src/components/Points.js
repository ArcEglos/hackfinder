import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

export default function Points ({amount, textStyle, style}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[textStyle, styles.text]}>{amount}</Text>
      <Icon type='font-awesome' name='trophy' iconStyle={textStyle} style={styles.trophy} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8
  },
  trophy: {
    marginLeft: 10

  },
  text: {
    paddingRight: 5
  }
})
