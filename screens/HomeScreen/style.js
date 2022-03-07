import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },

    button: {
        width: '100%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#000'
    },

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
})