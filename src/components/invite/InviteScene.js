import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {AppInviteDialog} from 'react-native-fbsdk'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'

import {requestFriends} from '../../actions/fb'

import Styles from '../Styles'
import Overlay from '../Overlay'

class InviteScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      appInviteContent: {
        applinkUrl: 'https://fb.me/1776342726016181',
      }
    }
  }

  shareLink () {
    var tmp = this;
    AppInviteDialog.canShow(this.state.appInviteContent).then(
      function(canShow) {
        if (canShow) {
          console.log('fooar')
          return AppInviteDialog.show(tmp.state.appInviteContent)
        }
      }
    ).then(
      function(result) {
        console.log(result)
        if (result.isCancelled) {
          alert('Share operation was cancelled')
        } else {
          alert('Share was successful with postId: ' + result.postId)
        }
      },
      function(error) {
        alert('Share failed with error: ' + error)
      }
    )
  }

  render () {
    return (
      <LinearGradient colors={['#ea4d00', '#b80000']} style={[Styles.statusBarContainer, styles.container]}>
        <Overlay style={styles.overlay}>
          <TouchableOpacity onPress={() => this.shareLink()}>
            <Text>foobar</Text>
          </TouchableOpacity>
        </Overlay>
      </LinearGradient>
    )
  }
}

export default connect(
  state => ({
    friends: state.friends
  }),
  {requestFriends}
)(InviteScene)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ea4d00',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 8,
    backgroundColor: 'transparent'
  }
})
