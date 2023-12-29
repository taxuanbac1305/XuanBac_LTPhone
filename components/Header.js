import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import Search from '../screens/Home/Search';
export default function Header() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='blue'></StatusBar>
0.

            <View style={styles.Title1}>
                <Search></Search>
                <View style={styles.Title}>
                    <View>
                        <Text style={styles.textTitle}>Messi Store</Text>
                    </View>
                    <View style={styles.Logo}>
                        <Image style={styles.logo} source={require('../images/1.jpg')} />
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    Logo: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    logo: {
        width: 100,
        height: 100,

    },
    container: {
        marginTop: 10,
    },
    Title: {
        paddingTop: 40,
        paddingLeft: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textTitle: {
        color: "blue",
        fontWeight: "700",
        fontSize: 30,
    },

});

