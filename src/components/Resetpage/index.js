import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Headercopmponent } from '../common/headercomponent'
import Custominput from '../common/Custominput'
import { CustomButton } from '../common/CustomButton'

export const Resetpage = () => {
    return (
        <View style={styles.container}>
            <Headercopmponent text="Reset Password" fontWeight="600" fontSize={24} />
            <Text style={styles.txt}>Reset codes was sent to our email.please</Text>
            <Text style={styles.txt}>enter the code and create new password</Text>
            <Custominput Label={"Reset code"} placeholder={"Enter your number"} />
            <Custominput Label={"New password"} placeholder={"Enter your password"} />
            <Custominput Label={"Confirm password"} placeholder={"Enter your confirm password"} />
            <CustomButton text="Change password" height={50} backgroundColor="#ff6347" />

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