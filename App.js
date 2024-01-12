import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import SingleProductScreen from './screens/Home/SingleProductScreen';
import Header from './components/Header';
import CartScreen from './screens/Home/CartScreen';
import { CartProvider } from './screens/Home/CartContext';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
              name="LoginScreen" 
              component={LoginScreen}
              options={{ headerShown: false }} 
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerTitle: 'Trang chủ' }}
            />
            <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerTitle: 'Giỏ hàng' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
     
      </View>
    </CartProvider>
  );
};