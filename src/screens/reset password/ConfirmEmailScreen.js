import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Input, Button, Icon } from "galio-framework";
import { Link } from "@react-navigation/native";

import { customStyles } from "../../utils/Styles";
import { colours } from "../../utils/Colours";
import { ScrollView } from "react-native-gesture-handler";

const ConfirmEmailScreen = ({ navigation }) => {
  const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const navigateToOTP = () => {
    navigation.navigate("OTP");
  };

  const [email, setEmail] = useState("");

  const confirmEmail = async () => {
    const payload = {
      emailAddress: email,
    };

    console.log(payload);

    try {
      console.log(`${baseUrl}/password/reset/otp`);

      const response = await fetch(`${baseUrl}/password/reset/otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigateToOTP();
      } else {
        console.log("Did it work? ", response.ok);
      }
    } catch (error) {
      console.error("Confirm email error:", error);
      // Handle errors here, such as showing a notification to the user
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back button */}

      <Button
        onlyIcon
        icon="left"
        iconFamily="antdesign"
        onPress={navigateToLogin}
        color="#F5F5F5"
        iconColor="#000"
        style={styles.backButton}
      >
        Back
      </Button>

      <View style={styles.pageTitle}>
        {/* Page title */}
        <Text style={styles.titleText}>Forgot Password?</Text>

        {/* Page discription */}
        <Text style={styles.descriptionText}>
          Don't worry! It occurs. Please enter the email address linked to your
          account.
        </Text>
      </View>

      {/* Email */}
      <Input
        rounded
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />

      {/* Send button */}
      <Button round style={styles.sendCodeButton} onPress={confirmEmail}>
        Send Code
      </Button>

      {/* Link  */}
      <View style={styles.signupLink}>
        <Text>
          Don't have an account? {""}
          <Link to={{ screen: "Register" }} style={styles.signupLinkText}>
            Sign up
          </Link>{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  backButton: {
    marginTop: 20,
  },
  pageTitle: {
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20,
    width: 365,
    height: 80,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 32,
    height: 40,
  },

  descriptionText: {
    marginRight: 70,
    marginTop: 20,
    lineHeight: 25,
    color: colours.textDescription,
    // height: 50
  },
  input: {
    marginTop: 20,
    color: colours.input,
    borderColor: colours.input,
  },
  sendCodeButton: {
    marginTop: 20,
    width: "95%",
    backgroundColor: colours.red,
  },
  signupLink: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signupLinkText: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    color: colours.orange,
  },
});

export default ConfirmEmailScreen;
