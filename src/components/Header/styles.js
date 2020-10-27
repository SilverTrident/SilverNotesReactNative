import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#010613',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    leftIcon: {
        position: "absolute",
        left: 25
    },
    leftIconImage: {
        width: 28,
        height: 28
    },
    logo: {
        width: 130,
        height: 27
    },
    rightIcon: {
        position: "absolute",
        right: 1,
        width: 40,
        height: 30,
        display: 'flex',
        alignItems: 'center'
    },
    bell: {
        position: 'absolute',
        top: 10,
        right: 15,
        width: 18,
        height: 21
    },
    circle: {
      
        position: "absolute",
        top: 2,
        right: 5,
        width: 18,
        height: 18,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 50,

    },
    textRightIcon:{
        fontSize : 8,
        fontWeight: '700',
        color : '#DB2727' 
        
    }
});

export default styles;