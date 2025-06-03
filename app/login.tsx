import React, { useState } from 'react';
import { Link } from 'expo-router';
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity, ImageBackground, Linking
} from 'react-native';





function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log('Logging in with:', email, password);
        // Add API call or navigation here
    };
    function handleSignup() {
        Linking.openURL('https://www.google.com');
    };

    return (

        <ImageBackground
            source={require('../assets/HolyVirgin.jpg')} // or require('./path/to/image.jpg')
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signup} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto'
    },

    background: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 28,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: 250,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,

    },
    signup: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
});

export default LoginScreen;