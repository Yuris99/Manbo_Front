import { router } from "expo-router";
import { Pressable, Text, View } from "react-native"

const WritePostComponent = () => {
    return (
      <View style={{
        backgroundColor: '#cccccc',
        alignSelf: 'flex-end',
        height: 30,
        marginRight: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 100,
      }}
      ><Text style={{fontSize: 13}}>글쓰기 +</Text>
      </View>
    );
  };
  
export default WritePostComponent;