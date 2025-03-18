import { Link } from 'expo-router';
import { View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

const game = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Game</Text>
            
        </View>
    )
}


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


export default game;