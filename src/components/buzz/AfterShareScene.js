import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {AppInviteDialog} from 'react-native-fbsdk'
import LinearGradient from 'react-native-linear-gradient'
import {Button} from 'react-native-elements'

import Styles from '../Styles'
import Overlay from '../Overlay'
import Points from '../Points'

export default class AfterShareScene extends Component {
  render () {
    return (
      <LinearGradient colors={['#ea4d00', '#b80000']} style={[Styles.statusBarContainer, styles.container]}>
        <Overlay style={styles.overlay}>
          <Text style={styles.text}>Du erhälst</Text>
          <Points amount={200} textStyle={styles.text} />
          <Text style={styles.text}>für deine Stimme</Text>
          <Button
            backgroundColor='#fff'
            color='#ea4d00'
            borderRadius={30}
            title='MEGA'
            onPress={() => this.props.pushScene('buzz')}
          />
        </Overlay>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ea4d00',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 22,
    padding: 8,
    backgroundColor: 'transparent'
  }
})
