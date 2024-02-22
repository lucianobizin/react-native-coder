
import Header from '../components/Header.js';

import Home from "../screens/Home.js"
import ProductDetail from '../screens/ProductDetail.js';
import ProductsByCategory from "../screens/ProductsByCategory.js"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({ route, navigation }) => {
                return {
                    header: () => {
                        return <Header
                            navigation={navigation}
                            title={route.name === "Home" ? "Categorias" :
                                route.name === "ProductsByCategory" ? route.params.categorySelected :
                                    "Detalles"

                            } />
                    }
                }
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack