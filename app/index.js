import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();

  return (
    // Blue Background
    <ImageBackground 
      source={require("./cloud.jpeg")} 
      style={styles.background}
    >
      <View style={styles.container}>
        <RisingImage />
        <TypeWriterEffect />

        <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
        
      </View>
    </ImageBackground> );
    
  }


// TypeWriter Effect

function TypeWriterEffect({ speed = 200, delay = 1500 }) {
  const fullText = 'Welcome to Wudase';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [index]);
  
}


// Rising Image Component
function RisingImage() {
  const riseAnim = useRef(new Animated.Value(500)).current; // useRef to persist value
useEffect(() => {
  Animated.timing(riseAnim, {
    toValue: 0, // Moves up to the correct position
    duration: 3000,
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
    position: 'top', // Ensures it's not inside another view
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  typewriter: {
    fontFamily: "Times New Roman",
    fontSize: 30
  }
});

