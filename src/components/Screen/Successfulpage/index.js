import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Headercopmponent } from '../../common/headercomponent'


export const Successfulpage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/successfullyimg.png')} style={styles.successimage} />
      <Headercopmponent text="Successful!" fontWeight="600" fontSize={24} />
      <Text>you have Successfully change password.</Text>
      <Text>please use your new passwords when</Text>
      <Text>logging in.</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  successimage: {
    width: 150,
    height: 150
  }
})