import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories.js'
import Counter from '../components/Counter.js'


const Home = ({navigation}) => {

    return (
        <>
            <Counter/>
            <Categories navigation={navigation}/>

        </>
    )
}

export default Home

const styles = StyleSheet.create({})