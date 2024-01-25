import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import SingleProductScreen from './screens/Home/SingleProductScreen';
import Header from './components/Header';
import CartScreen from './screens/Home/CartScreen';
import { CartProvider } from './screens/Home/CartContext';
import Login from './screens/Login';
import Payment from './screens/Home/Payment';
import Profile from './screens/Home/Profile';
import RegistrationScreen from './screens/RegistrationScreen ';
import Auth from './screens/Auth';

const Stack = createStackNavigator();

export default function App() {
  const [registeredUser, setRegisteredUser] = useState(null);

  const register = (email, password) => {
    setRegisteredUser({ email, password });
  };

  const login = (email, password) => {
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      return true;
    }
    return false;
  };
  return (

    <Auth.Provider value={{ login, register }}>
      <CartProvider>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='RegistrationScreen'
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Home' }}
              />
              <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{ headerTitle: 'Product detail' }} />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{ headerTitle: 'Cart' }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerTitle: 'Trang cá nhân' }}
              />

            </Stack.Navigator>
          </NavigationContainer>

        </View>
      </CartProvider>

    </Auth.Provider>
  );
};