import React from 'react';
import { View, ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import Search from './Search';

export default function HomeScreen() {
    return (
        <>
        
            <ScrollView>
                <View>
                    <ListCategory></ListCategory>
                    <ListProduct></ListProduct>
                </View>
            </ScrollView>
        </>

    );
}