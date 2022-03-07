import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeBiometrics from 'react-native-biometrics';

export const EntryCodeContext = createContext({
    codeLength: 0,
    codeValue: '',
    loading: false,
    showEntry: true,
    biometryType: undefined,
    setCodeLength: () => {},
    setCodeValue: () => {},
    writeToStorage: () => {},
    setShowEntry: () => {},
    clearStorage: () => {}
})

export const EntryCodeProvider = ({ children }) => {
    const [codeLength, setCodeLength] = useState(0);
    const [codeValue, setCodeValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [showEntry, setShowEntry] = useState(true);
    const [biometryType, setBiometryType] = useState(undefined);

    const checkBiometricks = async () => {
        try {
            const { biometryType } = await ReactNativeBiometrics.isSensorAvailable();
            setBiometryType(biometryType);
        } catch(error) {
            console.log(error);
        }
    }

    const fetchCodeData = async () => {
        setLoading(true);

        try {
            const value = await AsyncStorage.getItem('@CodeValue');
            const length = await AsyncStorage.getItem('@CodeLength');

            setCodeValue(value);
            setCodeLength(length);
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const writeToStorage = async (codeValue, codeLength) => {
        try {
            await AsyncStorage.multiSet([
                ['@CodeValue', codeValue],
                ['@CodeLength', codeLength]
            ]);
        } catch(error) {
            console.error(error);
        } finally {

        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() =>  {
        fetchCodeData();
        checkBiometricks();
    }, [])

    const values = {
        codeLength,
        codeValue,
        loading,
        setCodeLength,
        setCodeValue,
        writeToStorage,
        showEntry,
        setShowEntry,
        clearStorage,
        biometryType
    }

    return (
        <EntryCodeContext.Provider value={values}>
            { children }
        </EntryCodeContext.Provider>
    )
}