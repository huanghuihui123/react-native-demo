import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';
import HeadTitle from '../components/HeadTitle'
import LoanScreen from '../pages/Loan'


const Stack = createStackNavigator();

const LoanStackScreen: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="LoanHome">
            <Stack.Screen name="LoanHome" component={LoanScreen} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default LoanStackScreen