import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
export default function ListCategory() {
    return (
        <>
        
            <View style={styles.catetitle}>
                <Text style={{ fontSize: 20, color: "blue", fontWeight: "600" }}>Adidas</Text>
                <Text style={{ fontSize: 15 }}>Xem thêm</Text>
            </View>
            <SafeAreaView style={styles.contain}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../../images/2.jpg')} /></View>
                    <Text>Shoes</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../../images/3.jpg')} /></View>
                    <Text>Shoes</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../../images/4.jpg')} /></View>
                    <Text>Shoes</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../../images/5.jpg')} /></View>
                    <Text>Shoes</Text>
                </View>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    catepic: {
        width: 60,
        height: 60,
    },
    contain: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item: {
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 10,
    },
    catetitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

});