import { Stack } from "expo-router";

export default function PostDynamicStack () {
  return (
  <Stack>
    <Stack.Screen name="viewpost" />
    <Stack.Screen name="writepost" />
  </Stack>
  );
}
