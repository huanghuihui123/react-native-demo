import { useRef, useEffect } from 'react';
import { PermissionsAndroid, PermissionStatus, Permission } from 'react-native'

export const checkPermission = async (permission: Permission) => {
    try {
        return await PermissionsAndroid.check(permission)
    } catch (err) {
        console.warn(err);
        return false
    }
}

export const requestPermission = async (permission: Permission) => {
    try {
        return await PermissionsAndroid.request(
            permission
        );
    } catch (err) {
        console.warn(err);
    }
};



export function useInterval(callback: () => void, delay: number = 0) {
    let latestInterval = useRef<NodeJS.Timeout>();
    useEffect(() => {
        latestInterval.current = setInterval(() => callback(), delay);
        return () => {
            if (latestInterval.current) {
                clearInterval(latestInterval.current)
            }
        }
    })
}