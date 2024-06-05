import { Stack } from "expo-router";

export default function CommunityStack () {
    return (<Stack screenOptions={{

    }}>
        <Stack.Screen name="index" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="board" options={{
            headerShown: false,
        }} />
    </Stack>);
}
