import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, View,Text, Image, TouchableOpacity } from 'react-native';
import { Input, Checkbox, Button } from "galio-framework";
import { colours } from '../../utils/Colours';
import * as Progress from 'react-native-progress';

const EditUserProfile = ({route, navigation}) => {

  const [profilePic, setProfilePic ] =  useState("");
  const [about, setAbout ] =  useState("");
  const [profilePercentage, setProfilePercentage ] =  useState(0);
  const [profile, setProfile] = useState({
    name : "Sizwe",
    surname: "Mnothoza",
    about: "If you dont seperate yourself from distraction....",
    joinDate: "May 2022",
    fitnessLevel: "Intermediate",
    gender: "male",
    description: "Hugo Maze your guid to fitness and ......",
    age: 26,
    weight: 65,
    height: 30,
    bodyFat: 10,
    fitnessPreference: "Health, Nutritional Balance",
    contact:"0726758899",
    address: "7 Market Street",
    Occupation: "Teacher",
    MedicalCondition: "Health",
    percentage: 50,
  });

  useEffect(()=>{
     
  })

  const navigateToUserProfile = ()=>{
    navigation.navigate("Profile");
  }

  const navigateToEditPersonalDetails = ()=>{
    navigation.navigate("EditClientPersonalDetails");
  }

  const navigateToEditBMI = () =>{
    navigation.navigate("EditClientBMI");
  }

  const navigateToDescrioption = ()=>{
    navigation.navigate("EditClientDescription");
  }

  return (
    <ScrollView style={styles.container}>
        {/* Navigation */}
      <View style={styles.navContainer}> 
          {/* back to user profile button */}
       <Button 
        onlyIcon 
        icon="left" 
        iconFamily="antdesign" 
        onPress={navigateToUserProfile}
        color="#F5F5F5" 
        iconColor={colours.black}
        style={styles.backButton}>Back</Button>


        <Text style={styles.title}>
          Edit Profile
        </Text>

        <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/redLogo.png")}
        />
        </View>



      </View>

        {/* Profile pic */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/Landing page.png")}
        />
      </View>

        {/* Edit photo button and edit about button */}
      <View style={styles.nameContainer}>
        <TouchableOpacity>
        <Text style={styles.editPhotoButton}>
          Edit Photo
        </Text>
      </TouchableOpacity>
        <Text style={styles.editAboutButton}>
          Edit About
        </Text>
      </View>

        {/* User profile percentage */}
        <View style={styles.progressContainer}>
          
          <Text style={styles.text}>User Profile</Text>
          <Text style={styles.percentage}>{profile.percentage}% Complete</Text>
          <Progress.Bar color={colours.orange} progress={0.5} width={null} />

        </View>

        {/* Personal details dropdon */}
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>Personal Details</Text>

          <Button 
            onlyIcon 
            icon="right" 
            iconFamily="antdesign" 
            onPress={navigateToEditPersonalDetails}
            color="#F5F5F5" 
            iconColor={colours.black}
            style={styles.backButton}>Back</Button>

        </View>

        {/* BMI details dropdown */}

        <View style={styles.detailsContainer}>
          <Text style={styles.text}>BMI details</Text>

          <Button 
            onlyIcon 
            icon="right" 
            iconFamily="antdesign" 
            onPress={navigateToEditBMI}
            color="#F5F5F5" 
            iconColor={colours.black}
            style={styles.backButton}>Back</Button>

        </View>

        {/* description dropdown */}
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>Description</Text>

          <Button 
            onlyIcon 
            icon="right" 
            iconFamily="antdesign" 
            onPress={navigateToDescrioption}
            color="#F5F5F5" 
            iconColor={colours.black}
            style={styles.backButton}>Back</Button>

        </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginLeft:20,
      marginRight:20,
      marginBottom:20,
    },
    title:{

      fontSize:18,
    },
    navContainer:{
      marginTop:40,
      flex: 0.1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo:{
      width:40,
      height:40,
      resizeMode:'contain'
    },
    imageContainer:{
      alignItems: "center",
      justifyContent: "center",
      // marginTop: 20,
    },
    image:{
      width:150,
      height:150,
      borderRadius:75,
      // marginTop:20,
    },
    nameContainer:{
      flexDirection:'row',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    editPhotoButton:{
      fontSize:16,
      marginRight:10,
      color: colours.orange
    },
    editAboutButton:{
      fontSize:16,
      color: colours.orange
    },
    hr:{
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom:20,
      marginTop:20,
    },
    detailsContainer: {
      flex: 0.1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop:20,
      borderWidth:  1.5,
      borderRadius:  20,
      padding: 25,
      backgroundColor: colours.input,
      borderColor: colours.inputBorder,
    },
    text:{
      fontWeight:'bold',
      fontSize:14,
      // marginBottom:10,
    },
    percentage:{
      fontSize:14,
      marginBottom:10,
      color: colours.inputBorder
    },
    progressContainer:{
      marginTop:20,
      borderWidth:  1.5,
      borderRadius:  20,
      padding: 25,
      backgroundColor: colours.input,
      borderColor: colours.inputBorder,
    },

})

export default EditUserProfile