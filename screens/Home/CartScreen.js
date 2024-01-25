import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { updateCartItemCount } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const cartItemsData = await AsyncStorage.getItem('cartItems');
      if (cartItemsData) {
        const parsedCartItems = JSON.parse(cartItemsData);
        setCartItems(parsedCartItems);
        updateCartItemCount(getCartItemCount(parsedCartItems));
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          item.quantity -= 1;
          if (item.quantity === 0) {
            return null;
          }
        }
        return item;
      }).filter(Boolean);

      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      updateCartItemCount(getCartItemCount(updatedCartItems));

    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  };

  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handlePayment = async () => {
    try {
      setCartItems([]);
      setTotalPrice(0);
      await AsyncStorage.setItem('cartItems', JSON.stringify([]));

      console.log('Payment successful');
      setNotification('Payment successful!');
      setShowNotification(true);
    } catch (error) {
      console.log('Error during pay:', error);

      console.log('Payment failed');
      setNotification('Payment failed.');
      setShowNotification(true);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemTitle}>{item.title} ({item.quantity})</Text>
                <Text style={styles.cartItemPrice}>Price: ${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeItemButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
      <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
      <Button title="Pay" onPress={handlePayment} />
      {notification && (
        <Modal
          transparent
          visible={showNotification}
          animationType="fade"
          onRequestClose={closeNotification}
        >
          <View style={styles.notificationContainer}>
            <View style={styles.notificationBox}>
              <View style={styles.notificationBorder}>
                <Text style={styles.notificationText}>{notification}</Text>
              </View>
              <Button title="OK" onPress={closeNotification} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default CartScreen;