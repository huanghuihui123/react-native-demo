import React from 'react'
import { StyleSheet ,View, Text, Image } from 'react-native'

interface Props {
    title?: string
}

const HeadTitle: React.FC<Props> = ({ title = 'defaultTitle' }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#37474F'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default HeadTitle