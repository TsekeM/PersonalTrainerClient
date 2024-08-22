import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';


import { View,Text,Image, Platform, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import {logoImage}  from  './../../assets/redLogo.png'


const SlashScreen = () => {
  return ( 

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Splash Screen.png')} style={styles.backgroundImage}>

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#840B0B',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 50,
      height: 400,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    
  });

export default SlashScreen