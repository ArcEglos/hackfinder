import React from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-elements'

export default function CloseButton ({onPress, style}) {
  return (
    <View style={{position: 'absolute', top: 10, right: -10}}>
      <Button
        color='#fff'
        backgroundColor='transparent'
        icon={{name: 'close', style: {fontSize: 24}}}
        onPress={onPress}
      />
    </View>
  )
}
