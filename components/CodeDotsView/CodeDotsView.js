import React from 'react';
import { View } from 'react-native';

import { codeDotsViewStyle as styles } from './style';

export const CodeDotsView = ({ count, value }) => {

    const getArrayByCount = (count) => {
        const countArray = [];

        for (let i = 0; i < count; i++) {
            countArray.push(i);
        }

        return countArray;
    }

    return (
        <View style={styles.dots}>
            {getArrayByCount(count).map((item, i) => 
                <View 
                    style={{
                        ...styles.dot, 
                        backgroundColor: !!value[i] ? '#00ee00' : '#e0e0e0'
                    }} 
                    key={i}
                ></View>
            )}
        </View>
    )
}