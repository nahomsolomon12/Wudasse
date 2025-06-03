import { Stack } from 'expo-router';


import { Text } from 'react-native';



export default function RootLayout() {


    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Wudasse Mariam"
            }} />
            <Stack.Screen name="Login" options={{
                headerTitle: "Log In"
            }} />
            <Stack.Screen name="about" options={{
                headerTitle: "About"
            }} />

        </Stack>

    );

}

