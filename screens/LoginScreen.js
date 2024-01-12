import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [value, setValue] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === 'bac@gmail.com' && password === '1305') {
      navigation.replace('HomeScreen');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#00f' />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/1.jpg')} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
        <View style={styles.policyContainer}>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <FontAwesome name="envelope-open" size={30} color='#00f' style={styles.icon} />
          <TextInput
            placeholder='Email Address'
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <FontAwesome name="unlock" size={40} color='#00f' style={styles.icon} />
          <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxGroup}>
            <Checkbox
              disabled={false}
              value={value}
              onValueChange={(newValue) => setValue(newValue)}
            />
            <Text style={styles.checkboxText}>Remember my choice</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => Alert.alert('Hi BAC')}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 80,
    width: 150,
    height: 150,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#00f',
  },
  policyContainer: {
    flexDirection: 'row',
  },
  policyLink: {
    color: '#00f',
  },
  form: {
    marginTop: 30,
  },
  inputGroup: {
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    height: 50,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    top: 10,
    zIndex: 1000,
  },
  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    paddingLeft: 10,
  },
  forgotPassword: {
    color: '#00f',
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#00f',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});