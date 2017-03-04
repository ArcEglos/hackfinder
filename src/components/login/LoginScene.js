import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {AccessToken, LoginButton} from 'react-native-fbsdk'
import {connect} from 'react-redux'

import {startServerAuth} from '../../actions/auth'
import Styles from '../Styles'

class LoginScene extends Component {
  constructor (props) {
    super(props)
    this.onLoginFinished = this.onLoginFinished.bind(this)
  }

  componentDidMount () {
    this.serverAuth()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.account && !this.props.account) {
      this.props.replaceScene('buzz')
    }
  }

  onLoginFinished (err, res) {
    if (err) {
      console.error(err)
    } else if (res.isCancelled) {
      console.error('cancelled')
    } else {
      this.serverAuth()
    }
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
      <View style={[Styles.statusBarContainer, styles.container]}>
        <LoginButton onLoginFinished={this.onLoginFinished} />
      </View>
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
    padding: 12
  }
})
