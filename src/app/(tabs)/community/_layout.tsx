import { Stack } from "expo-router";

export default function CommunityStack () {
    return (<Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="board" options={{
            title: "게시판",
            headerBackTitle: "",
        }} />
    </Stack>);
}
