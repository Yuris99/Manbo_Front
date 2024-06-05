import { Stack } from "expo-router";

export default function CommunityStack () {
    return (<Stack>
        <Stack.Screen name="index" options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="board" options={{
            title: "게시판",
            headerBackTitle: "",
            headerShown: false,
        }} />
    </Stack>);
}
