import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Auth from './Auth';
import { useNavigation } from '@react-navigation/native';
const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(Auth);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password and confirmation password are not the same');
    } else if (email === '' || password === '' || confirmPassword === '') {
      setErrorMessage('Please complete all information');
    } else {
      register(email, password);
      Alert.alert('Register successful');
      navigation.replace('Login');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/1.jpg')} />
        <Text style={styles.title}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => emailInput.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          ref={(input) => (emailInput = input)}
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => emailInput.focus()}
          blurOnSubmit={false}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <FontAwesome name="eye" size={20} color="#ccc" style={styles.eyeIcon} />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry
          />
          <FontAwesome name="eye" size={20} color="#ccc" style={styles.eyeIcon} />
        </View>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 50,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
  },
  eyeIcon: {
    marginRight: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;