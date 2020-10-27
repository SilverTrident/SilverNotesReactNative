import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

//API
import api from '../../services/api'

//components
import Header from '../../components/Header'
import CardTask from '../../components/CardTask'
import Footer from '../../components/Footer'

import styles from './styles';

export default function Home() {

    const [filterAct, setFilterAct] = useState('all');
    const [lateCount, setLateCount] = useState();
    const [notes, setNotes] = useState([]);
    const [load, setLoad] = useState(false);

    function notification() {
        setFilterAct('late')
    }

    async function loadNotes() {
        setLoad(true)
        await api.get(`/task/filter/${filterAct}/00-14-23-03-23-45`).then(response => {
          
            setLoad(false);
            setNotes(response.data);

        });
    }

    async function notify() {
        setLoad(true)
        await api.get(`/task/filter/late/00-14-23-03-23-45`).then(response => {
            setLoad(false);
                setLateCount(response.data.length)

        });
    }

    useEffect(() => {
        loadNotes();
        notify();
    }, [filterAct,])

    return (
        <View style={styles.container}>
            <Header notificationIcon={true} leftIcon={true} click={notification} late={lateCount} />
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
                <TouchableOpacity style={styles.filterField} onPress={() => setFilterAct('month')}>
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
    <Text style={styles.TextFieldLabelHome}> {filterAct == 'late' ? 'ATRASADAS' : 'ATIVIDADES' }</Text>
            </View>
            <ScrollView style={styles.ScrollView}>

                {load ? <ActivityIndicator color='#FFF1DD' size={50} style={styles.loading} /> :

                    notes.map(response =>
                        (
                            <CardTask
                                title={response.title}
                                when={response.when}
                                done={response.done}
                                type={response.type}
                                complete={false}

                            />
                        ))

                }


            </ScrollView>


            <Footer button='add' />
        </View>
    )
}