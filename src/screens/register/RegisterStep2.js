import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Input, Button } from 'galio-framework';
import { Link } from '@react-navigation/native';

import { colours } from '../../utils/Colours.js';

const RegisterStep2 = ({ route, navigation }) => {
  const baseUrl = 'http://192.168.0.147:8083/personal-trainer-on-call';

  // Safely accessing route params
  const formDataFromRoute = route?.params?.formData || {};

  const [formData, setFormData] = useState(formDataFromRoute);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const navigateToOtp = () => {
    navigation.navigate('OTPregister');
  };

  const navigateToStep1 = () => {
    navigation.navigate('Register');
  };

  const register = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const payload = {
      ...formData,
      emailAddress: email,
      password: password,
    };

    try {
      console.log(payload);
      console.log(`${baseUrl}/register/clients`);

      const response = await fetch(`${baseUrl}/register/clients`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // navigate to OTP verification
        navigateToOtp();
      } else {
        const errorResponse = await response.json();
        console.log('Registration failed:', errorResponse);
        Alert.alert('Registration Failed', 'Please check your details and try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Registration Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Button
        onlyIcon
        icon="left"
        iconFamily="antdesign"
        onPress={navigateToStep1}
        color="#F5F5F5"
        iconColor="#000"
        style={styles.backButton}
      >
        Back
      </Button>

      <View style={styles.pageTitle}>
        <Text style={styles.titleText}>Step 2</Text>
      </View>

      {/* Ensure all fields are visible */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => handleInputChange('address', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Suburb"
          value={formData.suburb}
          onChangeText={(text) => handleInputChange('suburb', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Province"
          value={formData.province}
          onChangeText={(text) => handleInputChange('province', text)}
        />

        <Input
          style={styles.input}
          rounded
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          password
          viewPass
        />

        <Input
          style={styles.input}
          rounded
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          password
          viewPass
        />
      </View>

      <Button round style={styles.signupButton} onPress={register}>
        Sign up
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.siginLink}>
          <Text>
            Already have an account?{' '}
            <Link style={styles.forgetPasswordText} to={{ screen: 'Login' }}>
              Sign in
            </Link>
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',  // Ensure the background is set correctly
  },
  backButton: {
    marginTop: 20,
  },
  pageTitle: {
    marginLeft: 20,
    marginTop: 20,
    width: 334,
    height: 80,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    color: colours.input,
    borderColor: colours.inputBorder,
    marginBottom: 20,
    borderWidth: 1, // Ensure a border is visible
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  signupButton: {
    marginTop: 20,
    width: '95%',
    backgroundColor: colours.red,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  forgetPasswordText: {
    textDecorationLine: 'underline',
    color: colours.orange,
  },
  siginLink: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterStep2;
