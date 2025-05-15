import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Wudasse</Text>
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

export default AboutScreen;