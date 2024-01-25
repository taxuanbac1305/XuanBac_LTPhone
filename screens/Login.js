import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Auth from './Auth';
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(Auth);


  const handleLogin = () => {
  

    const loginSuccess = login(email, password);
    if (loginSuccess) {
        Alert.alert('Login Successful');
        navigation.replace('HomeScreen');
    }
    if (!loginSuccess) {
        Alert.alert('Email or password incorrect!');
    }

  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/1.jpg')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
        //  value={password}
          onChangeText={(text) => setPassword(text)}
          //onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="facebook" size={30} color="blue" style={styles.icon} />
          <Text style={styles.optionText}>FaceBook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="google" size={30} color="green" style={styles.icon} />
          <Text style={styles.optionText}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  option: {
    width: '45%',
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'blue',

  },
  optionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  version: {
    fontSize: 12,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  registerContainer: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  registerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 5,
    marginBottom: 10,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
});

export default Login;