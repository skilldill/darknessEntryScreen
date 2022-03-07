import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import { entryScreenStyles as styles } from './style';
import { VirtualKeyboard, CodeDotsView } from '../../components';
import { EntryCodeService } from '../../services';
import { FaceIdIosIcon, FingerPrintIosIcon, FingerPrintAndroidIcon } from '../../assets';

export const EntryScreen = () => {
    const entryService = EntryCodeService();

    const [code, setCode] = useState('');

    const biometryIconsMap = {
        [ReactNativeBiometrics.TouchID]: <FingerPrintIosIcon width={50} height={50} />,
        [ReactNativeBiometrics.FaceID]: <FaceIdIosIcon width={50} height={50} />,
        [ReactNativeBiometrics.Biometrics]: <FingerPrintAndroidIcon width={50} height={50} />
    }

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
            { value: '' },
            { value: '0' },
            { 
                value: biometryIconsMap[entryService.biometryType] ? 'biometry' : '', 
                content: biometryIconsMap[entryService.biometryType] 
            },
        ],
    ]

    const entryWithBiometry = async () => {
        try {
            const { success } = await ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm biometry data'})

            if (success) {
                entryService.setShowEntry(false);
            }
        } catch(error) {
            console.error(error);
        }
    }

    const handlePressKeyboard = (keyValue) => {
        if (!!keyValue) {
            if (keyValue === 'biometry') {
                entryWithBiometry();
                return;
            }

            if (code.length < entryService.codeLength) {
                setCode((prevValue) => prevValue + keyValue);
                return;
            }
        }
    }

    useEffect(() => {
        if (code.length === entryService.codeValue.length) {
            if (code === entryService.codeValue) {
                entryService.setShowEntry(false);
            }

            setCode('');
        }
    }, [code, entryService.codeValue])

    return (
        <View style={styles.screen}>
            <View style={styles.codeView}>
                <CodeDotsView count={entryService.codeLength} value={code} />
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