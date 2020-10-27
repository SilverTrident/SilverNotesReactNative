import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import iconDefault from '../../assets/default.png'
import styles from './styles'
export default function CardTask({complete}) {
    return (
        <TouchableOpacity style={[styles.fieldTask, complete && styles.fieldTaskComplete] }>
            <View style ={styles.leftSideCard}>
                <Image source={iconDefault} style ={styles.imgTask}/>
                <Text style={styles.titleTask}>Nota Generica</Text>
            </View>
            <View style = {styles.rightSideCard}>
                <Text style = {styles.rightSideCardDate}>26/10/2020</Text>
                <Text style = {styles.rightSideCardTime}>14:26</Text>
            </View>
        </TouchableOpacity>

    )
}