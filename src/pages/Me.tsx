import React from 'react'
import { StyleSheet, StatusBar, View, Text, ImageBackground, Image, ImageSourcePropType } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/common'

type Props = StackScreenProps<RootStackParamList, 'Me'>

interface OptionsItem {
    text: string,
    source: ImageSourcePropType
}

const options: OptionsItem[] = [
    {
        text: 'Records',
        source: require('../assets/me/records.webp'),
    },
    {
        text: 'Profile',
        source: require('../assets/me/profile.webp'),
    },
    {
        text: 'Account',
        source: require('../assets/me/account.webp')
    }
]

const listsOptions: OptionsItem[] = [
    {
        text: 'Membership credit',
        source: require('../assets/me/list_icon1.webp')
    },
    {
        text: 'FAQ',
        source: require('../assets/me/list_icon2.webp')
    },
    {
        text: 'Feedback',
        source: require('../assets/me/list_icon3.webp')
    },
    {
        text: 'About us',
        source: require('../assets/me/list_icon4.webp')
    },
    {
        text: 'Settings',
        source: require('../assets/me/list_icon5.webp')
    }
]

const Me: React.FC<Props> = ({ navigation }) => {

    const goToLogin = () => {
        navigation.push('Login')
    }

    return (
        <View style={styles.page} >
            <StatusBar backgroundColor='transparent' translucent />
            <ImageBackground style={styles.headerBox} source={require('../assets/me/bg.webp')}>
                <Image style={styles.defaultAvatars} source={require('../assets/me/avatars.webp')} />
                <Text style={styles.defaultAvatarsText} onPress={goToLogin}>Sign up {'>'}</Text>
            </ImageBackground>
            <View style={styles.optionsBox}>
                {options.map((item, index) => {
                    return (
                        <View style={styles.optionsItem} key={item.text}>
                            <Image style={index === 1 ? styles.optionsItemImage2 : styles.optionsItemImage} source={item.source} />
                            <Text style={styles.optionsItemText}>{item.text}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.ListsOptionsBox}>
                {
                    listsOptions.map(item => {
                        return (
                            <View style={styles.ListsOptionsItem} key={item.text}>
                                <View style={styles.ListsOptionsItemLeft}>
                                    <Image style={styles.ListsOptionsIcon} source={item.source} />
                                    <Text style={styles.ListsOptionsText}>{item.text}</Text>
                                </View>
                                <Image source={require('../assets/me/right_Icon.webp')} style={styles.rightIcon} />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        width: '100%',
        alignItems: 'center'
    },
    headerBox: {
        width: '100%',
        height: 179.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    defaultAvatars: {
        width: 60,
        height: 60,
        marginLeft: 22,
        marginRight: 17
    },
    defaultAvatarsText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    optionsBox: {
        width: '92%',
        height: 106,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: -24
    },
    optionsItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsItemImage: {
        width: 32,
        height: 32
    },
    optionsItemImage2: {
        width: 36,
        height: 32
    },
    optionsItemText: {
        color: '#37474F',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 13.5
    },
    ListsOptionsBox: {
        width: '92%',
    },
    ListsOptionsItem: {
        width: '100%',
        height: 51,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 8
    },
    ListsOptionsItemLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListsOptionsIcon: {
        width: 18,
        height: 18,
        marginLeft: 15,
        marginRight: 15
    },
    ListsOptionsText: {
        color: '#37474F',
        fontSize: 15,
        fontWeight: 'bold'
    },
    rightIcon: {
        width: 8,
        height: 13.5,
        marginRight: 15
    }
})

export default Me