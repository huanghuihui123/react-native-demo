import React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';
import HeadTitle from '../components/HeadTitle'
import RepaymentScreen from '../pages/repayment/NoRepayment'


const Stack = createStackNavigator();

const RepaymentStackScreen: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="RepaymentHome">
            <Stack.Screen name="RepaymentHome" component={RepaymentScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
    )
}

export default RepaymentStackScreen