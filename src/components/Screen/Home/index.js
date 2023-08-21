import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../common/Button'

export const Home = () => {
    return (
        <View style={styles.container}>
          <Button text="Press Me" width={200} height={50} backgroundColor="blue" />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
