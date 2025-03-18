import { Link } from 'expo-router';
import { View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to Wudasse</Text>
        <Link style={styles.text} href="/game">Play</Link>
    </View>
     
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})

export default HomeScreen;