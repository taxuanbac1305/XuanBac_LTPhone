import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import SingleProductScreen from './screens/Home/SingleProductScreen';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Header></Header>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerTitle: 'Trang chủ' }} 
          />
          <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};