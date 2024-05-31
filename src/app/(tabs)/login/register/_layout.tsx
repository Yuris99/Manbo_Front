import { Stack } from "expo-router";

export default function RegisterStack () {
    return (
        <Stack>
            <Stack.Screen name="registerMain" options={{headerShadowVisible: false,}} />
        </Stack>
    );
}
