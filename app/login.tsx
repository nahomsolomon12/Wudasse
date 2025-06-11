import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity, ImageBackground, Linking,
    ScrollView
} from 'react-native';





function LoginScreen() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            console.log(response)

            const data = await response.json();

            if (response.ok) {
                console.log("✅ Login success:", data);
                router.push('/dashboard'); // 👈 Navigate to dashboard
            } else {
                console.error("❌ Login failed:", data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    }


    function handleSignup() {
        Linking.openURL('mailto:nahomsolomon6@gmail.com?subject=Wudasse%20New%20Account%20Creation&body=Name%3A%20%0AEmail%3A%0APhone-Number%3A%20%0AEthiopian%20Orthodox%20Jurisdiction%3A%20');
    };


    return (

        <ImageBackground
            source={require('../assets/HolyVirgin.jpg')} // or require('./path/to/image.jpg')
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#ccc"
                        onChangeText={setUserName}
                        value={username}
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
            </ScrollView>
        </ImageBackground>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto'
    },

    background: {
        backgroundColor: 'rgba(0,0,0,0.4)',
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