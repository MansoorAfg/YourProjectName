import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Headercopmponent } from '../../common/headercomponent'
import Custominput from '../../common/Custominput'
import { CustomButton } from '../../common/CustomButton'

export const Welcomepage = () => {
  return (
    <View style={styles.container}>
      <Headercopmponent text="Welcome back" fontWeight="600" fontSize={24} />
      <Text style={styles.txt}>Sign in to continue</Text>
      <Custominput Label={"username"} placeholder={"Enter your username"} />
      <Custominput Label={"password"} placeholder={"Enter your password"} />
      <CustomButton text="Log In" height={50} backgroundColor="#ff6347" />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 160
  },
  txt:{
    color:"gray"
  }
})