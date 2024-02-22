import { StyleSheet, Text, View, Pressable } from 'react-native'
import {AntDesign} from "@expo/vector-icons"

const Header = ({title="Frutizia", HeaderStyle, navigation}) => {
  return (
    <View style={[HeaderStyle, styles.container]}>
      {navigation.canGoBack() &&
            <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="black"/>
          </Pressable>}
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    text: {
        fontSize: 24
    },
    goBack: {
      position: "absolute",
      left: 10,
      bottom: 15
    }

})