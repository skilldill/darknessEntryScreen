import React from 'react';
import { View } from 'react-native';

import { ConfigCodeScreen, SetCodeEntryScreen, EntryScreen, HomeScreen } from '../screens';
import { EntryCodeService } from '../services';

export const Navigation = () => {
    const entryService = EntryCodeService();

    if (entryService.showEntry) {

        if (entryService.loading) {
            return (
                <View style={{flex: 1, backgroundColor: '#000'}}>
    
                </View>
            )
        }
    
        if (!entryService.codeLength && !entryService.codeValue) {
            return (
                <View style={{ flex: 1 }}>
                    <ConfigCodeScreen />
                </View>
            )
        }
    
        if (!!entryService.codeLength && !entryService.codeValue) {
            return (
                <SetCodeEntryScreen />
            )
        }
    
        return <EntryScreen />
    }


    return (
        <HomeScreen />
    )
}