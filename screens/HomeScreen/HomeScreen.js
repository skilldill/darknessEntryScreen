import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { EntryCodeService } from '../../services';

import { homeScreenStyles as styles } from './style';

export const HomeScreen = () => {
    const entryService = EntryCodeService();

    const clearData = () => {
        entryService.clearStorage();
        entryService.setCodeLength('');
        entryService.setCodeValue('');
        entryService.setShowEntry(true);
    }

    return (
        <View style={styles.screen}>
            <View style={{marginBottom: 40}}>
                <Pressable 
                    style={styles.button} 
                    onPress={() => entryService.setShowEntry(true)}
                >
                    <Text style={styles.buttonText}>Выйти</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={styles.button} onPress={clearData}>
                    <Text style={styles.buttonText}>Очистить данные</Text>
                </Pressable>
            </View>
        </View>
    )
}