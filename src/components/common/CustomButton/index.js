import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ text, width, height, backgroundColor, }) => {
  const buttonStyles = StyleSheet.flatten([
    styles.button,
    { width, height, backgroundColor }, 
  ]);

  return (
    <TouchableOpacity style={buttonStyles}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop:80
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
});


