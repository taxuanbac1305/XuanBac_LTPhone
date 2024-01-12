import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function ListCategory({ onPress }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  const handleCategoryPress = (category) => {
    onPress(category);
  };

  return (
    <>
      <View style={styles.catetitle}>
        <Text style={{ fontSize: 20, color: "blue", fontWeight: "600" }}>Danh mục</Text>
        <Text style={{ fontSize: 15 }}>Xem thêm</Text>
      </View>
      <SafeAreaView style={styles.contain}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={{ alignItems: "center" }} onPress={() => handleCategoryPress(category)}>
            <View style={styles.item}>
              <Image style={styles.catepic} source={getImageSource(category)} />
            </View>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </>
  );
}

function getImageSource(category) {
    const nikeImage = require('../../images/nike1.jpg');
const jeweleryImage = require('../../images/nike2.jpg');
const mensClothingImage = require('../../images/nike3.jpg');
const womensClothingImage = require('../../images/nike4.jpg');
 switch (category) {
  case 'electronics':
    return nikeImage;
  case 'jewelery':
    return jeweleryImage;
  case "men's clothing":
    return mensClothingImage;
  case "women's clothing":
    return womensClothingImage;
  default:
    return womensClothingImage;
  }
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