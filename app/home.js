import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

    
      function HomeScreen({ navigation }) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
          <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
        </View>
      );
    }

    function DetailsScreen({ navigation }) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Details Screen</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      );
    }

    export default function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      text: {
        fontSize: 24,
        marginBottom: 20,
      },
    });
