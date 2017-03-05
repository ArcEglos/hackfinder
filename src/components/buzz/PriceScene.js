import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {AppInviteDialog} from 'react-native-fbsdk'
import LinearGradient from 'react-native-linear-gradient'
import {Button, Icon} from 'react-native-elements'

import {redeemPrice} from '../../actions/prices'
import GradientOverlayContainer from '../GradientOverlayContainer'
import Points from '../Points'
import DefaultButton from '../DefaultButton'
import CloseButton from '../CloseButton'

class PriceScene extends Component {
  constructor (props) {
    super(props)
    this.redeem = this.redeem.bind(this)
  }

  redeem () {
    this.props.redeemPrice(this.props.price)
    this.props.replaceScene('redeem')
  }

  render () {
    let {price} = this.props

    return (
      <GradientOverlayContainer>
        <CloseButton onPress={this.props.popScene} />
        <Icon type='font-awesome' name='trophy' iconStyle={styles.icon} />
        <View style={styles.curry}>
          <Image source={require('../images/martin_curry_klein.png')} width="250" resizeMode="contain" />
        </View>
        <Text style={styles.text}>Super fancy Gewinn</Text>
        <DefaultButton
          title={`${price.title} - ${price.points}`}
          onPress={this.redeem}
          style={styles.button}
        />
      </GradientOverlayContainer>
    )
  }
}

export default connect(
  state => ({
    price: state.prices.items.find(p => p.key === state.prices.selected)
  }),
  {redeemPrice}
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
  },
  curry: {
    padding:30
  }
})
