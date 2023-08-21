import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export const Headercopmponent = ({ text, fontWeight,fontSize }) => {
 
  const textStyle = {
    fontWeight: fontWeight || 'normal',
    fontSize: fontSize || 16,
  };

  return (
    <View>
      <Text style={textStyle}>{text}</Text>

    </View>
  );
}

const styles = StyleSheet.create({});
