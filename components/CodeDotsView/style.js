import { StyleSheet } from 'react-native';

export const codeDotsViewStyle = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dot: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
        margin: 10
    }
})