import { StyleSheet, SafeAreaView, StatusBar, useWindowDimensions } from 'react-native'
import Home from './src/screens/Home.js'
import { useEffect, useState } from 'react'
import ProductsByCategory from "./src/screens/ProductsByCategory.js"
import { useFonts } from "expo-font"
import { fontCollection } from "./src/utils/global/fonts.js"
import ProductDetail from "./src/screens/ProductDetail.js"
import colors from './src/utils/global/colors.js'

const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  const [categorySelected, setCategorySelected] = useState("")

  const [productId, setProductId] = useState(0)

  const [portrait, setPortrait] = useState(true) // vertical

  const {width, height} = useWindowDimensions()

  useEffect( () => {
    if(width > height) setPortrait(false)
    else setPortrait(true)
  , [width, height]})

  if (!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectProductId = (id) => {
    setProductId(id)
  }

  // La función del useEffect se ejecuta cuando elcomponente se renderiza y cuando cambia lo de adentro []
  // useEffect( () => {console.log(categorySelected)}, [categorySelected])

  return (

    // Por más que sean pantallas siguen siendo componentes
    <>
      <StatusBar backgroundColor={colors.secondary}/>
      <SafeAreaView style={styles.container}>

        {categorySelected ?
          productId ? <ProductDetail portrait={portrait} productId={productId} />
            :
            <ProductsByCategory selectProductId={selectProductId} categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
          : <Home selectedCategoryState={selectedCategoryState} />}

      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})