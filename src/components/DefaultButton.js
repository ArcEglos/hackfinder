import React from 'react'
import {Button} from 'react-native-elements'

export default function DefaultButton ({title, onPress, style}) {
  return (
    <Button
      backgroundColor='#fff'
      color='#ea4d00'
      borderRadius={30}
      title={title}
      onPress={onPress}
      buttonStyle={style}
    />
  )
}
