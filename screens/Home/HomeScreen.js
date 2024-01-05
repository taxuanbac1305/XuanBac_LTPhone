import React from 'react';
import { View, ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import Search from './Search';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function HomeScreen() {
    return (
        <>
        <Header></Header>
            <ScrollView>
                <View>
                    <ListCategory></ListCategory>
                    <ListProduct></ListProduct>
                </View>
            </ScrollView>
            <Footer></Footer>
        </>

    );
}