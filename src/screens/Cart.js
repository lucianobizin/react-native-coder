import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import cart from "../utils/data/cart.json"
import CartItem from "../components/CartItem.js"
import fonts from '../utils/global/fonts.js'

const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <CartItem item={item}/>}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirmation</Text>
        </Pressable>
        <Text style={styles.confirmText}> Total: $ {cart.total}</Text>

      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 150
  },
  confirmContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 25,
    justifyContent: "space-between"
  },
  confirmText: {
    fontFamily: fonts.lobsterRegular,
    fontSize: 18,
    color: "black"
  }
})