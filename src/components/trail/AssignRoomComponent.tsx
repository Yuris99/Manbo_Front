import { Text, View } from "react-native";
import { useMBColor } from "../Themed";

const AssignRoomComponent = () => {
    return (
      <View style={{
        backgroundColor: useMBColor(0),
        alignSelf: 'flex-start',
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 100,
        
      }}><Text style={{fontSize: 13}}>모집!</Text>
      </View>
    );
  };
  
export default AssignRoomComponent;