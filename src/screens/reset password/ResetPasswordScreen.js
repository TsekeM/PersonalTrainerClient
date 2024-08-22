import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'galio-framework'
import { customStyles } from '../../utils/Styles'

import axios from 'axios'

import { colours } from '../../utils/Colours'

const ResetPasswordScreen = ({route, navigation}) => {


  const {otpValue} = route.params;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPassword = async () => {
    
  const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";

    const payload = {
      otpValue: otpValue,
      password: password
    }

    console.log(payload);

 
    try {
      console.log(`${baseUrl}/reset/password`);

      const response = await fetch(`${baseUrl}/reset/password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigateToLogin();
      } else {
        console.log("Did it work? ", response.ok);
      }
    } catch (error) {
      console.error("Confirm email error:", error);
      // Handle errors here, such as showing a notification to the user
    }

  }

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={customStyles.container}>
      {/* Back button */}
      <View style={customStyles.backButton}>

      </View>

      <View style={styles.pageTitle}>
         {/* Page title */}
        <Text style={styles.titleText}>Create new password</Text>

        {/* Page discription */}
        <Text style={styles.descriptionText}>
          Your new password must be unique from those previously used
        </Text>
      </View>


      {/* Password */}
      <Input 
        rounded 
        style={customStyles.email} 
        placeholder="Enter password"
        value={password} 
        onChangeText={setPassword}/>

      
      {/* Confrim */}
      <Input 
        rounded 
        style={customStyles.email} 
        placeholder="Confirm password" 
        value={confirmPassword}
        onTextInput={setConfirmPassword}
        />

      {/* Send button */}
      <View style={customStyles.eg}>

      </View>
      <Button 
        round 
        style={customStyles.sendCodeButton}
        onPress={resetPassword}
        >Reset password</Button>

    </View>
  );
  
}


const styles = StyleSheet.create({

  pageTitle: {
  marginLeft:20,
  marginTop: 80,
  marginBottom:20,
  width:365,
  height:80,
  },

  titleText:{
    fontWeight: "bold",
    fontSize: 32,
    height: 40
  },

  descriptionText:{
    marginRight: 70,
    marginTop: 20,
    lineHeight: 25,
    color: colours.textDescription,
    // height: 50
  }

})

export default ResetPasswordScreen