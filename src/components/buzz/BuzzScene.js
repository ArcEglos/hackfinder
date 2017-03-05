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
    let {loading, items} = this.props
    let buzz = items[0]

    return (

      <View style={[Styles.statusBarContainer, styles.container]}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        {buzz && <Buzz buzz={buzz} />}
        {buzz && <Countdown to={buzz.expirationDate} />}
        <ShareButtons style={styles.socialButtons} postContentURL='http://catpics.com'/>
      </View>
    </View>
    )
  }
}

export default connect(
  state => ({
    ...state.buzzes
  }),
  {fetchBuzzes}
)(BuzzScene)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12
  },
  socialButtons: {
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 20,
    paddingBottom: 10,
    flex: 0
  }
})
