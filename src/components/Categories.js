import { StyleSheet, FlatList, Dimensions } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop.js'
import CardCategory from './CardCategory'


const Categories = ({navigation}) => {

    const {data:categories} = useGetCategoriesQuery()

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