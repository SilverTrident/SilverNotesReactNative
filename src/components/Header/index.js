import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

//images
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png'
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png'

import styles from './styles';



export default function Header({ notificationIcon, leftIcon }) {
    return (


        <View style={styles.container}>

            {leftIcon ? <TouchableOpacity style={styles.leftIcon}>
                <Image source={qrcode} style={styles.leftIconImage} />
            </TouchableOpacity>
                :
                <TouchableOpacity style={styles.leftIcon}>
                    <Image source={back} style={styles.leftIconImage} />
                </TouchableOpacity>

            }


            <Image source={logo} style={styles.logo} />



            {notificationIcon && <TouchableOpacity style={styles.rightIcon}>
                <Image source={bell} style={styles.bell} />
                <View style={styles.circle}>
                    <Text style={styles.textRightIcon}>200</Text>
                </View>
            </TouchableOpacity>}



        </View>
    )
}