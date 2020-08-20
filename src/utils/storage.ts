import AsyncStorage from '@react-native-community/async-storage';


export const setItem = async <T>(key: string, value: T) => {
    try {
        const transformValue: string = JSON.stringify(value)
        await AsyncStorage.setItem('key', transformValue)
    } catch (e) {
        // saving error
        console.log(e)
    }
}

export const getItem = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value != null ? JSON.parse(value) : null
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const removeItem = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const clear = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // error reading value
        console.log(e)
    }
}