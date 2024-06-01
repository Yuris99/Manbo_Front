import { Stack } from "expo-router";

export default function RegisterStack () {
    return (
        <Stack>
            <Stack.Screen name="registerMain" options={{headerShadowVisible: false,}} />
            <Stack.Screen name="register2pw" options={{headerShadowVisible: false,}} />
            <Stack.Screen name="register3info" options={{headerShadowVisible: false,}} />
            <Stack.Screen name="register4gps" options={{headerShadowVisible: false,}} />
            <Stack.Screen name="registerComplete" options={{headerShadowVisible: false,}} />
            <Stack.Screen name="gpsSelector" options={{ presentation: 'modal' }} />
        </Stack>
    );
}
