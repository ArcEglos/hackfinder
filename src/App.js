import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Provider} from 'react-redux'
import Config from 'react-native-config'
import Frisbee from 'frisbee'

import {createApp} from './common'
import MainScene from './components/MainScene'

export default class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      app: createApp({
        api: new Frisbee({
          baseURI: Config.API_URI,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      })
    }
  }

  render () {
    return (
      <Provider store={this.state.app.store}>
        <MainScene />
      </Provider>
    )
  }
}
