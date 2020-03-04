import React from 'react'
import { HeaderTop } from './index'
import { Icon } from 'react-native-elements'

const Header = ()=>{
    return(
        <HeaderTop>
            <Icon
            containerStyle={{margin: 10}}
            name='menu'
            size={30}
            color='white'
            />
        </HeaderTop>
    )
}
export default Header