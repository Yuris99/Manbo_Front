import AssignSetupComponent from "@/src/components/mypage/AssignSetupComponent";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function MypageStack () {

    return (
        <Stack>
        <Stack.Screen name="index" options={{
            headerShown: true,
        }} />
        <Stack.Screen name="Likepage" options={{
            headerShown: true,
            title: "찜 목록",
        }} />
        <Stack.Screen name="SetupProfile" options={{
            headerShown: true,
            title: "프로필 설정",
            headerRight: () => (<AssignSetupComponent />)
        }} />
        </Stack>
    );
}
