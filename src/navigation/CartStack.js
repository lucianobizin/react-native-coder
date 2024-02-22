import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart.js';
import Header from '../components/Header.js';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={ ({navigation}) => {
                return {
                    header: () => {
                        return <Header title='Cart' navigation={navigation}/>
                    }
                }
            } }
        >
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartStack

const styles = StyleSheet.create({})