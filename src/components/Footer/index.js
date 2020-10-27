import React from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';

//images
import add from '../../assets/add.png';
import check from '../../assets/check.png';

import styles from './styles';

export default function Footer({button}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconFooter}>
            <Image source={button == 'add' ? add : check} style={styles.iconFooterImage}/>
            </TouchableOpacity>
        <Text style={styles.footerLabel}>
            SilverNotas - For your life!
        </Text>
            
        </View>
    )
}