import React, {PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from 'react-native-elements'

const SocialIcon = ({name}) => (
  <Icon
    containerStyle={styles.icon}
    color='#ea4d00'
    type='material-community'
    size={16}
    name={name}
  />
)

export default function ShareButtons ({style}) {
  return (
    <View style={[styles.container, style]}>
      <SocialIcon name='twitter' />
      <SocialIcon name='facebook' />
      <SocialIcon name='snapchat' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
