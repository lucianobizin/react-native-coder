import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import colors from '../utils/global/colors.js'


const ProductByCategory = ({item, selectProductId}) => {

    // Si la img en local => source={require("../../..etc")}

    const {width, height} = useWindowDimensions()
    return (
        <Pressable style={styles.container} onPress={() => selectProductId(item.id)}>
            <Image style={styles.image} source={{uri: item.thumbnail}} resizeMode='cover'/>
            <Text style={[styles.text, width > 490 ? {fontSize:24} : {fontSize: 16}]}>{item.id} {item.title}</Text>
        </Pressable>
    )
}

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
    text: {
        width: "60%",
        fontSize: 16,
    },
    image:{
        minWidth: 90,
        minHeight: 90,
        borderRadius: 5
    }
})