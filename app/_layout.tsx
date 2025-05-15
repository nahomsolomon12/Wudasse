import { Stack } from 'expo-router';

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Wudasse Mariam"
            }} />
            <Stack.Screen name="about" options={{
                headerTitle: "About"
            }} />
        </Stack>

    );

}

