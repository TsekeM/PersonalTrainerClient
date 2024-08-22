import React from 'react'

import {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'galio-framework'

import { customStyles } from './../../utils/Styles'


import { colours } from './../../utils/Colours'

const OTPRegisterVerification = ({navigation}) => {
  
  const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";
    
    const [otpValue, setOtpValue] = useState("");
  
    const [timer, setTimer] = useState(new Date)
  
    const [otpExpired, setOtpExpired] = useState(false);
  
  
    const toggleExpired = () =>{
      setOtpExpired(!otpExpired);
    }

    const navigateToLogin = ()=>{
        navigation.navigate('Login', {
          otpValue: otpValue
        });
      }
    
      const handleSubmit = async () => {
    
        const payload = {
          otpValue: otpValue,
        };
    
        console.log(payload);
    
        try {
          console.log(`${baseUrl}/validate/otp`);
    
          const response = await fetch(`${baseUrl}/validate/otp`, {
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
     
      };

    return (
        <View style={customStyles.container}>
          {/* Back button */}
          {/* <View style={customStyles.backButton}>
    
          </View> */}
    
          
          <View style={styles.pageTitle}>
             {/* Page title */}
            <Text style={styles.titleText}>OTP Verification.</Text>
    
            {/* Page discription */}
            <Text style={styles.descriptionText}>
              Enter the 4 digit Verification code we just sent to your email address. 
            </Text>
          </View>
    
          {otpExpired ? (      
             <View style={styles.otpExpired}>
            <Text style={styles.otpExpiredInValidText}>OTP exired {timer.getMilliseconds()}</Text>
          </View>
        ) : (     
           <View style={styles.otpExpired}>
            <Text  style={styles.otpExpiredValidText}>OTP display timer for 5 seconds {timer.getMilliseconds} </Text>
          </View>
        ) }
    
          <Input
            rounded
            value={otpValue}
            onChangeText={setOtpValue}
            style={customStyles.email}
            placeholder="Enter OTP"
            // autoComplete={false}
            type='numeric'
          />
    
    
          <Button round style={customStyles.sendCodeButton} onPress={handleSubmit}>Verify</Button>
    
          {/* Link  */}
          <View style={customStyles.resendLink}>
            <Text>Didn't recieve the OTP? <Text style={customStyles.resendLinkText}> Resend </Text> </Text>
          </View>

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
    },
  
    otpExpired:{
      marginTop:20,
      alignItems:'center'
    },
  
    otpExpiredValidText:{
      color:'green'
    },
    otpExpiredInValidText:{
      color:'red'
    },
  
  })

export default OTPRegisterVerification