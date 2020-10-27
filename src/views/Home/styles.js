import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container :{
        width : '100%',
        height: '100%',
        backgroundColor : '#030C22'
    },
    filters:{
        display :  "flex",
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-around',
        marginTop : 25,
      
    },
    fieldLabelHome:{
        
        marginTop : 10,
        marginHorizontal: 25,
        borderTopWidth : 2,
        borderBottomWidth: 2,
        borderTopColor : '#30343E',
        borderBottomColor: '#30343E',
        alignItems: "center",
        padding:7

    },
    loading:{
        marginTop: 100
    },
    ScrollView:{
        marginTop : 10,
        marginBottom : 60,
        backgroundColor : '#020816'
    },
    TextFieldLabelHome:{
        color : '#30343E',
        fontWeight : '700',
        fontSize : 15
    },
    filterActivityText : {
        color : '#fff',
        fontWeight : '700'
    },
    filterInativeText:{
        color : '#fff',
        fontWeight : '700',
        opacity : 0.5
    }, 
    filterField:{
        padding : 5
    }
});

export default styles;