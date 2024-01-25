import React, { useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.name !== 'HomeScreen') {
      navigation.navigate('HomeScreen');
    }
  }, []);

  const handleHomePress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleHeartPress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const handleCartPress = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={handleHomePress} style={[styles.footerButton, route.name === 'HomeScreen' && styles.activeButton]}>
        <FontAwesome name="home" size={24} color={route.name === 'HomeScreen' ? 'red' : 'black'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHomePress} style={[styles.footerButton, route.name === 'HomeScreen' && styles.activeButton]}>
        <FontAwesome name="heart" size={20} color={route.name === 'HomeScreen' ? 'black' : 'red'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfilePress} style={[styles.footerButton, route.name === 'Profile' && styles.activeButton]}>
        <FontAwesome name="user" size={24} color={route.name === 'Profile' ? 'red' : 'black'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCartPress} style={[styles.footerButton, route.name === 'CartScreen' && styles.activeButton]}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
      {/* Add other buttons here */}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    fontWeight: 'bold',
  },
});