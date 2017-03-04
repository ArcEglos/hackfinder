import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import {AccessToken, LoginManager} from 'react-native-fbsdk'
import {connect} from 'react-redux'

import {startServerAuth} from '../../actions/auth'
import Styles from '../Styles'

class LoginScene extends Component {
  constructor (props) {
    super(props)
    this.onLogin = this.onLogin.bind(this)
  }

  componentDidMount () {
    // this.serverAuth()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.account && !this.props.account) {
      this.props.replaceScene('buzz')
    }
  }

  onLogin () {
    LoginManager
    .logInWithReadPermissions(['public_profile'])
    .then(res => {
      if (res.isCancelled) {
        console.error('cancelled')
      } else {
        this.serverAuth()
      }
    }, err => {
      console.error(err)
    })
  }


  serverAuth () {
    AccessToken
    .getCurrentAccessToken()
    .then(
      data => {
        console.log(data)
        this.props.startServerAuth(data.userID, data.accessToken)
      },
      console.error
    )
  }

  render () {
    return (
      <LinearGradient colors={['#ea4d00', '#b80000']} style={[Styles.statusBarContainer, styles.container]}>
        <View style={styles.centerContainer}>
          <Text style={styles.logo}>BuZz</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={this.onLogin}>
            <View style={styles.fbButton}>
              <Icon type='material-community' name='facebook' color='#ea4d00' />
              <Text style={styles.fbButtonLabel}>Mit facebook anmelden</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}

export default connect(
  state => ({
    account: state.auth.account
  }),
  {startServerAuth}
)(LoginScene)

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

  logo: {
    fontSize: 72,
    color: '#fff',
    backgroundColor: 'transparent'
  },

  fbButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  fbButtonLabel: {
    color: '#ea4d00'
  }
})
