import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image
  } from "react-native";

  import { Input, Button, Block } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler';

import { colours } from '../../utils/Colours';


import { getItem } from '../../utils/Sorage';

const UserProfile = ({route, navigation}) => {

  const baseUrl = "http://192.168.0.147:8083/personal-trainer-on-call";

  useEffect(()=>{
    getProfile();
  },[])
  
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
    name : "Sizwe",
    surname: "Mnothoza",
    about: "If you dont seperate yourself from distraction....",
    joiningDate: "May 2022",
    fitnessLevel: "Intermediate",
    gender: "male",
    description: "Hugo Maze your guid to fitness and ......",
    age: 26,
    weight: 65,
    height: 30,
    bodyFat: 10,
    fitnessPreferences: "Health, Nutritional Balance",
    contactNumber:"0726758899",
    address: "7 Market Street",
    occupation: "Teacher",
    medicalCondition: "Health"
  });

  const fetchUserProfile = async ()=>{

  }

  const navigateToEditUserProfile = () =>{
    navigation.navigate("EditUserProfile");
  }
  
  const navigateToLanding = () => {
    navigation.navigate("Home");
  };


  const getProfile = async () =>{
    // get client id from storage
    console.log('get profile');
    let clientProfile = await getItem('profile')
    console.log('====================================');
    console.log('Client profile in the profile page ' ,JSON.parse(clientProfile).clientId);
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
        console.log("Response get user profile :   ", responseData);
        setProfile(responseData.clientDto)
      
      })
  }

  return (
    <ScrollView style={styles.container} >
      
      {/* Navigation */}
      <View style={styles.navContainer}> 
          {/* back button */}
       <Button 
        onlyIcon 
        icon="left" 
        iconFamily="antdesign" 
        onPress={navigateToLanding}
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
          source={require("../../../assets/Landing page.png")}
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

      {/* client about / bio */}
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>
          {profile.about}
        </Text>
      </View>

      <View style={styles.hr} ></View>

      {/* Joint date */}
      <View style={styles.jointDateConatiner}>
      <Text style={styles.joinDate} >
        Joined {" "} {profile.joiningDate}
      </Text> 
      <Button 
        onlyIcon 
        icon="edit" 
        iconFamily="feather" 
        color="#F5F5F5" 
        iconColor={colours.orange}
        onPress={navigateToEditUserProfile}
        size={30}
        >Back</Button>
      </View>

      <View style={styles.hr} ></View>

      {/* Fitness level */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>
      Fitness level
      </Text>
      <Text style={styles.value}>
        {profile.fitnessLevel}
      </Text>
      </View>

      {/* Gender */}

      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Gender</Text>
      <Text style={styles.value}>
        {profile.gender}
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
      <Text style={styles.value}>
        {profile.age}{" "}years
      </Text>
      </View>

      {/* Weight */}

      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Weight</Text>
      <Text style={styles.value}>
        {profile.weight}{" "}Kg
      </Text>
      </View>

      {/* Height */}

      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Height</Text>
      <Text style={styles.value}>
        {profile.height}{" "}"
      </Text>
      </View>

      {/* Body fat */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Body fat</Text>
      <Text style={styles.value}>
        {profile.bodyFatPercentage}{" "}%
      </Text>
      </View>

      {/* Fitness preferencs */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Fitness preferencs</Text>
      <Text style={styles.value}>
        {profile.fitnessPreferences}
      </Text>
      </View>

      {/* Contact details */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Contact details</Text>
      <Text style={styles.value}>
        {profile.contactNumber}
      </Text>
      </View>

      {/* Address */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Address</Text>
      <Text style={styles.value}>
        {profile.address}
      </Text>
      </View>

      {/* Occupation */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Occupation</Text>
      <Text style={styles.value}> 
        {profile.occupation}
      </Text>
      </View>

      {/* Medical Condition */}
      <View style={styles.detailsContainer}> 
      <Text style={styles.key}>Medical Condition</Text>
      <Text style={styles.value}>
        {profile.medicalCondition}
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
    color:colours.textDescription
  },
  description:{
    marginTop:20,
  }

})

export default UserProfile