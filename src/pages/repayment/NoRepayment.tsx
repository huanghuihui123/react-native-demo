import React from 'react';
import { StyleSheet, StatusBar, View, Text, Image } from 'react-native';
import Button from '../../components/Button'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces/common'

type Props = StackScreenProps<RootStackParamList, 'Repayment'>

const NoRepayment: React.FC<Props> = ({ navigation }) => {

    const handleOnPress = () => {
        navigation.push('Login')
    }

    return (
        <View style={styles.page}>
            <StatusBar backgroundColor='transparent' translucent />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Repayment</Text>
            </View>
            <Image style={styles.bg} source={require('../../assets/repayment/no_repayment_bg.webp')} />
            <Text style={styles.text}>There is no outstanding loan that you need to repay!</Text>
            <Button style={styles.btn} text='Borrow now' onPress={handleOnPress} />
        </View>
    );
}

const titleHeight = StatusBar.currentHeight! + 45

const styles = StyleSheet.create({
    page: {
        height: '100%',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingTop: StatusBar.currentHeight,
        height: titleHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2146AA'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
    },
    bg: {
        width: '86.4%',
        height: 237.5,
        marginTop: 97
    },
    text: {
        width: '62%',
        color: '#999',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    btn: {
        width: 228,
        marginTop: 69
    }
})

export default NoRepayment