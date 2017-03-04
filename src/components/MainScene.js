import React, {Component, PropTypes} from 'react'
import {Navigator, StatusBar, StyleSheet, View, Text} from 'react-native'

import BuzzScene from './buzz/BuzzScene'
import Countdown from './buzz/Countdown'

import Styles from './Styles'

export default class MainScene extends Component {

  constructor (props, context) {
    super(props, context)

    this.renderScene = this.renderScene.bind(this)
    this.statusBarDefaults = {
      barStyle: 'default'
    }
    this.scenes = {
      buzz: {component: BuzzScene}
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
    const popScene = () => {
      navigator.pop()
    }

    return (
      <View style={Styles.fullContainer}>

        {/*<View style={Styles.navBarContainer}>
                    <Text style={Styles.navBarButton}>Add</Text>
                    <Text style={Styles.navBarTitle}>This is the title</Text>
                    <Text style={Styles.navBarButton}>Like</Text>
        </View>*/}
        <View style={Styles.content}>
          {route.statusBar ? <StatusBar {...route.statusBar} /> : undefined}
          <route.component
            pushScene={pushScene}
            popScene={popScene}
            params={route.params || {}}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={Styles.fullContainer}>
        <StatusBar {...this.statusBarDefaults} />
        <Navigator
          ref='navigator'
          initialRoute={this.scenes.buzz}
          renderScene={this.renderScene}
        />
      </View>
    )
  }
}
