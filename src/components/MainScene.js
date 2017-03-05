import React, {Component, PropTypes} from 'react'
import {Navigator, StatusBar, StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'

import BuzzScene from './buzz/BuzzScene'
import NoBuzzScene from './buzz/NoBuzzScene'
import AfterShareScene from './buzz/AfterShareScene'
import RedeemScene from './buzz/RedeemScene'
import PriceScene from './buzz/PriceScene'
import InviteScene from './invite/InviteScene'
import LoginScene from './login/LoginScene'
import Styles from './Styles'

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

class MainScene extends Component {

  constructor (props, context) {
    super(props, context)

    this.renderScene = this.renderScene.bind(this)
    this.statusBarDefaults = {
      barStyle: 'default',
      backgroundColor: '#b80000'
    }
    this.scenes = {
      buzz: {component: BuzzScene},
      nobuzz: {component: NoBuzzScene},
      aftershare: {component: AfterShareScene},
      redeem: {component: RedeemScene},
      price: {component: PriceScene},
      invite: {component: InviteScene},
      login: {component: LoginScene}
    }
  }

  renderScene (route, navigator) {
    const pushScene = (key, params = {}) => {
      navigator.push(Object.assign({}, this.scenes[key], {params}))
    }
    const replaceScene = (key, params = {}) => {
      navigator.replace(Object.assign({}, this.scenes[key], {params}))
    }
    const popScene = () => {
      navigator.pop()
    }

    return (
      <View style={Styles.fullContainer}>
        {route.statusBar ?  <MyStatusBar backgroundColor="#b80000" barStyle="light-content" />: undefined}
        <route.component
          pushScene={pushScene}
          replaceScene={replaceScene}
          popScene={popScene}
          params={route.params || {}}
        />
      </View>
    )
  }

  render () {
    let {account} = this.props

    return (
      <View style={Styles.fullContainer}>
        <MyStatusBar backgroundColor="#b80000" barStyle="light-content" />
        <Navigator
          ref='navigator'
          initialRoute={account ? this.scenes.buzz : this.scenes.login}
          renderScene={this.renderScene}
        />
      </View>
    )
  }
}

export default connect(
  state => ({
    account: state.auth.account
  })
)(MainScene)
