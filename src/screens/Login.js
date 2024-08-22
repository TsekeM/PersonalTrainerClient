import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { Input, Checkbox, Button } from "galio-framework";
import { Link } from "@react-navigation/native";

import { colours } from "../utils/Colours";

import { SlashScreen } from "./SlashScreen";
import { ScrollView } from "react-native-gesture-handler";

import { setItem, removeItem } from "../utils/Sorage";

const Login = ({ navigation }) => {
  const baseUrl = "http://192.168.1.47:8083/personal-trainer-on-call";

  const [displaySplash, setDisplaySplash] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const [password, setPassword] = useState("");
  const [passwordState, setPasswordState] = useState("")
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState();


  const navigateToLanding = () => {
    navigation.navigate("Landing" , {profile});
  };

  const navigateToTrainerLanding = () =>{
    navigation.navigate("PersonalTrainerProfile" , {profile});
  }

  const navigateToForgotPassword = () => {
    navigation.navigate("Register");
  };

  const saveProfile = async (response) =>{
    await setItem('profile' ,JSON.stringify(response) )
  }

  let seen = [];

  const login = async () =>{

    setPasswordState("");
    setUsernameState("")
    if(password === "" && username ===""){
      setPasswordState("error");
      setUsernameState("error");
      return
    }
    else if(password === ""){
        setPasswordState("error");
        return
    } else if (username === ""){
      setUsernameState("error");
      return
    }


    setLoading(true)

  fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("response from login:   ", responseData);
      setProfile('profile',responseData)
      saveProfile(responseData);

      if(responseData.client === null){
        Alert.alert('Error', responseData.message, [
          {
            text: 'Cancel',
            onPress: () => setLoading(false),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => setLoading(false)},
          ])

          setLoading(false)
        
      } else if(responseData.role === "2"){
        console.log("client logging in...");
        // navigate to client landing
        navigateToLanding();
      }else if(responseData.role=== "3"){
        console.log("client logging in...");
        // navigate to personal landing
        navigateToTrainerLanding();
      }
    })
  }

  return (
    <ScrollView style={styles.container}>

      {/* page title */}
      <View style={styles.pageTitle}>
        <Text style={styles.titleText}>
          Welcome back! Glad to see you, Again!{" "}
        </Text>
      </View>

      {/* Email */}
      <Input
        rounded
        style={ usernameState === "error" ? styles.inputError : styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      { usernameState === "error" ? <Text style={styles.passwordErrorText}>Enter a valid email address </Text> : <Text></Text>}

      {/* Password */}
      <Input
        rounded
        style={ passwordState === "error" ? styles.inputPasswordError: styles.inputPassword }
        placeholder="Password"
        right
        icon="eye"
        family="antdesign"
        iconSize={14}
        iconColor={colours.orange}
        // password
        value={password}
        onChangeText={setPassword}
      />

      {passwordState === "error" ? <Text style={styles.passwordErrorText} > Enter a correct password </Text> : <Text></Text>}   

      {/* Remember me */}
      <View style={styles.rememberMeContainer}>
        <Checkbox color={colours.orange} label="Remember Me" />

        <TouchableOpacity onPress={() => navigation.navigate("ConfirmEmail")}>
          <Text style={styles.forgetPasswordText}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      {/* Signin button */}

      {loading?    
      <Button round style={styles.signinButton}>
        lodaing....
      </Button> : 
      
      <Button round style={styles.signinButton} onPress={login}>
      Sign in
    </Button>

      }

      {/* Sign up link */}
      <TouchableOpacity>
        <View style={styles.signUpContainer}>
          <View style={styles.signUpLink}>
            <Text>
              Dont have an account?{" "}
              <Link
                style={styles.forgetPasswordText}
                to={{ screen: "Register" }}
              >
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 20,
  },

  pageTitle: {
    marginTop: 80,
    width: 334,
    height: 80,
  },

  inputPassword: {
    color: colours.input,
    borderColor: colours.inputBorder,
  },

  inputPasswordError : {
    color: colours.input,
    borderColor: colours.red,
  },

  input: {
    marginTop: 20,
    color: colours.input,
    borderColor: colours.inputBorder,
  },

  inputError : {
    marginTop: 20,
    color: colours.input,
    borderColor: colours.red,
  },

  rememberMeContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rememberMeCheckBox: {
    color: colours.red,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  },

  forgetPasswordText: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    color: colours.orange,
  },

  signinButton: {
    marginTop: 20,
    width: "95%",
    backgroundColor: colours.red,
  },

  signUpContainer: {
    flex: 0.1,
    // backgroundColor: colours.orange,
    justifyContent: "center",
    alignItems: "center",
  },

  signUpLink: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  passwordErrorText : {
    color : colours.red,
    marginLeft : 10
  },
});

export default Login;
