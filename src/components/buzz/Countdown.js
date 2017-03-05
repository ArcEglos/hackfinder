import React, {PropTypes, Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}



function getCountdown(to) {
  let diff = Math.max(to - Date.now())
  let hours = Math.floor(diff / 3600000)
  diff -= hours * 3600000
  let minutes = Math.floor(diff / 60000)
  diff -= minutes * 60000
  let seconds = Math.round(diff / 1000)

  var countdown = {'hours':hours, 'minutes':minutes, 'seconds':seconds};
  return countdown;
}

export default class Countdown extends Component {

  constructor(props) {
    super(props);

    var cdn = getCountdown(this.props.to);

    this.state = {countdown: cdn};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ countdown: getCountdown(this.props.to) });
      // todo check if countdown hits zero
    }, 1000);

  }

render () {
  return (
    <View style={styles.countDownContainer}>
      <Text style={styles.countDownContent}>{pad(this.state.countdown.hours, 2)}:{pad(this.state.countdown.minutes, 2)}:{pad(this.state.countdown.seconds, 2)}</Text>
    </View>
  )
}
}


const styles = StyleSheet.create({
  countDownContainer: {
    flex:0,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 10
  },
  countDownTitle: {
    textAlign:'center'
  },
  countDownContent: {
    color: '#f00',
    fontWeight:'bold',
    fontSize: 80,
    fontFamily: 'OpenSans-Light',
    fontWeight: '300',
    textAlign: 'center'
  }

})
