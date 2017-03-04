import React, {Component, PropTypes} from 'react'
import {Navigator, StatusBar, StyleSheet, View} from 'react-native'

import BuzzScene from './buzz/BuzzScene'
import LoginScene from './login/LoginScene'
import Styles from './Styles'

export default class MainScene extends Component {

  constructor (props, context) {
    super(props, context)

    this.renderScene = this.renderScene.bind(this)
    this.statusBarDefaults = {
      barStyle: 'default'
    }
    this.scenes = {
      buzz: {component: BuzzScene},
      login: {component: LoginScene}
    }
  }

  renderScene (route, navigator) {
    const pushScene = (key, params = {}) => {
      let scene
      if (route.scenes) {
        scene = route.scenes[key]
      }
      if (!scene) {
        scene = this.scenes[key]
      }
      navigator.push(Object.assign({}, scene, {params}))
    }
    const replaceScene = (key, params = {}) => {
      let scene
      if (route.scenes) {
        scene = route.scenes[key]
      }
      if (!scene) {
        scene = this.scenes[key]
      }
      navigator.replace(Object.assign({}, scene, {params}))
    }
    const popScene = () => {
      navigator.pop()
    }

    return (
      <View style={Styles.fullContainer}>
        {route.statusBar ? <StatusBar {...route.statusBar} /> : undefined}
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
    return (
      <View style={Styles.fullContainer}>
        <StatusBar {...this.statusBarDefaults} />
        <Navigator
          ref='navigator'
          initialRoute={this.scenes.login}
          renderScene={this.renderScene}
        />
      </View>
    )
  }
}
