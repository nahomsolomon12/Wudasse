import { Link } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function AboutScreen() {
  return (
    <ImageBackground source={require('../assets/abba-george.jpeg')} resizeMode='cover' style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>About Wudasse</Text>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: "#ffff"
  },

  background: {
    width: '100%',
    height: '100%'
  }
})

export default AboutScreen;