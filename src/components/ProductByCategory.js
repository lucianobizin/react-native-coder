import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utils/global/colors.js'


const ProductByCategory = ({item}) => {

    // Si la img en local => source={require("../../..etc")}
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.thumbnail}} resizeMode='cover'/>
            <View style={styles.productText}>
            {/* <Text style={styles.text}>{item.category_id}</Text> */}
            <Text style={styles.text}>{item.name}</Text>
            {item.unit_price ? <Text style={styles.text}>{item.unit_price}</Text> : null}
            <Text style={styles.text}>{item.reference_price} {item.reference_format}/€</Text>
            </View>
        </View>
    )
}

/*
        "name": "Banana",
        "category_id": 853,
        "thumbnail": "https://prod-mercadona.imgix.net/images/69edef3541bbf3f4b7173c9d617a5698.jpg?fit=crop&h=300&w=300",
        "unit_size": 0.18,
        "bulk_price": "1.45",
        "unit_price": "0.26",
        "size_format": "kg",
        "reference_price": "1.450",
        "reference_format": "kg",
        "increment_bunch_amount": 1.0
*/

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    productText:{
      width: "60%",
      justifyContent: "center",
      alignItems: "center"
    }, 
    text: {
        width: "100%",
        fontSize: 16,
    },
    image:{
        width: 90,
        height: 90,
        borderRadius: 5
    }
})