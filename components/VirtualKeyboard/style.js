import { StyleSheet } from 'react-native';

export const virtualKeyboardStyles = StyleSheet.create({
    keyboard: {
    
    },

    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },

    keyboardKey: {
        fontSize: 40,
        width: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff'
    }
})