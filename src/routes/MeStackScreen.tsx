import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';
import HeadTitle from '../components/HeadTitle'
import MeScreen from '../pages/Me'


const Stack = createStackNavigator();

const MeStackScreen: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="MeHome" >
            <Stack.Screen name="MeHome" component={MeScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
    )
}

export default MeStackScreen