import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import products from "../utils/data/products.json"
import { useEffect, useState } from 'react'
import colors from '../utils/global/colors.js'
import Header from '../components/Header.js'

const ProductDetail = ({ productId, portrait }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFound = products.find(product => product.id === productId)
    setProduct(productFound)
  }, [productId])

  return (
    <View style={styles.container}>
      <Header title={"Detalle del producto"} />
      <View style={[styles.content, !portrait && {flexDirection:"row", gap:20, padding:10}]} >
        <Image
          style={[styles.image, !portrait && {width: "40%", height:100}]}
          source={{ uri: product?.thumbnail ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={[styles.containerText, !portrait && {width:"30%"}]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice, !portrait && {width:"15%", flexDirection:"column"}]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
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
  }
})