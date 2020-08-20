import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

type Props = BottomTabBarProps

const MyTabBar: React.FC<Props> = ({ state, descriptors, navigation }) => {

    const handleSource = (index: number, isFocused: boolean ) => {
        if (index === 0) {
            return isFocused? require('../assets/bottomTab/Loans.webp') : require('../assets/bottomTab/Loan.webp')
        } else if (index === 1) {
            return isFocused? require('../assets/bottomTab/Repayments.webp') : require('../assets/bottomTab/Repayment.webp')
        } else {
            return isFocused? require('../assets/bottomTab/Mes.webp') : require('../assets/bottomTab/Me.webp')
        }
    }

    return (
        <View style={styles.bar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        //   accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.barItem}
                        key={route.key}
                    >
                        <Image style={styles.icon} source={handleSource(index, isFocused)} resizeMode='contain' />
                        <Text style={[{ color: isFocused ? '#193EA6' : '#999' }, styles.text]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        height: 49,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    barItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8
    },
    icon: {
        width: 21,
        height: 21,
    },
    text: {
        fontSize: 10,
        lineHeight: 20
    }
})

export default MyTabBar