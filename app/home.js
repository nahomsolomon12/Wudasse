

import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import React from 'react';
import {Link} from 'expo-router'




 
    
    
    export default function App() {
      return (
        <View style={styles.container}>

          <Text style = {styles.firstp}>This is my first attempt at Creating Wudasse Mariam Game App </Text>
          <Image source={require ("./images.jpeg")} style = {styles.image}></Image>
          <Link href = {"app/index.js"} styles = {styles.button}>Go Back Home</Link>

        </View>
        
       
      );
    }

    const styles = StyleSheet.create({
      container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      text: {
        fontSize: 24,
      
      },
      firstp: {
        fontSize: 20, 
        padding: 20
      },
      button: {
        fontSize: 20, 
        textDecorationLine: 'underline', 
      },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain', // adjust the image scaling
    },
    });
