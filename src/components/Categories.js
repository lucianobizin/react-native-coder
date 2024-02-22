import { StyleSheet, FlatList, Dimensions } from 'react-native'
import categories from "../utils/data/categories.json"
import CardCategory from './CardCategory'


const Categories = ({navigation}) => {
    return (
        <FlatList
            data={categories}
            numColumns={2}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CardCategory
                item={item}
                navigation={navigation}
                cardContainer={styles.cardContainer}
                />
            )}
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width / 2 - 20,
        margin: 10,
    },
}) 