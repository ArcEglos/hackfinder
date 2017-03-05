import React, {PropTypes} from 'react'
import {StyleSheet, View} from 'react-native'

export default function Overlay ({children, style}) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 200, 200, 0.5)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 200, 200, 0.6)',
    marginRight: 20,
    marginLeft: 20,
    padding: 12,
    flex: 1
  }
})
