import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

interface Props {
    text?: string,
    type?: 'primary',
    style?: any
    onPress: () => void
}

const Button: React.FC<Props> = ({ text = 'defaule', type = 'primary', style, onPress }) => {
    return (
        <TouchableOpacity style={[{ ...style }, styles.button, styles[type]]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 49,
        opacity: 0.98,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    primary: {
        backgroundColor: '#143AA4'
    }
})

export default Button