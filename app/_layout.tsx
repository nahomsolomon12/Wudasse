import { Stack } from 'expo-router';

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Wudasse Mariam",
                headerShown: false
            }} />
            <Stack.Screen name="about" options={{
                headerTitle: "About",
                headerTintColor: "#173843",
                headerTitleStyle: { fontWeight: "700" },
                headerStyle: { backgroundColor: "#f4f8f7" }
            }} />
        </Stack>

    );

}
