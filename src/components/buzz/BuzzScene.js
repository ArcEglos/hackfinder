import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native'

import {fetchBuzzes} from '../../actions/buzz'
import Styles from '../Styles'
import Buzz from './Buzz'
import Countdown from './Countdown'
import ShareButtons from './ShareButtons'

class BuzzScene extends Component {
  componentDidMount () {
    this.props.fetchBuzzes()
  }

  render () {
    let {loading, items, account} = this.props
    let buzz = items[0]

    return (
      <View style={[Styles.statusBarContainer, styles.container]}>
        {buzz && <Buzz buzz={buzz} />}
        {buzz && <Countdown to={buzz.expirationDate} />}
        <ShareButtons style={styles.socialButtons} postContentURL='https://www.facebook.com/martinschulz/photos/a.84734803461.80915.75969208461/10154677254603462/?type=3&permPage=1' descriptionText='In Berlin programmieren einige Verrückte beim Hackathon 24h lang für meinen Wahlkampf. Habe mit ihnen geskypet. Danke euch und viel Energie!'/>
      </View>
    )
  }
}

export default connect(
  state => ({
    ...state.buzzes,
    account: state.account
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
    paddingTop: 20,
    paddingBottom: 10,
    flex: 0
  }
})
