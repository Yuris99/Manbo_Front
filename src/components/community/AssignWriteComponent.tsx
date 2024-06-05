import { Text, View } from "react-native";
import { useMBColor } from "../Themed";

const AssignWriteComponent = () => {
    return (
      <View style={{
        backgroundColor: useMBColor(0),
        alignSelf: 'flex-end',
        height: 30,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 100,
        marginRight: 30,
      }}><Text style={{fontSize: 13}}>저장</Text>
      </View>
    );
  };
  
export default AssignWriteComponent;