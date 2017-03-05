import React, {Component, PropTypes} from 'react'
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Styles from './Styles'

export default function GradientContainer ({children}) {
  return (
    <LinearGradient colors={['#ea4d00', '#b80000']} style={[Styles.statusBarContainer, styles.container]}>
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ea4d00',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
