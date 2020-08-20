import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, PermissionsAndroid, PermissionStatus, View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import { checkPermission, requestPermission } from '../utils'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/common'
import * as api from '../api'
import { Res } from '../interfaces/common'
import { LoginRes } from '../api/response'
type Props = StackScreenProps<RootStackParamList, 'Login'>

interface State {
    phone: string,
    code: string
}

const Login: React.FC<Props> = ({ navigation }) => {

    let latestInterval = useRef<NodeJS.Timeout>();

    const [state, setState] = useState<State>({
        phone: '',
        code: ''
    })

    const [check, setCheck] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [time, setTime] = useState<number>(5)

    useEffect(() => {
        handleRequestPermission()
    })

    useEffect(() => {
        if (latestInterval.current && time < 1) {
            clearInterval(latestInterval.current)
            setShow(false)
            setTime(5)
        }
    }, [time])

    const handleRequestPermission = async () => {
        const res = await checkPermission(PermissionsAndroid.PERMISSIONS.READ_SMS)
        if (!res) {
            const granted: PermissionStatus | undefined = await requestPermission(PermissionsAndroid.PERMISSIONS.READ_SMS)
            console.log(granted)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can read the SMS");
            } else {
                console.log("Read SMS permission denied");
            }
        }
    }

    const handleMobileChange = (value: string) => {
        setState({
            ...state,
            phone: value
        })
    }

    const handleMobileBlur = () => {
        console.log(state.phone)
    }

    const handleObtainCode = () => {
        setShow(true)
        latestInterval.current = setInterval(() => {
            setTime(time => {
                return time - 1
            })
        }, 1000)
    }

    const handleCodeChange = (value: string) => {
        setState({
            ...state,
            code: value
        })
    }

    const handleCodeBlur = () => {
        console.log('blur', state.code)
    }

    const handleCheckBoxChange = () => {
        setCheck(check => {
            return !check
        })
    }

    const handleLogin = async () => {
        navigation.push('Home')
        // try {
        //     const res: Res<LoginRes> = await api.login(state)
        //     console.log(res)
        //     if (res.success) {
                
        //     }

        // } catch (error) {
        //     console.log(error)
        // }

    }

    return (
        <View style={styles.box}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View>
                <View style={styles.mobileInputBox}>
                    <Text style={styles.prefixText}>+91</Text>
                    <TextInput style={styles.mobileInput} placeholder='Enter your mobile number' keyboardType="numeric" onChangeText={handleMobileChange} onBlur={handleMobileBlur} />
                    {!show && <TouchableHighlight onPress={handleObtainCode}>
                        <Text style={styles.obtainText}>Obtain</Text>
                    </TouchableHighlight>}
                    {show && <Text style={styles.timeText}>{time}s</Text>}
                </View>
                <TextInput style={styles.codeInput} placeholder='Enter SMS verification code' keyboardType="numeric" onChangeText={handleCodeChange} onBlur={handleCodeBlur} />
                <View style={styles.agreeBox}>
                    <View style={styles.checkBox}>
                        <CheckBox value={check} type='square' size='small' onChange={handleCheckBoxChange} />
                    </View>
                    <Text style={styles.text}>I agree to the </Text>
                    <TouchableHighlight style={styles.strongBox}>
                        <Text style={[styles.text, styles.strong]} >Terms Of Use </Text>
                    </TouchableHighlight>
                    <Text style={styles.text}>and </Text>
                    <TouchableHighlight style={styles.strongBox}>
                        <Text style={[styles.text, styles.strong]} >Privacy Policy </Text>
                    </TouchableHighlight>
                </View>
                <Button text='login' onPress={handleLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
        alignItems: 'center',
        paddingTop: 64,
        backgroundColor: '#fff'
    },
    logo: {
        width: 132,
        height: 132,
        marginBottom: 55
    },
    mobileInputBox: {
        width: 320,
        height: 49,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginBottom: 20
    },
    prefixText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '500',
        marginRight: 16
    },
    mobileInput: {
        flex: 1,
    },
    obtainText: {
        color: '#193EA6',
        fontSize: 13,
        fontWeight: '500'
    },
    timeText: {
        color: '#999',
        fontSize: 13,
        fontWeight: '500'
    },
    codeInput: {
        width: 320,
        height: 49,
        paddingLeft: 18,
        paddingRight: 18,
        backgroundColor: '#F5F5F5',
        borderWidth: 2,
        borderColor: '#f5f5f5',
        opacity: 0.98,
        borderRadius: 8,
    },
    agreeBox: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 133
    },
    checkBox: {
        marginLeft: 18,
        marginRight: 10
    },
    text: {
        fontSize: 11,
        color: '#999'
    },
    strongBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#193EA6',
    },
    strong: {
        color: '#193EA6'
    }
})

export default Login