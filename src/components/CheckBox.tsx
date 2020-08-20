import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

type CheckType = 'round' | 'square'
type CheckSize = 'small' | 'large'

interface Props {
    value?: boolean,
    type: CheckType,
    size: CheckSize,
    onChange: () => void
}

const CheckBox: React.FC<Props> = ({ value = false, type, size, onChange }) => {

    const handleSource = () => {
        if (type === 'round') {
            return value? require('../assets/checks_round_icon.webp') : require('../assets/check_round_icon.webp')
        } else {
            return value? require('../assets/checks_square_icon.webp') : require('../assets/check_square_icon.webp')
        }
    }

    return (
        <TouchableOpacity onPress={onChange}>
            <Image style={styles[size]} source={handleSource()} resizeMode='contain' />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    small: {
        width: 14,
        height: 14
    },
    large: {
        width: 21,
        height: 21
    }
})

export default CheckBox