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
import CloseButton from '../CloseButton'

class RedeemScene extends Component {
  redeem (key) {
    this.props.selectPrice(key)
    this.props.pushScene('price', {key})
  }

  render () {
    let {prices, account} = this.props

    return (
      <GradientOverlayContainer>
        <CloseButton onPress={this.props.popScene} />
        <Icon type='font-awesome' name='trophy' iconStyle={styles.icon} />
        <Text style={styles.text}>{account.points}</Text>
        <Text style={styles.text}>Punkte einlösen</Text>
        {prices.map(({points, title, key}) =>
          <DefaultButton
            key={key}
            title={`${title} - ${points}`}
            onPress={() => this.redeem(key)}
            style={styles.button}
            disabled={points > account.points}
          />
        )}
      </GradientOverlayContainer>
    )
  }
}

export default connect(
  state => ({
    prices: state.prices.items,
    account: state.auth.account,
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
