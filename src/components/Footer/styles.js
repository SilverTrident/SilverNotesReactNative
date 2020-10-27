import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        width :'100%',
        height : 70,
        bottom : 0,
        alignItems : "center",
        backgroundColor :'#010613',
        borderTopWidth : 3,
        borderTopColor : '#fff'

        
    },
    iconFooter:{
        position : 'absolute',
        top: -30
    },
    iconFooterImage: {
        width : 60,
        height : 60
    },
    footerLabel :{
        position : "absolute",
        bottom : 18,
        color : '#fff'
    }
});

export default styles;