import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import {SocialIcon} from 'react-native-elements'

export default function ShareButtons ({style, postContentURL}) {
  return (
    <View style={[styles.container, style]}>
      {/*<TouchableHighlight onPress={() => { onPressFacebook(postContentURL); } }>*/}
        <SocialIcon style={styles.socialIcon} type='facebook' title='Teilen' button/>
      {/*</TouchableHighlight>*/}
      <SocialIcon style={styles.socialIcon} type='twitter' title="Tweet" button/>

    </View>
  )
}

function onPressFacebook(postContentURL) {

  // share with facebook
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  socialIcon: {
    flex: 1
    }
})
