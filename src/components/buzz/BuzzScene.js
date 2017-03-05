import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {LoginManager} from 'react-native-fbsdk'

import {fetchBuzzes} from '../../actions/buzz'
import {startServerAuth} from '../../actions/auth'
import Styles from '../Styles'
import Points from '../Points'
import Buzz from './Buzz'
import Countdown from './Countdown'
import ShareButtons from './ShareButtons'
import CloseButton from '../CloseButton'

class BuzzScene extends Component {
  componentDidMount () {
    // this.props.startServerAuth(this.props.account.userId, this.props.account.accessToken);
    this.props.fetchBuzzes();
  }

  logout () {
    LoginManager.logOut()
    AsyncStorage.removeItem('state')
    this.props.replaceScene('login')
  }

  render () {
    let {loading, items, account} = this.props
    let buzz = items[0]

    return (
      <View style={[Styles.statusBarContainer, styles.container]}>
        <CloseButton onPress={() => this.logout()} />
        <TouchableOpacity style={styles.points} onPress={() => this.props.pushScene('redeem')}>
          <Points amount={account.points} textStyle={{color: '#b80000', fontSize: 25}} />
        </TouchableOpacity>
        {buzz && <Buzz buzz={buzz} />}
        {buzz && <Countdown to={buzz.expirationDate} />}
        <ShareButtons onShared={() => this.props.pushScene('aftershare')} style={styles.socialButtons} postContentURL='https://www.facebook.com/martinschulz/photos/a.84734803461.80915.75969208461/10154677254603462/?type=3&permPage=1' descriptionText='In Berlin programmieren einige Verrückte beim Hackathon 24h lang für meinen Wahlkampf. Habe mit ihnen geskypet. Danke euch und viel Energie!'/>
      </View>
    )
  }
}

export default connect(
  state => console.log(state) || ({
    loading: state.buzzes.loading,
    items: state.buzzes.items,
    account: state.auth.account
  }),
  {fetchBuzzes}
)(BuzzScene)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    flexDirection: 'column',
  },
  socialButtons: {
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 0,
    paddingBottom: 10,
    flex: 0
  },
  points: {
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 2
  }
})
