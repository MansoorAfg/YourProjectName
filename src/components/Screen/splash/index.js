import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



export const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/images/logoimg.png')} style={styles.logoimage} />
            <View style={styles.text}>
            <Text>aking</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoimage: {
        width: 100,
        height: 100
    },
    text:{
        fontSize:24,
        fontWeight:600
    }
})