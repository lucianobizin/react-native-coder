import { StyleSheet, FlatList } from 'react-native'
import products from "../utils/data/products.json"
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory.js'
import Search from '../components/Search.js'

const ProductsByCategory = ({navigation, route }) => {

  const {categorySelected} = route.params

  const [productsFiltered, setProductsFiltered] = useState([])

  const [keyword, setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    if (categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if (keyword) setProductsFiltered(productsFiltered.filter(product => {

      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()

      return productTitleLower.includes(keywordLower)
    }
    ))
  }, [categorySelected, keyword])

  const goBack = () => {
    setCategorySelected("")
  }

  return (
    <>
    
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory item={item} navigation={navigation}/>}

      />
    </>
  )

  
}

export default ProductsByCategory

const styles = StyleSheet.create({
  headerContainer: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
  },
  goBackRowContainer: {
    flex: 1,
    justifyContent: "left"
  },
  goBackRowButton: {
    transform: [{ scale: 0.50 }], // Ajusta el tamaño del ícono (menos de 1 para hacerlo más pequeño)
  },
  emptyView:{
    flex: 1,
    color: "white"
  }
})