import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, Checkbox, Button } from "galio-framework";
import { colours } from '../../utils/Colours';
import { StyleSheet ,View,Text, Image, TouchableOpacity } from 'react-native'

import { getItem } from '../../utils/Sorage';

const EditClientPersonalDetails = ({navigation}) => {

  const baseUrl = "http://192.168.1.47:8083/personal-trainer-on-call";

  useEffect(()=>{
    // getProfile();
  },[])

  const navigateEditUserProfile = () =>{
    navigation.navigate("EditUserProfile");
  }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");

  const save = async () =>{

    let clientProfile = await getItem('profile')
    const formData = new FormData();

    formData.append('clientId', JSON.parse(clientProfile).clientId )
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('dateOfBirth', dateOfBirth)
    formData.append('gender', gender)
    formData.append('contactNumber', contactNumber)
    formData.append('address', address)
    formData.append('occupation', occupation)

    console.log('====================================');
    console.log('updated info \n\n', formData);
    console.log('====================================');

    console.log('url ' , `${baseUrl}/edit/client/profile`);

    fetch(`${baseUrl}/edit/client/profile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("response from edit personal details: ", responseData);
    })
  }

  const getProfile = async () =>{
    console.log('get profile ');
    let clientProfile = await getItem('profile')
    console.log('====================================');
    console.log('Client profile in the edit personal details  page ' ,JSON.parse(clientProfile).clientId);
    console.log('====================================');
    console.log(JSON.parse(clientProfile).clientId);
  }

  const test = ()=>{
    console.log(name);
    console.log(surname);
    console.log(dateOfBirth);
    console.log(gender);
    console.log(contactNumber);
    console.log(address);
    console.log(occupation);
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
        onPress={navigateEditUserProfile}
        color="#F5F5F5" 
        iconColor={colours.black}
        style={styles.backButton}>Back</Button>


    <Text style={styles.title}>
       Edit Personal Details
    </Text>

    <View>
    <Image
      style={styles.logo}
      source={require("../../../assets/redLogo.png")}
    />
    </View>



      </View>

      {/* Profile */}
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

      <View style={styles.formContainer}>

      
      <Text style={styles.inputLabel}>
        {" "}  Name
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setName}
      />

      <Text style={styles.inputLabel}>
        {" "}  Surname
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setSurname}
      />

      <Text style={styles.inputLabel}>
        {" "}  Date of Birth
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setDateOfBirth}
      />

      <Text style={styles.inputLabel}> 
        {" "}  Gender
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setGender}
        
      />

      <Text style={styles.inputLabel}>
        {" "}  Contact details
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setContactNumber}
      />
      
      <Text style={styles.inputLabel} > 
        {" "}  Address  
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setAddress}
      />


      <Text style={styles.inputLabel} > 
        {" "}  occupation  
      </Text>
      <Input  
        rounded
        style={styles.input}
        onChangeText={setOccupation}
      />
      <Button 
        round 
        style={styles.signupButton} 
        onPress={save}
        >
        Save
      </Button>
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
    fontSize:18,
    marginRight:10,
    color: colours.orange
  },
  editAboutButton:{
    fontSize:18,
    color: colours.orange
  },
  hr:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom:20,
    marginTop:20,
  },
  bmiDetails:{
    marginTop : 20,
    marginBottom: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  signupButton:{
    marginTop: 20,
    width:'95%',
    backgroundColor: colours.red,
  },
  input:{
    color: colours.input,
    borderColor: colours.inputBorder
  },
  inputLabel:{
    fontWeight: 'bold'
  },
  formContainer:{
    marginTop:20,
    borderWidth:  1.5,
    borderRadius:  20,
    padding: 25,
    backgroundColor: colours.input,
    borderColor: colours.inputBorder,
  },
})

export default EditClientPersonalDetails