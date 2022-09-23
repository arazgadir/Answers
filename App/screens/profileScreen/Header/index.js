import React from 'react'
import { View, Text, Image} from 'react-native'
import { BackIcon } from '../../../assets/BackIcon'
import { NotificationIcon } from '../../../assets/NotificationIcon'
import { styles } from './styles'

export const Header = () => {

    return (
        <View style={styles.container}>
            <BackIcon/>
            <Text style={styles.headerText}>Our Answers</Text>
            <View style={{left: 40}}>
            <NotificationIcon/>
            </View>
            <Image source={require('../../../assets/mypage.png')}/>
        </View>
    )
}