import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {AppInviteDialog} from 'react-native-fbsdk'
import LinearGradient from 'react-native-linear-gradient'
import {Button, Icon} from 'react-native-elements'

import GradientOverlayContainer from '../GradientOverlayContainer'
import Points from '../Points'
import DefaultButton from '../DefaultButton'

class PriceScene extends Component {
  redeem (key) {
    this.props.pushScene('price', {key})
  }

  render () {
    let {price} = this.props

    return (
      <GradientOverlayContainer>
        <Text style={styles.text}>{JSON.stringify(price)}</Text>
        <DefaultButton
          title={`${price.title} - ${price.points}`}
          onPress={() => this.redeem(key)}
          style={styles.button}
        />
      </GradientOverlayContainer>
    )
  }
}

export default connect(
  state => {
    console.log(state.prices)
    return {price: state.prices.items.find(p => p.key === state.prices.selected)}
  }
)(PriceScene)

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 36
  },
  text: {
    color: '#fff',
    fontSize: 22,
    padding: 8,
    backgroundColor: 'transparent'
  },
  button: {
    marginBottom: 8
  }
})
