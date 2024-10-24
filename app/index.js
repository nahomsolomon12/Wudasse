// import React from 'react';
// import { StyleSheet, Text, View } from "react-native";
// import TypeWriterEffect from 'react-native-typewriter-effect';
import {Link} from 'expo-router'
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TypeWriter = ({ text, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
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
  }, [index, text, speed, delay]);

  return (
    <Text style={styles.text}>
      {displayedText}
    </Text>
  );
};
const App = () => {
  return (
    <View style={styles.container}>
      <TypeWriter text="ዕውቀት ይስፋፋ ፤ ድንቁርና ይጥፋ!" speed={100} />

      <Link href = {"/home"} style = {styles.button}>
      Go Here
      </Link>
    </View>
  );
};

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


// 
// export default function Page() {
//   return (
//     <View style={styles.container} >
//       <View style={styles.main}>
//           
//      
//         <Text style={styles.subtitle}>ዕውቀት ይስፋፋ ፤ ድንቁርና ይጥፋ! </Text>
//       </View>
//     </View>
//   );
// }
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
// 
// 
// 