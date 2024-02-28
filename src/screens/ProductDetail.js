import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native'
import { useGetProductQuery } from '../app/services/shop.js'
import colors from '../utils/global/colors.js'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice.js'

const ProductDetail = ({ route }) => {

  const {productId} = route.params

  const {data: product, isLoading} = useGetProductQuery(productId)

  const dispatch = useDispatch()

  if(isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>


      <View style={styles.content} >
        <Image
          style={styles.image}
          source={{ uri: product?.thumbnail ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow} onPress={() => dispatch(addCartItem(product))}>
            <Text style={styles.buyNowText}>Carrito</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  content: {
    width: "100%"
  },
  contentLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 15
  },
  image: {
    width: "100%",
    height: 300
  },
  imageLandscape: {
    width: 200,
    height: 200
  },
  goBack: {
    width: "100%",
    backgroundColor: colors.tertiary,
    padding: 10,
    paddingStart: 40
  },
  containerTextLandscape: {
    width: "30%",
    flexDirection: "column"
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  containerPriceLandscape: {
    width: "30%",
    flexDirection: "column"
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  price: {
    fontSize: 30
  },
  buyNow: {
    backgroundColor: colors.tertiary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buyNowText: {
    color: "white"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})