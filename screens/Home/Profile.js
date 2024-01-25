import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile() {
  const avatarImage = require('../../images/1.jpg'); 

  const userProfile = {
    fullName: 'Tạ Xuân Bắc',
    dateOfBirth: '13-05-2003',
    address: '51/52, Trần Hưng Đạo , Long Xuyên, An Giang',
  };

  return (
    <View style={styles.container}>
      <Image source={avatarImage} style={styles.avatar} />
      <Text style={styles.label}>Họ và tên:</Text>
      <Text style={styles.text}>{userProfile.fullName}</Text>
      <Text style={styles.label}>Ngày sinh:</Text>
      <Text style={styles.text}>{userProfile.dateOfBirth}</Text>
      <Text style={styles.label}>Địa chỉ:</Text>
      <Text style={styles.text}>{userProfile.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 16,
  },
});