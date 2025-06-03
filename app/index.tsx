import React, { useState } from 'react';

import { Link } from 'expo-router';
import {
  View, Text, StyleSheet, ImageBackground
} from 'react-native';



function HomeScreen() {
  return (


    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/HolyVirgin.jpg')} // or require('./path/to/image.jpg')
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.text}>Welcome to Wudasse</Text>
        <Link href={"login"} style={styles.button} >Login</Link>

        <Link href={"about"} style={styles.button} >Go to About Screen </Link>

      </ImageBackground>
    </View >



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',

  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: "#ffff"
  },
  button: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: "underline"
  },
  background: {
    width: '100%',
    height: '100%'
  }
})

export default HomeScreen;