import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

//components
import Header from '../../components/Header'
import CardTask from '../../components/CardTask'
import Footer from '../../components/Footer'

import styles from './styles';

export default function Home() {

    const [filterAct, setFilterAct] = useState('all');


    return (
        <View style={styles.container}>
            <Header notificationIcon={true} leftIcon={true} />
            <View style={styles.filters}>
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('all')}  >
                    <Text style={filterAct == 'all' ? styles.filterActivityText : styles.filterInativeText} >
                        Todos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('today')} >
                    <Text style={filterAct == 'today' ? styles.filterActivityText : styles.filterInativeText} >
                        Hoje
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('week')}>
                    <Text style={filterAct == 'week' ? styles.filterActivityText : styles.filterInativeText} >
                        Semana
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('mouth')}>
                    <Text style={filterAct == 'mouth' ? styles.filterActivityText : styles.filterInativeText} >
                        Mês
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('year')}>
                    <Text style={filterAct == 'year' ? styles.filterActivityText : styles.filterInativeText} >
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fieldLabelHome}>
                <Text style={styles.TextFieldLabelHome}>ATIVIDADES</Text>
            </View>
            <ScrollView style={styles.ScrollView}>
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={true}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={true}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={true}  />
                <CardTask complete={false}  />
                <CardTask complete={true}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
                <CardTask complete={false}  />
            </ScrollView>


            <Footer button='add' />
        </View>
    )
}