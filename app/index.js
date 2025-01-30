import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <ImageBackground 
      source={require('./cloud.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {currentScreen === 'home' && <HomeScreen goToScreen={setCurrentScreen} />}
        {currentScreen === 'profile' && <ProfileScreen goToScreen={setCurrentScreen} />}
        {currentScreen === 'settings' && <SettingsScreen goToScreen={setCurrentScreen} />}
      </View>
    </ImageBackground>
  );
}

// Home Screen
function HomeScreen({ goToScreen }) {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>🏠 Home Screen</Text>
      <Button title="Go to Profile" onPress={() => goToScreen('profile')} />
      <Button title="Go to Settings" onPress={() => goToScreen('settings')} />
    </View>
  );
}

// Profile Screen
function ProfileScreen({ goToScreen }) {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>👤 Profile Screen</Text>
      <Button title="Go to Home" onPress={() => goToScreen('home')} />
      <Button title="Go to Settings" onPress={() => goToScreen('settings')} />
    </View>
  );
}

// Settings Screen
function SettingsScreen({ goToScreen }) {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>⚙️ Settings Screen</Text>
      <Button title="Go to Home" onPress={() => goToScreen('home')} />
      <Button title="Go to Profile" onPress={() => goToScreen('profile')} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for better readability
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

