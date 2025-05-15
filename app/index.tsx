import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Wudasse</Text>
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
  }
})

export default HomeScreen;