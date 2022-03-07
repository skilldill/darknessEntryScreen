import { StyleSheet } from 'react-native';

export const configCodeScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },

    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 100
    },

    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})