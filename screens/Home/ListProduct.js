import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ListCategory from './ListCategory';

export default function ListProduct() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const getProductsByCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const handleProductPress = (product) => {
    navigation.navigate('SingleProduct', { product, category: selectedCategory });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    getProductsByCategory(category);
  };

  const handleSeeMorePress = () => {
    getAllProduct();
  };

  return (
    <View>
      <ListCategory onPress={handleCategoryPress} />
      <View style={styles.catetitle}>
        <Text style={styles.title}>Sản phẩm</Text>
        <TouchableOpacity onPress={handleSeeMorePress}>
          <Text style={styles.seeMore}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {products.map((product) => (
            <TouchableOpacity
              style={styles.item}
              key={product.id}
              onPress={() => handleProductPress(product)}
            >
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: product.image }} />
              </View>
              <View style={styles.des}>
                <Text style={styles.des_text}>{product.title}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
                  <View style={styles.ratingContainer}>
                    <FontAwesome name="star" style={styles.starIcon} />
                    <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                    <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  catetitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 16,
    color: 'blue',
  },
  item: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  imgContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  des: {
    padding: 8,
  },
  des_text: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  starIcon: {
    color: 'gold',
    fontSize: 16,
    marginRight: 2,
  },
  ratingValue: {
    color: 'black',
    marginRight: 2,
  },
  ratingCount: {
    color: 'black',
  },
});