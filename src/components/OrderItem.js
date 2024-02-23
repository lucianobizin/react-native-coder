import { StyleSheet, Text, View } from 'react-native'
import {Feather} from "@expo/vector-icons"
import colors from "../utils/global/colors.js"

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
            <View style={styles.textContainer}>      
             <Text style={styles.text}>Creado: {new Date (order.createdAt).toLocaleString()}</Text>
             <Text style={styles.text2}>Total: $ {order.total}</Text>
      </View>
      <Feather name="search" size={30} color="black"/>
    </View>
  )
}

export default OrderItem

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
        color: colors.secondary
    }
})