import React from 'react'
// import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
  } from "react-native";

const TrainerHome = () => {
  return (    
  <View style={styles.container}>
    <ImageBackground source={require('../../../assets/trainerProfile.jpg')} style={styles.backgroundImage}>

    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //   marginRight:20,
      //   marginLeft:20,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuButton: {
        position: 'absolute',
        top: 40, // Adjust the top margin to fit your design
        right: 20, // Adjust the right margin to fit your design
        padding: 10,
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mainText: {
        color: '#EA1414',  // Adjust color to ensure visibility on your background
        fontSize: 30,  // Adjust size as needed
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'left',
        textAlign: 'left',
    },
    mainTextSecond: {
        color: 'white',  // Adjust color to ensure visibility on your background
        fontSize: 30,  // Adjust size as needed
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 30,
    },
    mainTextSmall: {
        color: 'white',  // Adjust color to ensure visibility on your background
        fontSize: 18,  // Adjust size as needed
        textAlign: 'left',
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 1 },
        elevation: 2,
        width: '95%',
        alignContent: 'center',
        alignItems: 'center',
    },
    exploreButton: {
        backgroundColor: '#0215E900',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    exploreButtonText: {
        color: '#FFFFFF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '110%',
        alignContent: 'center',
        alignItems: 'center',
    },
  });

export default TrainerHome