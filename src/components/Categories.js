import { StyleSheet, FlatList, Dimensions } from 'react-native'
import categories from "../utils/data/categories.json"
import CardCategory from './CardCategory'


const Categories = ({selectedCategoryState}) => {
    return (
        <FlatList
            data={categories}
            numColumns={2}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CardCategory
                item={item}
                cardContainer={styles.cardContainer}
                selectedCategoryState={selectedCategoryState}/>
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