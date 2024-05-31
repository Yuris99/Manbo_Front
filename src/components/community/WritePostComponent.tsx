import { Text, View } from "react-native"

const WritePostComponent = () => {
    return (
      <View style={{
        backgroundColor: '#cccccc',
        alignSelf: 'flex-start',
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 100,
      }}><Text style={{fontSize: 13}}>글쓰기 +</Text>
      </View>
    );
  };
  
export default WritePostComponent;