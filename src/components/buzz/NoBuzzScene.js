import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'

import {fetchBuzzes} from '../../actions/buzz'
import Styles from '../Styles'

class NoBuzzScene extends Component {
  render () {
    let {width} = Dimensions.get('window')
    let imgStyle = {
      width: width * 0.8,
      height: width * 0.8,
      borderRadius: width * 0.4
    }

    return (
      <LinearGradient colors={['#ea4d00', '#b80000']} style={[Styles.statusBarContainer, styles.container]}>
        <Image
          source={require('../images/martin.png')}
          style={imgStyle}
        />
        <Text style={styles.text}>Nächster Buzz kommt bald!</Text>
        <Text style={styles.text}>Pro Freund 50 Punkte</Text>
        <Button
          icon={{
            type: 'material-community',
            name: 'facebook',
            color: '#ea4d00'
          }}
          borderRadius={30}
          backgroundColor='#fff'
          color='#ea4d00'
          title='facebook'
          onPress={() => this.props.pushScene('invite')}
        />
      </LinearGradient>
    )
  }
}

export default NoBuzzScene

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ea4d00',
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 8,
    backgroundColor: 'transparent'
  }
})
