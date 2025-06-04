import React, { useState } from 'react';

import { Link } from 'expo-router';
import {
  View, Text, StyleSheet, ImageBackground, TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';




function HomeScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  }
  const goAbout = () => {
    router.push('/about');
  }

  return (
    <ImageBackground
      source={require('../assets/HolyVirgin.jpg')} // or require('./path/to/image.jpg')
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.text}>Welcome to Wudasse</Text>
          <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={goAbout}>
            <Text style={styles.button}>Go to About Screen</Text>
          </TouchableOpacity>

        </View >

      </ScrollView>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'space-around',

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
  },
  touchable: {
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: '#ffa500',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: 180
  },
  background: {
    width: '100%',
    height: '100%'
  }
})

export default HomeScreen;