import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input, Button, Icon } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler'
import { colours } from '../../utils/Colours';

const PersonaTrainerProfile = ({route, navigation}) => {

  const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";

  
  const [profilePic, setProfilePic ] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [about, setAbout] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [fitnessLevel,setFitnessLevel] = useState("");
  const [gender,setGender] = useState("");
  const [description,setDescription] = useState("");
  const [contact,setContact] = useState("");

  const [profile, setProfile] = useState({
    name : "Zininzi ",
    surname: "Vitshima",
    about: "If you dont seperate yourself from distraction....",
    joinDate: "May 2022",
    fitnessLevel: "Intermediate",
    gender: "Female",
    description: "Zininzi Vitshima your guid to fitness and ......",
    age: 26,
    weight: 65,
    height: 30,
    bodyFat: 10,
    fitnessPreference: "Health, Nutritional Balance",
    contact:"0726758899",
    address: "7 Market Street",
    Occupation: "Teacher",
    MedicalCondition: "Health",
    bookingHistory: 50,
    review: 4,
    reviewTally: 96,
    trainerLevel: "Master Trainer",
    experience: 2,
    specialization: "Health, Nutritional Balance, & fitness", 
  });


  useEffect(()=>{
    getProfile();
  },[])

  const navigateToEditTrainerProfile = () =>{
    navigation.navigate("EditPersonaTrainerProfile");
  }
  
  const navigateToLanding = () => {
    // navigation.navigate("Home");
  };

  const getProfile = async () =>{
    // get client id from storage
    console.log('get profile ');
    let clientProfile = await getItem('profile')
    console.log('====================================');
    console.log('Trainer profile in the profile page ' ,JSON.parse(clientProfile).clientId);
    console.log('====================================');

    console.log(`${baseUrl}/client/${JSON.parse(clientProfile).clientId}`);

    fetch(`${baseUrl}/client/${JSON.parse(clientProfile).clientId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response get user profile :   ", responseData.client);
        setProfile(responseData.client)
      
      })
  }


  return (
    <ScrollView style={styles.container}> 
         
      {/* Navigation */}
      <View style={styles.navContainer}> 
          {/* back button */}
       <Button 
        onlyIcon 
        icon="left" 
        iconFamily="antdesign" 
        // onPress={navigateToLanding}
        color="#F5F5F5" 
        iconColor="#000" 
        style={styles.backButton}>Back</Button>
        <Text>
           Profile
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

      {/* client name and surname */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {profile.name} 
        </Text>
        <Text style={styles.surname}>
          {profile.surname}
        </Text>
      </View>

    {/* Joined dated */}
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>
            Joined {" "} {profile.joinDate}
        </Text>
      </View>

      <View style={styles.hr} ></View>

      {/* Booking history total, rating and total No. of reviews   */}
      <View 
        style={styles.bookingHistoryContainer}
        >
        <View style={styles.historyContainer}>
          <Text>{profile.bookingHistory}</Text>
          <Text>Booking history</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Icon style={styles.starIcon} name="star" family="Entypo" color={colours.orange} size={20} />
          <Text>{profile.review} {"("}{profile.reviewTally} {" reviews)"}</Text>
        </View>
      </View>

      <View style={styles.hr} ></View>

      {/*Trainer level and   Edit button  */}
      <View style={styles.jointDateConatiner}>
        <Text style={styles.joinDate} >
          {profile.trainerLevel}
        </Text> 
      
        <Button 
          onlyIcon 
          icon="edit" 
          iconFamily="feather" 
          color="#F5F5F5" 
          iconColor={colours.orange}
          onPress={navigateToEditTrainerProfile}
          // size={50}
          ></Button>
      </View>


      <View style={styles.hr} ></View>

      {/* Experience  */}
      <View style={styles.detailsContainer}> 
        <Text style={styles.key}>
          Experience
        </Text>
        <Text styles={styles.value}>
          {profile.experience} {" "} years
        </Text>
      </View>

      {/* Specialization */}
      <View style={styles.detailsContainer}> 
        <Text style={styles.key}>
          Specialization
        </Text>
        <Text style={styles.specialization}>
          {profile.specialization}
        </Text>
      </View>

      <View style={styles.hr} ></View>

      {/* Description */}
      <View style={""}> 
        <Text style={styles.key}>Description</Text>
        <Text style={styles.description}>
          {profile.description}
        </Text>
      </View>

      <View style={styles.hr} ></View>

      {/* Age */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Age</Text>
      <Text>
        {profile.age}{" "}years
      </Text>
      </View>

      {/* Gender */}
      <View style={styles.detailsContainer}> 
        <Text style={styles.key}>Gender</Text>
        <Text>
          {profile.gender}
        </Text>
      </View>

      {/* Address */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Address</Text>
      <Text>
        {profile.address}
      </Text>
      </View>

      {/* Contact details */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Contact details</Text>
      <Text>
        {profile.contact}
      </Text>
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
    marginTop: 20,
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
  name:{
    fontSize:24,
    marginRight:10,
  },
  surname:{
    fontSize:24,
  },
  hr:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom:20,
    marginTop:20,
  },
  aboutContainer:{
    marginTop:10,
    alignItems: "center",
    justifyContent: "center",
  },
  about:{
    fontSize:16,
    // color: '#EA1414',
  },
  jointDateConatiner:{
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  joinDate:{
    fontSize:24,
    // color: '#EA1414',
    fontWeight:'bold'
  }, 
  detailsContainer:{
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:20,
  },
  key:{
    // color: '#EA1414',
    fontSize: 16,
    fontWeight:'bold'
  },
  value:{
    // marginRight:20,
  },
  description:{
    marginTop:20,
  },

  bookingHistoryContainer : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  historyContainer:{
    alignItems: "center",
  },

  ratingContainer : {
    flexDirection: 'row',
    alignItems: "center",
    // justifyContent: "space-between",
  },

  starIcon:{
    marginRight: 10,
  },

  specialization:{
    // width: 
  }

})

export default PersonaTrainerProfile