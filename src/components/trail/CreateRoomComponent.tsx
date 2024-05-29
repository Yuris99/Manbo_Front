import { Text, View } from "react-native";

const CreateRoomComponent = () => {
    return (
      <View style={{
        backgroundColor: '#cccccc',
        alignSelf: 'flex-start',
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 100,
        
      }}><Text style={{fontSize: 13}}>방만들기 +</Text>
      </View>
    );
  };
  
export default CreateRoomComponent;