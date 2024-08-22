import React from 'react'
import { View, Image } from 'react-native'
import { Text, Input, Button, } from 'galio-framework'


const PasswordRestSuccessScreen = () => {
  return (
    <View>
        {/* Success icon */}       
        <Image /> 

        {/* Screen title */}
        <Text>Create new password</Text>\

        {/* Success Message */}
        <Text>Your password has been changed Successfully.</Text>

        {/* Back to login button */}
        <Button>Back to Login</Button>


    </View>
  )
}

export default PasswordRestSuccessScreen