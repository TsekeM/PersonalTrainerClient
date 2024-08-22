import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Picker, Alert } from 'react-native';
import axios from 'axios';

export default function RegistrationPage({ navigation }) {
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    contactNumber: '',
    //emailAddress: '',
    password: '',
    gender: '',
    address: '',
    suburb: '',
    province: '',
    postalCode: ''
  });

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 101 }, (_, i) => (1900 + i).toString());

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (!selectedDay || !selectedMonth || !selectedYear) {
      Alert.alert('Error', 'Please select a valid date of birth');
      return;
    }
    const monthIndex = months.indexOf(selectedMonth) + 1;
    const formattedMonth = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
    const formattedDay = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
    const dateOfBirth = `${selectedYear}-${formattedMonth}-${formattedDay}`;
    const updatedFormData = { ...formData, dateOfBirth };

    setFormData(updatedFormData);
    setShowSecondPart(true);

    // Navigate and pass formData to RegisterStep2
    navigation.navigate('RegisterStep2', { formData });
  };

  const handleSubmit = async () => {
    if (formData.password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const payload = { ...formData };

    try {
      const response = await axios.post('http://localhost:8082/chat2dr/register/clients', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const responseData = response.data;
      console.log('Registration successful:', responseData);
      navigation.navigate('OTP', { email: formData.emailAddress });
    } catch (error) {
      console.error('Error registering:', error);
      Alert.alert('Registration Failed', 'Please check your details and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      {!showSecondPart ? (
        <View>
          <Text style={styles.welcomeText}>Hello! Register to get started</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Surname"
            value={formData.surname}
            onChangeText={(text) => handleInputChange('surname', text)}
          />

          <View style={styles.dateContainer}>
            <Picker
              selectedValue={selectedDay}
              style={styles.datePicker}
              onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
              <Picker.Item label="Day" value="" />
              {days.map((day) => (
                <Picker.Item key={day} label={day} value={day} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedMonth}
              style={styles.datePicker}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            >
              <Picker.Item label="Month" value="" />
              {months.map((month, index) => (
                <Picker.Item key={index} label={month} value={month} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedYear}
              style={styles.datePicker}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
            >
              <Picker.Item label="Year" value="" />
              {years.map((year) => (
                <Picker.Item key={year} label={year} value={year} />
              ))}
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChangeText={(text) => handleInputChange('contactNumber', text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={(text) => handleInputChange('gender', text)}
          />
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>
              Already have an account? <Text style={styles.signInLink}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.stepText}>Step 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Suburb"
            secureTextEntry
            value={formData.suburb}
            onChangeText={(text) => handleInputChange('suburb', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Province"
            value={formData.province}
            onChangeText={(text) => handleInputChange('province', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>
              Already have an account? <Text style={styles.signInLink}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'flex-end',
  },
  logo: {
    width: 50,
    height: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePicker: {
    width: '30%',
    height: 50,
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e30b0b',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e30b0b',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: '#555',
  },
  signInLink: {
    color: '#ff4D00',
    fontWeight: 'bold',
  },
});