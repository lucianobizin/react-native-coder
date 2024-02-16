import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories.js'


const Home = ({selectedCategoryState}) => {

    return (
        <>
            <Header
                title={'Frutizia'} />
            <Categories
            selectedCategoryState={selectedCategoryState}/>

        </>
    )
}

export default Home

const styles = StyleSheet.create({})