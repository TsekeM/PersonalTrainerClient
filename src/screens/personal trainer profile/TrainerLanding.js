import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TrainerHome from './TrainerHome';


const Drawer = createDrawerNavigator();

const TrainerLanding = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='TrainerLandingHome' component={TrainerHome} options={{ headerTitle:''}}  />
    </Drawer.Navigator>
  )
}

export default TrainerLanding