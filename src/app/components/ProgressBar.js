import React from 'react'
import * as Progress from 'react-native-progress';

export default function (props) {
  return (
        <Progress.Bar
        animated={true}
        style={{ marginLeft: 10, marginRight: 8}}
        progress={(((props.quantity / 250 ) * 100) / 100) } 
        color={((props.quantity / 250) * 100) >= 30 ? '#FF6161' : '#97FF9F'}
        width={props.size}
        height={10}
        borderColor='#E5E5E5'
        animationType='timing'/>
    )
}