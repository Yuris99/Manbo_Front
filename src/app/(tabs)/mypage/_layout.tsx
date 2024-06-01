import { Stack } from "expo-router";
import { Text } from "react-native";

export default function MypageStack () {

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: true,
            }} />
        </Stack>
    );
}
