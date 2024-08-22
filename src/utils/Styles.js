import { StyleSheet } from "react-native"
import { colours } from "./Colours"

export const customStyles = StyleSheet.create( {

  // Confirm email screen
  container: {
    backgroundColor: colours.white,
    paddingRight: 40,
    flex:1,
  },
  backButton: {
    marginTop:80,
    marginLeft: 20,
    width: 50,
    height: 50,
    // backgroundColor: colours.black
  },
  pageTitle: {
    marginLeft: 10,
    // marginRight: 60,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 32,
    height: 40
  },
  pageDescription: {
    marginLeft: 20,
    marginRight: 70,
    marginTop: 20,
    lineHeight: 25,
    color: colours.textDescription,
    height: 50
  },
  email:{
    marginLeft: 20,
    marginTop: 20,
    color: colours.input,
    borderColor: colours.inputBorder
  },
  sendCodeButton:{
    marginLeft: 20,
    marginTop: 20,
    width:'100%',
    backgroundColor: colours.red,
    // marginBottom: 450,
    alignItems: 'center'
  },
  resendLink: {
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  resendLinkText: {
    color: colours.orange,
    
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
  }


})