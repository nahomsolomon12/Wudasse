import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Animated, Image } from 'react-native';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    
    // Blue Background
    <ImageBackground 
      source={require("./cloud.jpeg")} 
      style={styles.background}
    >
      <View style={styles.container}>
        <RisingImage />
        <TypeWriterEffect />

        <Button style = {styles.button} title="Play" onPress={() => alert("No Player Profile")}/>
        
      </View>
    </ImageBackground>
  );
}


// TypeWriter

function TypeWriterEffect({ speed = 200, delay = 1500 }) {
  const fullText = 'Welcome to Wudase';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, fullText, speed, delay]);

  return <Text style={styles.typewriter}>{displayedText}</Text>;
}


// Rising Image Component
function RisingImage() {
  const riseAnim = new Animated.Value(500); // Start off-screen (500px below)

  useEffect(() => {
    Animated.timing(riseAnim, {
      toValue: 1, // Move to this position (higher up)
      duration: 2000, // 2 seconds
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Image
      source={require("./vmdirect.jpg")} // Replace with your image
      style={[styles.animatedImage, { transform: [{ translateY: riseAnim }] }]}
    />
  );
}



// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Covers the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedImage: {
    width: 400, // Adjust size
    height: 400,
    position: 'absolute', // Ensures it's not inside another view
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  typewriter: {
    fontFamily: "Times New Roman",
    fontSize: 100
  }
});

