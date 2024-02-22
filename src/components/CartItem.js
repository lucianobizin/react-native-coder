import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import colors from '../utils/global/colors'

const CartItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>{item.price}</Text>

            </View>
            <Entypo name="trash" size={30} color="black" />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary,
        padding: 20,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        alignItems: "center"
    },
    textContainer: {
        widht: "70%"
    },
    text: {
        color: colors.secondary
    },
    text2: {
        color: colors.tertiary
    }
})