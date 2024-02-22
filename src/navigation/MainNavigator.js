import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ShopStack from './ShopStack.js'
import OrdersStack from './OrdersStack.js'
import CartStack from './CartStack.js'

import colors from '../utils/global/colors.js'
import TabBarIcon from '../components/TabBarIcon.js'

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name='ShopStack'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <TabBarIcon icon="home" text="Products" focused={focused}/>
                        }
                    }}
                />
                <Tab.Screen
                    name='CartStack'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <TabBarIcon icon="shopping-cart" text="Cart" focused={focused}/>
                        }
                    }}
                />
                <Tab.Screen
                    name='OrdersStack'
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <TabBarIcon icon="list" text="Orders" focused={focused}/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: "black",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    }
})