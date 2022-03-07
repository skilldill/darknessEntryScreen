import React from 'react';
import {View, Pressable, Text} from 'react-native';
import { virtualKeyboardStyles as styles } from './style';

export const VirtualKeyboard = ({ config, onPress }) => {
    return (
        <View style={styles.keyboard}>
            {config.map((row, i) => 
                <View style={styles.keyboardRow} key={i}>
                    {row.map((keyConfig, j) => 
                        <Pressable 
                            key={`${i}${j}`}
                            onPress={() => onPress(keyConfig.value)}
                        >
                            <Text style={{...styles.keyboardKey, ...keyConfig.style}}>
                                {keyConfig.content || keyConfig.value}
                            </Text>
                        </Pressable>
                    )}
                </View>
            )}
        </View>
    )
}