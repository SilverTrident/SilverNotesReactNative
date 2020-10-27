import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//bible
import { format } from 'date-fns';

//icons
import icons from '../../utils/typeIcons';

import styles from './styles';


export default function CardTask({ complete, title, when, type, done }) {
    

    return (
        <TouchableOpacity style={[styles.fieldTask, complete && styles.fieldTaskComplete]}>
            <View style={styles.leftSideCard}>
                <Image source={icons[type]} style={styles.imgTask} />
                <Text style={styles.titleTask}>{title}</Text>
            </View>
            <View style={styles.rightSideCard}>
                <Text style={styles.rightSideCardDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.rightSideCardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>

    )
}