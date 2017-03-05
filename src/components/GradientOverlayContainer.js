import React, {Component, PropTypes} from 'react'
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import GradientContainer from './GradientContainer'
import Overlay from './Overlay'

export default function GradientOverlayContainer ({children}) {
  return (
    <GradientContainer>
      <Overlay style={styles.overlay}>
        {children}
      </Overlay>
    </GradientContainer>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})
