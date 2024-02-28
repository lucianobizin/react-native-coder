import { SafeAreaView, StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { fontCollection } from "./src/utils/global/fonts.js"
import colors from './src/utils/global/colors.js'
import { store } from "./src/app/store.js"
import { Provider } from 'react-redux'


import MainNavigator from "./src/navigation/MainNavigator.js"

const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null

  // La función del useEffect se ejecuta cuando elcomponente se renderiza y cuando cambia lo de adentro []
  // useEffect( () => {console.log(categorySelected)}, [categorySelected])

  return (

    // Por más que sean pantallas siguen siendo componentes
    // Todo lo que está dentro de provider tendrá acceso al store
    <>
        <StatusBar backgroundColor={colors.secondary} />
        <Provider store={store}>
          <MainNavigator />
        </Provider>
    </>
  )
}

export default App