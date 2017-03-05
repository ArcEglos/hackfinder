import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {AppInviteDialog} from 'react-native-fbsdk'
import LinearGradient from 'react-native-linear-gradient'
import {Button, Icon} from 'react-native-elements'

import {selectPrice} from '../../actions/prices'
import GradientOverlayContainer from '../GradientOverlayContainer'
import Points from '../Points'
import DefaultButton from '../DefaultButton'

class RedeemScene extends Component {
  redeem (key) {
    this.props.selectPrice(key)
    this.props.pushScene('price', {key})
  }

  render () {
    let {prices} = this.props
    let pointsAvailable = 500

    return (
      <GradientOverlayContainer>
        <Icon type='font-awesome' name='trophy' iconStyle={styles.icon} />
        <Text style={styles.text}>{pointsAvailable}</Text>
        <Text style={styles.text}>Punkte einlösen</Text>
        {prices.map(({points, title, key}) =>
          <DefaultButton
            title={`${title} - ${points}`}
            onPress={() => this.redeem(key)}
            style={styles.button}
            disabled={points > pointsAvailable}
          />
        )}
      </GradientOverlayContainer>
    )
  }
}

export default connect(
  state => ({
    prices: state.prices.items
  }),
  {selectPrice}
)(RedeemScene)

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
