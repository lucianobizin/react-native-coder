import {Entypo} from "@expo/vector-icons"

import { StyleSheet, Text, View } from 'react-native'

const TabBarIcon = ({icon, text, focused}) => {
    return (
        <View style={styles.container}>
            <Entypo name={icon} size={25} color={focused ? "white" : "gray"}/>
            <Text style={[styles.text, !focused && styles.textFocused]}>{text}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 15
    },
    textFocused: {
        color: "gray",
        textAlign: "center",
        fontSize: 15
    }
})