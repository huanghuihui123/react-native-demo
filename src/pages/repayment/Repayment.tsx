import React, { useState } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'

interface State {
    extendCheck: boolean,
    payNowCheck: boolean
}

type CheckKey = 'extendCheck' | 'payNowCheck'

interface ListOptionItem {
    title: string,
    text: string,
    amount: string,
    value: CheckKey
}

const listOptions: ListOptionItem[] = [
    {
        title: 'Extend',
        text: 'Pay additional fee to extend due date for repayment of your loan.',
        amount: 'Rs. 1000',
        value: 'extendCheck'
    },
    {
        title: 'Pay now',
        text: 'You can apply and get a new loan immediately after paying-off this loan.',
        amount: 'Rs. 2280',
        value: 'payNowCheck'
    }
]

const Repayment: React.FC = () => {

    const [state, setState] = useState<State>({
        extendCheck: false,
        payNowCheck: false
    })

    const handleExtendCheckChange = (key: CheckKey) => () => {
        const otherKey: CheckKey = key === 'extendCheck'? 'payNowCheck' : 'extendCheck'
        setState({
            ...state,
            [otherKey]: false,
            [key]: !state[key]
        })
    }

    const handleOnPress = () => {

    }

    return (
        <View style={styles.page}>
            <StatusBar backgroundColor='transparent' translucent />
            <View style={styles.headerBox}>
                <Text style={styles.headerTitle}>Days left</Text>
                <Text style={styles.headerDays}>13</Text>
                <View style={styles.headerCentent}>
                    <View style={styles.headerCententItem}>
                        <Text style={styles.headerCententItemTitle}>Amount due</Text>
                        <Text style={styles.headerCententItemValue}>Rs. 5200</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.headerCententItem}>
                        <Text style={styles.headerCententItemTitle}>Due date</Text>
                        <Text style={styles.headerCententItemValue}>14/02/2019</Text>
                    </View>
                </View>
            </View>
            {
                listOptions.map(item => {
                    return (
                        <View style={styles.card} key={item.title}>
                            <View style={styles.cardLeft}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardText}>{item.text}</Text>
                            </View>
                            <View style={styles.cardRight}>
                                <Text style={styles.cardAmount}>{item.amount}</Text>
                                <CheckBox value={state[item.value]} type='round' size='large' onChange={handleExtendCheckChange(item.value)} />
                            </View>
                        </View>
                    )
                })
            }
            <Button style={styles.repayBtn} text='Repay' onPress={handleOnPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        alignItems: 'center'
    },
    headerBox: {
        height: 296.5,
        alignItems: 'center',
        backgroundColor: '#34454E'
    },
    headerTitle: {
        color: '#fff',
        opacity: 0.54,
        fontSize: 19,
        marginTop: 82.5
    },
    headerDays: {
        color: '#fff',
        fontSize: 80,
        fontWeight: '500'
    },
    headerCentent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        width: 1,
        height: 26,
        backgroundColor: '#fff',
        opacity: 0.43
    },
    headerCententItem: {
        flex: 1,
        alignItems: 'center'
    },
    headerCententItemTitle: {
        color: '#fff',
        opacity: 0.54,
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 16.5
    },
    headerCententItemValue: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        width: '92%',
        paddingLeft: 20,
        paddingRight: 15,
        height: 91,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 15,
        elevation: 2
    },
    cardLeft: {
        width: '64%',
        height: '100%',
    },
    cardRight: {
        flexDirection: 'row'
    },
    cardTitle: {
        color: '#333',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 13,
        marginBottom: 11
    },
    cardText: {
        color: '#999',
        fontSize: 11,
        lineHeight: 16,
        fontWeight: '500',
    },
    cardAmount: {
        marginRight: 14
    },
    repayBtn: {
        width: 295,
        marginTop: 30
    }
})

export default Repayment