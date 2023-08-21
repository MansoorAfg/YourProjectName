import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Headercopmponent } from '../common/headercomponent'
import Custominput from '../common/Custominput'
import { CustomButton } from '../common/CustomButton'

export const Forgetpage = () => {
    const [name, setName] = useState("")
    return (
        <View style={styles.container}>
            <Headercopmponent text="Forget Password" fontWeight="600" fontSize={24} />
            <Text style={styles.txt}>please enter your email below to recevie</Text>
            <Text  style={styles.txt}>your password reset intrustions</Text>
            <Custominput Label={"username"} placeholder={"Enter your email"} onChangeText={setName} />
            <CustomButton text="Send Request" height={50} backgroundColor="#ff6347" />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    txt:{
        color:"gray"
    }
})