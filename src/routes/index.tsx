import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/common'
import Tabs from './Tabs'
import Login from '../pages/Login'
import DetailsScreen from '../pages/Details'
// import HeadTitle from '../components/HeadTitle'


const Stack = createStackNavigator<RootStackParamList>();


const Routes: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false}}/>
            <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ id: 1 }} options={({ route }) => ({ title: 'DetailsTitle' + route.params.id })} />
        </Stack.Navigator>
    )
}

export default Routes