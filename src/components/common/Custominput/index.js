import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'



const Custominput = ({ Label, value, placeholder, onChangeText, }) => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text style={styles.label}>{Label}</Text>
            <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} style={styles.input} />
       
        </View>
    )
}

export default Custominput

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 30,
        borderBottomWidth: 1,
        borderColor: 'gray',
        color:"gray"
    },
    label:{
        fontWeight:"bold"
    }
})