import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { EntryCodeService } from '../../services';

import { configCodeScreenStyles as styles } from './style';

export const ConfigCodeScreen = () => {
    const { setCodeLength } = EntryCodeService();

    return (
        <View style={styles.screen}>
            <View style={styles.controls}>
                <Pressable 
                    style={styles.button} 
                    onPress={() => setCodeLength(4)}
                >
                    <Text style={styles.buttonText}>4 значный код</Text>
                </Pressable>

                <Pressable 
                    style={styles.button}
                    onPress={() => setCodeLength(6)}
                >
                    <Text style={styles.buttonText}>6 значный код</Text>
                </Pressable>
            </View>
        </View>
    )
}