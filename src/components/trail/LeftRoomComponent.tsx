import { Text, View } from "react-native";
import { useMBColor } from "../Themed";

const LeftRoomComponent = () => {
    return (
      <View style={{
        backgroundColor: "#FF5722",
        alignSelf: 'flex-start',
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 100,
        marginRight: 10,
        
      }}><Text style={{fontSize: 13, color: 'white'}}>나가기</Text>
      </View>
    );
  };
  
export default LeftRoomComponent;