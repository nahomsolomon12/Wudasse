import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import TypeWriterEffect from 'react-native-typewriter-effect';


export default function Page() {
  return (
    <View style={styles.container} >
      <View style={styles.main}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TypeWriterEffect 
              text="Hello World!" 
              textStyle={{ fontSize: 24 }} 
              maxDelay={100} 
            />
        </View>
        
        <Text style={styles.subtitle}>ዕውቀት ይስፋፋ ፤ ድንቁርና ይጥፋ! </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
