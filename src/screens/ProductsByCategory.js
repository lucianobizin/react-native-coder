import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from "../utils/data/products.json"
import Header from '../components/Header.js'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory.js'

const ProductsByCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect( () => {
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  }, [categorySelected])

  return (
    <>
      <Header title={categorySelected || "Productos"}/>

      <FlatList
      data={productsFiltered}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductByCategory item={item}/>}
      
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
})