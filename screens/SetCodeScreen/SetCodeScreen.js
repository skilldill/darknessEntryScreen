import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { setCodeScreenStyle as styles } from './style';
import { VirtualKeyboard, CodeDotsView } from '../../components';
import { EntryCodeService } from '../../services';

export const SetCodeEntryScreen = () => {
    const entryService = EntryCodeService();

    const [code, setCode] = useState('');
    const [approveCode, setApproveCode] = useState('');

    const keyboardConfig = [
        [
            { value: '1' },
            { value: '2' },
            { value: '3' },
        ],
        [
            { value: '4' },
            { value: '5' },
            { value: '6' },
        ],
        [
            { value: '7' },
            { value: '8' },
            { value: '9' },
        ],
        [
            // { value: 'back', style: {fontSize: 18} },
            { value: '' },
            { value: '0' },
            { value: '' },
        ],
    ]

    const handlePressKeyboard = (keyValue) => {
        if (!!keyValue) {
            if (code.length < entryService.codeLength) {
                setCode((prevValue) => prevValue + keyValue);
                return;
            }

            setApproveCode((prevValue) => prevValue + keyValue);
        }
    }

    useEffect(() => {
        if (approveCode.length > 0 && approveCode.length === entryService.codeLength) {
            if (code === approveCode) {
                entryService.setCodeValue(code);
                entryService.writeToStorage(code, code.length.toString());
            }
        }
    }, [code, approveCode, entryService.codeLength])

    return (
        <View style={styles.screen}>
            <View style={styles.viewCode}>
                
                <Text style={{
                    ...styles.approve, 
                    color: code.length === entryService.codeLength ? '#fff' : '#000'
                }}>
                    Approve code
                </Text>
                
                <CodeDotsView 
                    count={entryService.codeLength} 
                    value={code.length < entryService.codeLength ? code : approveCode} 
                />
            </View>

            <View style={styles.keyboard}>
                <VirtualKeyboard 
                    config={keyboardConfig} 
                    onPress={handlePressKeyboard}
                />
            </View>
        </View>
    )
}