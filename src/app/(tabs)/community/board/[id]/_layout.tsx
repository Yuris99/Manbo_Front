import { Stack, useLocalSearchParams } from "expo-router";
import FreePost from '@/assets/testdata/freedata';

export default function PostDynamicStack () {
  const {user_id} = useLocalSearchParams();
  const post = FreePost[Number(user_id)];
  return (
  <Stack>
    <Stack.Screen name="viewpost" />
    <Stack.Screen name="writepost" />
  </Stack>
  );
}
