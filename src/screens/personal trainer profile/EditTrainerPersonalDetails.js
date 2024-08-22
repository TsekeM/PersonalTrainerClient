import React, {useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'


import { Input, Checkbox, Button } from "galio-framework";
import { colours } from '../../utils/Colours';
import { StyleSheet ,View,Text, Image, TouchableOpacity } from 'react-native'

const EditTrainerPersonalDetails = ({navigation}) => {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [address, setAddress] = useState(); 

  const navigateEditUserProfile = () =>{
    navigation.navigate("EditPersonaTrainerProfile");
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
        iconColor="#000" 
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

      <View style={styles.formContainer}>

      

      <Text style={styles.inputLabel}>
        {" "}  Name
      </Text>
      <Input  
        rounded
        style={styles.input}
      />


      <Text style={styles.inputLabel}>
        {" "}  Surname
      </Text>
      <Input  
        rounded
        style={styles.input}
      />

      <Text style={styles.inputLabel}>
        {" "}  Email
      </Text>
      <Input  
        rounded
        style={styles.input}
      />

      <Text style={styles.inputLabel}>
        {" "}  Date of Birth
      </Text>
      <Input  
        rounded
        style={styles.input}
      />


      <Text style={styles.inputLabel}>
        {" "}  Gender
      </Text>
      <Input  
        rounded
        style={styles.input}
      />

      <Text style={styles.inputLabel}>
        {" "}  Contact Details
        </Text>
        <Input  
          rounded
          style={styles.input}
        />


      <Text style={styles.inputLabel}>
        {" "}  Address
      </Text>
      <Input  
        rounded
        style={styles.input}
      />

<Button 
        round 
        style={styles.signupButton} 
        // onPress={register}
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


export default EditTrainerPersonalDetails