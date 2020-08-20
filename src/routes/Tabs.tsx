import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoanScreen from './LoanStackScreen'
import RepaymentScreen from './RepaymentStackScreen'
import MeScreen from './MeStackScreen'
import MyTabBar from '../components/MyTabBar'

const Tab = createBottomTabNavigator()

const Tabs: React.FC = () => {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props}/>}>
            <Tab.Screen name="Loan" component={LoanScreen} />
            <Tab.Screen name="Repayment" component={RepaymentScreen} />
            <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
    )
}

export default Tabs