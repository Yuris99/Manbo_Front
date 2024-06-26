import { Stack } from "expo-router";

export default function LoginStack () {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false,}} />
            <Stack.Screen name="loginpage" options={{headerShadowVisible: false, }} />
            <Stack.Screen name="register" options={{headerShown: false,}} />
        </Stack>
    );
}
