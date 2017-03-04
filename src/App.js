import React, {Component, PropTypes} from 'react'
import {AsyncStorage, StyleSheet, Text, View} from 'react-native'
import {Provider} from 'react-redux'
import Config from 'react-native-config'
import Frisbee from 'frisbee'

import {createApp} from './common'
import MainScene from './components/MainScene'

// AsyncStorage.removeItem('state')
export default class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {app: null}
  }

  componentDidMount () {
    AsyncStorage.getItem('state').then(data => {
      let state = data ? JSON.parse(data) : {}
      this.setState({
        app: createApp({
          state,
          api: new Frisbee({
            baseURI: Config.API_URI,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
        })
      })
    })
  }

  render () {
    let {app} = this.state

    if (!app) {
      return <View />
    }

    return (
      <Provider store={app.store}>
        <MainScene />
      </Provider>
    )
  }
}
