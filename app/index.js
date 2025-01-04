import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

// Type Writer Effect for when the app boots up
function TypeWriterEffect({ speed = 200, delay = 2500 }) {
  const fullText = 'ዕውቀት ይስፋፋ ድንቁርና ይጥፋ';
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

  return <Text style={styles.text}>{displayedText}</Text>;
}

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TypeWriterEffect />
      <Text style = {styles.text}>Welcome to Wudase!</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('Sign In')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

// Details Screen Component
function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Click Here</Text>
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>Click There</Text>
    </View>
  );
}

// Stack Navigator Setup
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 80,
    fontFamily: 'AbyssinicaSIL-Regular'
  },
});
