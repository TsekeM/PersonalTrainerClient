import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/register/Register";
import ConfirmEmailScreen from "./src/screens/reset password/ConfirmEmailScreen";
import OTPScreen from "./src/screens/reset password/OTPScreen";
import PasswordRestSuccessScreen from "./src/screens/reset password/PasswordRestSuccessScreen";
import ResetPasswordScreen from "./src/screens/reset password/ResetPasswordScreen";
import SlashScreen from "./src/screens/SlashScreen";
import RegisterStep2 from "./src/screens/register/RegisterStep2";
import OTPRegisterVerification from './src/screens/register/OTPRegisterVerification'
import LandingPage from "./src/screens/LandingPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";

// Client profile
import EditUserProfile from './src/screens/client profile/EditUserProfile';
import EditClientBMI from './src/screens/client profile/EditClientBMI';
import EditClientPersonalDetails from './src/screens/client profile/EditClientPersonalDetails';
import EditUserDescription from './src/screens/client profile/EditUserDescription';

// Personal Trainer profile
import PersonaTrainerProfile from './src/screens/personal trainer profile/PersonaTrainerProfile';
import EditTrainerPersonalDetails from './src/screens/personal trainer profile/EditTrainerPersonalDetails';
import EditTrainerDescription from './src/screens/personal trainer profile/EditTrainerDescription';
import EditPersonaTrainerProfile from './src/screens/personal trainer profile/EditPersonaTrainerProfile';
import TrainerSpecifications from './src/screens/personal trainer profile/TrainerSpecifications';
import TrainerLanding from "./src/screens/personal trainer profile/TrainerLanding";
import TrainerHome from "./src/screens/personal trainer profile/TrainerHome";
const Stack = createStackNavigator();

export default function App() {
  const [displaySplash, setDisplaySplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplaySplash(false);
    }, 5000);
  });

  // PersonalTrainerProfile

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={displaySplash ? SlashScreen : Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OTP"
          component={OTPScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ResetPassword"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ResetPasswordSuccess"
          component={PasswordRestSuccessScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Splach"
          component={SlashScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={LandingPage}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterStep2"
          component={RegisterStep2}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="OTPregister"
          component={OTPRegisterVerification}
        />

        {/* Client profile */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditUserProfile"
          component={EditUserProfile}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditClientBMI"
          component={EditClientBMI}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditClientPersonalDetails"
          component={EditClientPersonalDetails}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditClientDescription"
          component={EditUserDescription}
        />

        {/* Personl trainer profile */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="TrainerLanding"
          component={TrainerLanding}
        />
        {/*  */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="TrainerHome"
          component={TrainerHome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalTrainerProfile"
          component={PersonaTrainerProfile}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditTrainerDescription"
          component={EditTrainerDescription}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditPersonaTrainerProfile"
          component={EditPersonaTrainerProfile}
        />


        <Stack.Screen
          options={{ headerShown: false }}
          name="EditTrainerPersonalDetails"
          component={EditTrainerPersonalDetails}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="EditTrainerSpecification"
          component={TrainerSpecifications}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
