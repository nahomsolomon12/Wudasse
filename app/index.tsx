import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Wudasse</Text>
      <Link href={"about"} style={styles.button} >Go to About Screen </Link>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#25292e"
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: "#ffff"
  },
  button: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline"
  }
})

export default HomeScreen;