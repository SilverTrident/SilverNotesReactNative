import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    fieldTask: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFF1DD',

     
    },
    fieldTaskComplete:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#376145',
        opacity : 0.75

    },
    leftSideCard: {
        flexDirection: 'row',
        alignItems: "center",
        width: '45%',

    },
    imgTask: {
        marginRight: 20
    },
    titleTask: {
        fontWeight: '700',
        fontSize: 13

    },
    rightSideCard: {
        alignItems: 'flex-end',
        justifyContent: "space-between"
    },
    rightSideCardDate: {
        alignSelf: 'flex-start',
        fontWeight: '700'
    },
    rightSideCardTime: {
        alignSelf: 'flex-end',


    }
});

export default styles;