import React from 'react';
import { View, ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import Search from './Search';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import LoginScreen from 'screens/LoginScreen';

export default function HomeScreen() {
    return (
        <>
           {/* <LoginScreen></LoginScreen> */}
            <Header></Header>
            <ScrollView>
                <View>
                    <ListProduct></ListProduct>
                </View>
            </ScrollView>
            <Footer></Footer>
        </>

    );
}