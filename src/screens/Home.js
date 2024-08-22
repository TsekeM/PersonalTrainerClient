import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
  } from "react-native";

import { Input, Button } from 'galio-framework';
import { colours } from '../utils/Colours';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {

    const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";

    const [useProfile, setUserProfile] = useState();

    useEffect(()=>{
        getUserProfile()
    },[])

    const getUserProfile = () =>{
        fetch(`${baseUrl}/client/56ff5826-a532-4e48-985f-7f47b102209a`)
        .then((resp) => resp.json())
        .then((json) => {
            setUserProfile(json)
            console.log('====================================');
            console.log(json);
            console.log('====================================');
        })
        .catch((error) => console.error(error))
        // .finally(() => setLoading(false));
    }

    const navigateToPersonalTrainers = () =>{
        navigation.navigate("Landing");
    }

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/landingPic.png')} style={styles.backgroundImage}>

            <View>
                <Text style={styles.header}>
                    Find the Perfect Trainer
                </Text>
            </View>

            <View style={styles.subTitleConatiner}>
                <Text style={styles.subTitle}>
                    Let's get Started! Explore the app to find your perfect trainer, set your goals, and start your 
                    personalized fitness program today!
                </Text>
            </View>

            <View>
            
                <Button color={colours.white} round style={styles.bookButton}><Text style={styles.bookNowText}>Book Now</Text></Button>
                <Button color='transparent' round style={styles.exploreButton}>Explore</Button>

            </View>
            
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      justifyContent: 'flex-end',
    //   alignItems: 'center',
      resizeMode: 'contain',
    //   marginBottom : 20,
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
  buttonText: {
    //   color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
  },
  exploreButtonText: {

    backgroundColor: '#00000000',
    //   color: '#FFFFFF',
    //   borderColor: 'white',
    //   borderWidth: 1,
    //   borderRadius: 20,
    //   paddingVertical: 10,
    //   paddingHorizontal: 20,
    //   width: '110%',
    //   alignContent: 'center',
    //   alignItems: 'center',
  },
  bookButton : {
    width : '90%',
    marginBottom: 20,
  },
  exploreButton : {
    width : '90%',
    marginBottom: 40
  },
  header: {
    color: colours.red,
    fontSize : 36
  },
  subTitle: {
    color:colours.white,
    fontSize: 24
  },
  bookNowText: {
    color: colours.black,
    fontSize: 16
  },
  headerContainer : {
    width : 300,
  },
  subTitleConatiner : {
    width : 300,
    // textAlign: 'left'
  },

});

export default Home