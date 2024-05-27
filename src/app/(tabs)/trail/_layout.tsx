import CreateRoomComponent from "@/src/components/trail/CreateRoomComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function TrailStack () {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                //현재 위치
                headerLeft: () => (
                        <Link href={{pathname:"/mypage", params: {title: '모집중인 모임'}}} asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <View style={{flexDirection:"row", justifyContent:"flex-start", padding: 5, alignItems: "center"}}>
                                    <Text style={{fontSize: 20}}>상도동</Text>
                                    <MaterialCommunityIcons 
                                        name="menu-down" 
                                        color={"#000000"} 
                                        size={25}
                                    />
                                </View>
                            )}
                        </Pressable>
                        </Link>
                ),
                title: '',
            }} />
            <Stack.Screen name="roompage" options={{ 
                title: '모집중인 모임',
                headerRight: () => (
                    <Link href='./Createroom' asChild>
                        <Pressable>
                            {({pressed}) => (
                                <CreateRoomComponent />
                            )}
                        </Pressable>
                    </Link>
                )
            }} />
        </Stack>
    );
}
