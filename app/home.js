


import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';



 
    
    
    export default function App() {
      return (
        <ScrollView style={styles.container}>

          <Text style = {styles.firstp}>This is my first attempt at Creating Wudasse Mariam Game App
          ; I hope I do not fuck it up. Correction: I will NOT fuck it up ":)" </Text>
          <Image source={require ("./images.jpeg")} style = {styles.image}></Image>
          <Link href = {"/"} styles = {styles.button}>Go Back Home</Link>

        </ScrollView>
        
       
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
