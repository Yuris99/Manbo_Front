import { router } from "expo-router";
import { Pressable, Text, View } from "react-native"

const WritePostComponent = () => {
    return (
      <Pressable style={{
        backgroundColor: '#cccccc',
        alignSelf: 'flex-end',
        height: 30,
        marginRight: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 100,
      }}
      onPress={()=>{router.push('/community/board/writepost')}}
      ><Text style={{fontSize: 13}}>글쓰기 +</Text>
      </Pressable>
    );
  };
  
export default WritePostComponent;