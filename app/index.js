import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Link} from 'expo-router'
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';



// Type Writer Effect for when the app boots up 
function TypeWriterEffect({ speed = 200, delay = 2500}) {
  const fullText = 'ዕውቀት ይስፋፋ ድንቁርና ይጥፋ'
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (fullText && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout); // Cleanup timeout
    } else {
      // If text is fully typed, wait for the specified delay and restart
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay); // Delay before restarting the effect
      return () => clearTimeout(resetTimeout);
    }
  }, [index, fullText, speed, delay]);

  return (
    <Text style={styles.text}>
      {displayedText}
    </Text>
  );
};








// Navigation Code

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



// 
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      

      <TypeWriterEffect></TypeWriterEffect>
          <Link style = {{padding:50}} href = {"app/home.js"}>Go to your First Page</Link>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      
    </View>
  );
}





// Main Page 

const App = () => {
  return (   
    
    
    <NavigationContainer independent = {true}>

      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        
      </Tab.Navigator>
    
      
    </NavigationContainer>
      

    
    
  );
};


// Visual/Aesthetics 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

export default App;

