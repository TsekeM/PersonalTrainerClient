import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
import Home from './Home';
import Notifications from './Notifications';
import Bookings from './Bookings';
import UserProfile from './client profile/UserProfile';
import Settings from './Settings';
import ViewPersonalTrainers from './Booking process/ViewPersonalTrainers';

import { getItem } from '../utils/Sorage';


const Drawer = createDrawerNavigator();

const LandingPage = (route, navigation) => {

  const [clientProfile, setClientProile] = useState();

  const [clientId, setClientId] = useState();


  let tempProfile = {};


  const getProfile = async () =>{
    setClientProile(JSON.parse(await getItem('profile')))
    tempProfile = JSON.parse(await getItem('profile'))

    console.log('====================================');
    console.log('use state profile ', clientProfile);
    console.log('====================================');

    console.log('====================================');
    console.log('temp variable profile ', tempProfile.clientId );
    console.log('====================================');

  }

  useEffect(()=>{
    getProfile();
  },[])

 

  return (

        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} options={{ headerTitle:''}}  />
            <Drawer.Screen name='Notifications' component={Notifications} options={{headerTitle:''}} />
            <Drawer.Screen name='Book Now' component={ViewPersonalTrainers} options={{headerTitle:'Schedule a Personal Trainer'}} />
            <Drawer.Screen name='Bookings' component={Bookings} options={{headerTitle:''}} />
            <Drawer.Screen name='Profile' component={UserProfile} options={{headerTitle:'Profile', headerShown: false}}  initialParams={{ id: clientId}}   />
            <Drawer.Screen name='Settings' component={Settings} options={{headerTitle:''}} />
        </Drawer.Navigator>
    
  )
}



export default LandingPage  
