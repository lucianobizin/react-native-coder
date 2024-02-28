import { StyleSheet, FlatList, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory.js'
import Search from '../components/Search.js'
import { useGetProductsByCategoryQuery } from '../app/services/shop.js'

const ProductsByCategory = ({navigation, route }) => {

  const {categorySelected} = route.params

  const {data: products, isError, isLoading, isSuccess, error} = useGetProductsByCategoryQuery(categorySelected)

  const [productsFiltered, setProductsFiltered] = useState([])

  const [keyword, setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(productsFiltered.filter(product => {

      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()

      return productTitleLower.includes(keywordLower)
    }
    ))
  }, [categorySelected, keyword, products]) // Si cambia alguno de estos que ejecute la función de nuevo

  if(isLoading) return <View><Text>Loading...</Text></View>

  return (
    <>
    
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={products}
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