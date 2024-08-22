import React,{useEffect, useState} from 'react'
import { StyleSheet, View,Text, Image, TouchableOpacity } from 'react-native';
import { Input, Checkbox, Button } from "galio-framework";
import { colours } from '../../utils/Colours';
import { ScrollView } from 'react-native-gesture-handler'

const EditPersonaTrainerProfile = ({route, navigation}) => {

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

  // navigate back to the  personal trainer profile
  const navigateToTrainerProfile = () =>{
    navigation.navigate("PersonalTrainerProfile");
  }
  
  // naviagte to edit trainer personal info
  const naviagteToEditTrainPersonaInfoDetails = () =>{
    navigation.navigate("PersonalTrainerProfile");
  }

  // navigate to edit trainer description
const navigateToEdiTrainerProfile = () =>{
  navigation.navigate("PersonalTrainerProfile");
}



  const navigateToEditPersonalDetails = ()=>{
    navigation.navigate("EditTrainerPersonalDetails");
  }


  const navigateToEditTrainerDescrioption = ()=>{
    navigation.navigate("EditTrainerDescription");
  }


  const navigateToEditTrainerSpecifications = ()=>{
    navigation.navigate("EditTrainerSpecification");
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
        onPress={navigateToTrainerProfile}
        color="#F5F5F5" 
        iconColor="#000" 
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
          source={require("../../../assets/trainerProfile.jpg")}
        />
      </View>

      {/* Edit photo and status button */}
      <View style={styles.nameContainer}>
        <TouchableOpacity>
        <Text style={styles.editPhotoButton}>
          Edit Photo
        </Text>
      </TouchableOpacity>
        <Text style={styles.editAboutButton}>
          
        </Text>
      </View>

      {/* Live and Offline button */}
      
      {/* <View style={styles.hr} ></View> */}

      {/* Navigate to Edit  Trainer personal details */}
      <View style={styles.detailsContainer}>
          <Text style={styles.text}>Personal Details</Text>

          <Button 
            onlyIcon 
            icon="right" 
            iconFamily="antdesign" 
            onPress={navigateToEditPersonalDetails}
            color="#F5F5F5" 
            iconColor="#000" 
            style={styles.backButton}>Back</Button>

      </View>

      {/* <View style={styles.hr}></View> */}

{/* Navigate to Edit Trainer Specifications  */}
<View style={styles.detailsContainer}>
    <Text style={styles.text}>Trainer Specifications</Text>

    <Button 
      onlyIcon 
      icon="right" 
      iconFamily="antdesign" 
      onPress={navigateToEditTrainerSpecifications}
      color="#F5F5F5" 
      iconColor="#000" 
      style={styles.backButton}></Button>

</View>


      {/* <View style={styles.hr} ></View> */}

      {/* Navigate to Edit Trainer Description  */}
      <View style={styles.detailsContainer}>
          <Text style={styles.text}>Description</Text>

          <Button 
            onlyIcon 
            icon="right" 
            iconFamily="antdesign" 
            onPress={navigateToEditTrainerDescrioption}
            color="#F5F5F5" 
            iconColor="#000" 
            style={styles.backButton}></Button>

      </View>

  
      {/* <View style={styles.hr} ></View> */}


      {/*  */}
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
    }

})

export default EditPersonaTrainerProfile