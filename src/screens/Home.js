import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories.js'


const Home = ({navigation}) => {

    return (
        <>
        
            <Categories navigation={navigation}/>

        </>
    )
}

export default Home

const styles = StyleSheet.create({})